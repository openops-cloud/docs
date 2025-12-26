const fs = require('fs/promises');
const path = require('path');

const API_BASE_URL = 'https://app.openops.com/api/v1/blocks/';
const OUT_RELATIVE_DIRECTORY = '../snippets/cloud-providers/';
const CLOUD_PROVIDERS = [
    {name: 'AWS', url: '@openops/block-aws', file: 'aws.mdx'},
    {name: 'Azure', url: '@openops/block-azure', file: 'azure.mdx'},
    {name: 'GCP', url: '@openops/block-google-cloud', file: 'gcp.mdx'},
]

const prepareMarkdownLines = actions => {
    const lines = [];
    for (const action of actions) {
        lines.push(`* **${action.name}**: ${action.description}`);
    }
    return lines;
};

const writeMarkdownToFile = async (lines, cloudProvider, number) => {
    const outPath = path.resolve(__dirname, OUT_RELATIVE_DIRECTORY + cloudProvider.file);
    await fs.mkdir(path.dirname(outPath), {recursive: true});
    await fs.writeFile(outPath, lines.join('\n') + '\n', 'utf8');
    console.log(`Wrote ${number} actions for ${cloudProvider.name} to ${outPath}`);
};

const main = async () => {
    try {
        for (const cloudProvider of CLOUD_PROVIDERS) {
            const res = await fetch(API_BASE_URL + cloudProvider.url);
            if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

            const block = await res.json();
            if (!block.actions) throw new Error('Unexpected API response: expected a nested property "actions"');

            const actions = Object.values(block.actions).map(x => ({
                    name: x.displayName,
                    description: x.description
                })
            )

            const lines = prepareMarkdownLines(actions);
            await writeMarkdownToFile(lines, cloudProvider, actions.length);
        }
    } catch (err) {
        console.error('Error:', err?.message ?? err);
        process.exitCode = 1;
    }
};

main();
