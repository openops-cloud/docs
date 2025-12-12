const credentials = require('./credentials.json');
const fs = require('fs/promises');
const path = require('path');

const API_URL = 'https://app.openops.com/api/v1/cloud-templates?version=9999';
const OUT_RELATIVE = '../snippets/templates-generated.mdx';

async function main() {
  try {
      const res = await fetch(API_URL, {
          headers:
              {
                  'Accept': 'application/json',
                  'Cookie': credentials.cookie
              }
      });

    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

    const body = await res.json();

    // SIMPLE: assume top-level array, map to .name, filter non-strings, drop duplicates
    const rawNames = Array.isArray(body) ? body.map(item => item?.name) : [];
    const names = [...new Set(rawNames.filter(n => typeof n === 'string' && n.trim()))];

    const header = 'OpenOps currently provides the following templates:';
    const lines = [header, '', ...(names.length ? names.map(n => `- ${n}`) : ['- (no templates found)']), ''];
    const outPath = path.resolve(__dirname, OUT_RELATIVE);

    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, lines.join('\n'), 'utf8');

    console.log(`Wrote ${names.length} template(s) to ${outPath}`);
  } catch (err) {
    console.error('Error:', err?.message ?? err);
    process.exitCode = 1;
  }
}

main();
