import { calc } from "./calc"

test("the calc function", () => {
	expect(calc(10)("+")(12)).toBe(22)
	expect(calc(90)("-")(10)).toBe(80)
})
