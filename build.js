const fs = require('fs');
const { GasPlugin } = require('esbuild-gas-plugin');

if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist');
}

if (fs.existsSync('./appsscript.json')) {
    fs.copyFileSync('./appsscript.json', './dist/appsscript.json');
}

if (fs.existsSync('./.clasp.json')) {
    let clasp = JSON.parse(fs.readFileSync('./.clasp.json'));
    clasp.rootDir = './dist';
    fs.writeFileSync('./.clasp.json', JSON.stringify(clasp, null, 4));
}

require('esbuild')
    .build({
        entryPoints: ['src/index.ts'],
        bundle: true,
        outfile: 'dist/index.js',
        plugins: [GasPlugin],
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
