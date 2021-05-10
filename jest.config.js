// TODO This is all copied from Exercism. Update it.
module.exports = {
	verbose: true,
	projects: ["<rootDir>"],
	testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
	testPathIgnorePatterns: [
		"/(?:production_)?node_modules/",
		".d.ts$",
		"<rootDir>/test/fixtures",
		"<rootDir>/test/helpers",
		"__mocks__",
	],
	transform: {
		"^.+\\.[jt]sx?$": "babel-jest",
	},
}
