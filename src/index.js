module.exports = {
	extends: [
		'eslint-config-airbnb-base',
		require.resolve('./rules/default')
	],
	plugins: ['jest'],
	rules: {}
};
