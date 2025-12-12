const credentials = require('./credentials.json');
const fs = require('fs/promises');
const path = require('path');

const API_URL = 'https://app.openops.com/api/v1/cloud-templates?version=9999';
const OUT_RELATIVE = '../snippets/templates-generated.mdx';

function addToMap(map, key, value) {
  if (!map.has(key)) map.set(key, new Set());
  map.get(key).add(value);
}

async function main() {
  try {
    const res = await fetch(API_URL, {
      headers: {
        Accept: 'application/json',
        Cookie: credentials.cookie
      }
    });

    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

    const body = await res.json();
    if (!Array.isArray(body)) throw new Error('Unexpected API response shape: expected top-level array');

    // Build map: category -> Set(names)
    const map = new Map();

    for (const item of body) {
      const name = typeof item?.name === 'string' ? item.name.trim() : null;
      if (!name) continue;

      const cats = Array.isArray(item?.categories) && item.categories.length
        ? item.categories.map(c => String(c).trim()).filter(Boolean)
        : ['Uncategorized'];

      for (const c of cats) addToMap(map, c, name);
    }

    // Prepare sorted output: categories alphabetically, names alphabetically
    const sortedCategories = [...map.keys()].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

    const lines = ['OpenOps currently provides the following templates:', ''];

    for (const cat of sortedCategories) {
      lines.push(`* ${cat}`);
      const names = [...map.get(cat)].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
      for (const n of names) {
        lines.push(`  * ${n}`);
      }
    }

    if (sortedCategories.length === 0) {
      lines.push('- (no templates found)');
    }

    lines.push(''); // trailing newline

    const outPath = path.resolve(__dirname, OUT_RELATIVE);
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, lines.join('\n'), 'utf8');

    console.log(`Wrote ${sortedCategories.length} category(ies) to ${outPath}`);
  } catch (err) {
    console.error('Error:', err?.message ?? err);
    process.exitCode = 1;
  }
}

main();
