import { romanToArabic } from "./convert-roman-numerals"

test("convert Roman numerals", () => {
	expect(romanToArabic("XIV")).toEqual(14)
})
