module.exports = {
	plugins: ['mocha'],
	env: {
		es6: true,
		node: true,
		mocha: true,
		browser: true,
		commonjs: true
	},
	parserOptions: {
		ecmaVersion: 11
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	rules: {
		// turned off rules
		'consistent-return': 'off',
		'no-param-reassign': 'off',
		strict: 'off',
		'no-console': 'off',
		'func-names': 'off',

		// warnings
		// -> we don't want warnings

		// errors
		indent: ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'comma-dangle': ['error', 'never'],
		'object-shorthand': ['error', 'never'],
		'prefer-arrow-callback': ['error', { allowNamedFunctions: true, allowUnboundThis: true }],
		'no-bitwise': ['error', { int32Hint: true }]
	}
};
