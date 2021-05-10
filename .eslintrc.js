const ERROR = "error"
const WARN = "warn"
const OFF = "off"

// TODO This is all copied from Exercism. Update it.
module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json",
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2021,
		sourceType: "module",
	},
	plugins: ["@typescript-eslint"],
	root: true,
	rules: {
		// Code style not forced upon the student
		"@typescript-eslint/array-type": OFF,

		// Prevent bugs
		"@typescript-eslint/explicit-function-return-type": [
			WARN,
			{
				allowExpressions: false,
				allowTypedFunctionExpressions: true,
				allowHigherOrderFunctions: true,
			},
		],

		// Code style not forced upon the student
		"@typescript-eslint/explicit-member-accessibility": OFF,

		// Code style not forced upon the student
		"@typescript-eslint/indent": OFF,

		"@typescript-eslint/no-inferrable-types": [
			ERROR,
			{
				ignoreParameters: true,
			},
		],

		// Code style not forced upon the student
		"@typescript-eslint/member-delimiter-style": OFF,

		// Code style not forced upon the student
		"@typescript-eslint/no-non-null-assertion": OFF,

		// Only disallow readonly without an access modifier
		"@typescript-eslint/no-parameter-properties": [
			WARN,
			{
				allows: [
					"private",
					"protected",
					"public",
					"private readonly",
					"protected readonly",
					"public readonly",
				],
			},
		],

		// Covered by the tsc compiler (noUnusedLocals)
		"@typescript-eslint/no-unused-vars": OFF,

		// Prevent bugs, not styling
		"@typescript-eslint/no-use-before-define": [
			ERROR,
			{
				functions: false,
				typedefs: false,
			},
		],

		// Always disable base-rule
		"semi": OFF,

		// Code style not forced upon student
		"@typescript-eslint/semi": OFF,

		// Semicolons are handled by other rules, but Prettier always adds a semi at
		// the start of a line when called for by brackets, even if unnecessary
		"no-extra-semi": OFF,
		"@typescript-eslint/no-extra-semi": OFF,
	},
}
