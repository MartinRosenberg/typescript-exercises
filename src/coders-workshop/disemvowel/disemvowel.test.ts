import { removeVowels } from "./disemvowel"

test("remove vowels", () => {
	expect(removeVowels("hello world")).toEqual("hll wrld")
})
