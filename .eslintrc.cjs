// // .eslintrc.cjs

// module.exports = {
//   parser: '@typescript-eslint/parser',
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:@typescript-eslint/recommended-requiring-type-checking'
//   ],
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     tsconfigRootDir: __dirname,
//     project: ['./tsconfig.json'],
//     extraFileExtensions: ['.svelte']
//   },
//   env: {
//     es6: true,
//     browser: true
//   },
//   overrides: [
//     {
//       files: ['*.svelte'],
//       processor: 'svelte3/svelte3'
//     }
//   ],
//   settings: {
//     'svelte3/typescript': require('typescript'),
//     'svelte3/ignore-styles': () => true
//   },
//   rules: {
//     // '@typescript-eslint/no-unsafe-assignment': 'off',
//     // '@typescript-eslint/no-unsafe-member-access': 'off',
//     // '@typescript-eslint/no-unsafe-call': 'off'
//   },
//   plugins: ['svelte3', '@typescript-eslint'],
//   ignorePatterns: ['node_modules', 'svelte.config.js']
// }

module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	]
};
