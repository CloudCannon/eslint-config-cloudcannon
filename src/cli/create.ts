#!/usr/bin/env node

import NodeExtended from 'node-extended';
import fs from 'fs';
import prettier from 'prettier';

// Sets up eslint in a new project
async function run() {
	await NodeExtended.execute(
		'npm install eslint-config-cloudcannon eslint eslint-plugin-import eslint-plugin-mocha --save-dev'
	);
	fs.writeFileSync('.eslintrc.json', JSON.stringify(
		{
			extends: [
				'cloudcannon'
			]
		}
	));

	// Write scripts to package.json
	const pkg = JSON.parse(fs.readFileSync('package.json').toString());
	const newScripts = {
		'lint-autofix': 'eslint --fix lib/** config/** test/** application.js',
		'lint-code': 'eslint  lib/** config/** test/** application.js',
		lint: 'npm run lint-autofix && npm run lint-code'
	};
	if (!pkg.scripts) {
		pkg.scripts = { ...newScripts };
	} else {
		pkg.scripts = { ...newScripts, ...pkg.scripts };
	}

	fs.writeFileSync('package.json', prettier.format(JSON.stringify(pkg), { parser: 'json' }));

	console.log('Done!');
}

run();
