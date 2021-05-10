import { countWords } from "./count-words"

test("count words", () => {
	const actual = countWords("give a little get a little")
	const expected = { give: 1, a: 2, little: 2, get: 1 }
	expect(actual).toEqual(expected)
})
