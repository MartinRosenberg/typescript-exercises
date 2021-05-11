import { vowelize } from "./vowelize"

test("the vowelize function", () => {
	// prettier-ignore
	expect(vowelize(["cornhole", "waistcoat", "tumblr"])).toEqual(["ooe", "aioa", "u",])
	expect(vowelize(["bacon", "ham", "pork"])).toEqual(["ao", "a", "o"])
})

test("the vowelize function for words without vowels", () => {
	expect(vowelize(["sky", "gypsy", "nymph"])).toEqual([])
})
