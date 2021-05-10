import { anagramTester } from "./anagram-tester"

test("anagramTester function for two strings", () => {
	expect(anagramTester("stressed", "desserts")).toEqual(true)
	expect(anagramTester("The Morse code", "Here come dots")).toEqual(true)
	expect(anagramTester("hipster", "mustache")).toEqual(false)
	// prettier-ignore
	expect(anagramTester("O Draconian devil", "Leonardo da Vinci")).toEqual(true)
})
