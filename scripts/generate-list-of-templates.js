const credentials = require('./credentials.json');
const fs = require('fs/promises');
const path = require('path');

const API_URL = 'https://app.openops.com/api/v1/cloud-templates?version=9999';
const OUT_RELATIVE = '../snippets/templates-generated.mdx';

async function main() {
  try {
    const res = await fetch(API_URL, {
      headers: {
        Accept: 'application/json',
        Cookie: credentials.cookie
      }
    });

    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

    const templates = await res.json();
    if (!Array.isArray(templates)) throw new Error('Unexpected API response: expected array');

    // Group templates by category
    const categoryMap = new Map();

    for (const template of templates) {
      const name = template?.name?.trim();
      if (!name) continue;

      const categories = template.categories?.length
        ? template.categories
        : ['Uncategorized'];

      for (const category of categories) {
        const cat = String(category).trim();
        if (!categoryMap.has(cat)) categoryMap.set(cat, []);
        categoryMap.get(cat).push(name);
      }
    }

    // Build markdown
    const lines = ['OpenOps currently provides the following templates:', ''];

    const sortedCategories = [...categoryMap.keys()].sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: 'base' })
    );

    for (const category of sortedCategories) {
      lines.push(`* ${category}`);

      const names = [...new Set(categoryMap.get(category))].sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
      );

      names.forEach(name => lines.push(`  * ${name}`));
    }

    if (sortedCategories.length === 0) {
      lines.push('- (no templates found)');
    }

    // Write file
    const outPath = path.resolve(__dirname, OUT_RELATIVE);
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, lines.join('\n') + '\n', 'utf8');

    console.log(`Wrote ${sortedCategories.length} category(ies) to ${outPath}`);
  } catch (err) {
    console.error('Error:', err?.message ?? err);
    process.exitCode = 1;
  }
}

main();
