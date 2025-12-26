const fs = require('fs/promises');
const path = require('path');

const AUTH_URL = 'https://app.openops.com/api/v1/authentication/sign-in';
const TEMPLATES_URL = 'https://app.openops.com/api/v1/flow-templates?version=9999';
const OUT_RELATIVE = '../snippets/templates-generated.mdx';

const caseInsensitive = () => (a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'});

const groupTemplatesByCategory = templates => {
    const categoryMap = new Map();

    for (const template of templates) {
        const name = template?.name?.trim();
        if (!name) continue;

        const categories = template.categories?.length
            ? template.categories
            : ['Multi-cloud'];

        for (const category of categories) {
            const cat = String(category).trim();
            if (!categoryMap.has(cat)) categoryMap.set(cat, []);
            categoryMap.get(cat).push(name);
        }
    }
    return categoryMap;
};

const prepareMarkdownLines = (categoryMap, caseInsensitive) => {
    const lines = ['OpenOps currently provides the following templates.', ''];

    const stats = {
        names: 0
    }

    const sortedCategories = [...categoryMap.keys()].sort(caseInsensitive());
    stats.categories = sortedCategories.length;

    for (const category of sortedCategories) {
        lines.push(`### ${category}`);
        const names = [...new Set(categoryMap.get(category))].sort(caseInsensitive());
        stats.names += names.length;
        names.forEach(name => lines.push(`* ${name}`));
    }
    return {lines, stats};
};

const writeMarkdownToFile = async (lines, stats) => {
    const outPath = path.resolve(__dirname, OUT_RELATIVE);
    await fs.mkdir(path.dirname(outPath), {recursive: true});
    await fs.writeFile(outPath, lines.join('\n') + '\n', 'utf8');
    console.log(`Wrote ${stats.categories} categories, ${stats.names} template names to ${outPath}`);
};

const getAuthToken = async () => {
    let credentialsFile = {};
    try {
        credentialsFile = require('./credentials.json');
    } catch {
        console.log('No credentials.json found. Using environment variables instead.');
    }

    const username = process.env.OPENOPS_USERNAME || credentialsFile.username;
    const password = process.env.OPENOPS_PASSWORD || credentialsFile.password;

    const auth = await fetch(AUTH_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
                "email": username,
                "password": password
            }
        )
    });

    if (!auth.ok) throw new Error(`Unable to authenticate with app.openops.com: error ${auth.status}, ${auth.statusText}`);

    return (await auth.json()).token;
};

const main = async () => {
    try {
        const token = await getAuthToken()
        const res = await fetch(TEMPLATES_URL, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        });

        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

        const templates = await res.json();
        if (!Array.isArray(templates)) throw new Error('Unexpected API response: expected array');

        const categoryMap = groupTemplatesByCategory(templates);
        const {lines, stats} = prepareMarkdownLines(categoryMap, caseInsensitive);
        await writeMarkdownToFile(lines, stats);
    } catch (err) {
        console.error('Error:', err?.message ?? err);
        process.exitCode = 1;
    }
};

main();
