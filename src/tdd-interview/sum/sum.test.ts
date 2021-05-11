import { sum } from "./sum"

test("sum works on two arguments", () => {
	expect(sum(3, 4)).toBe(7)
	expect(sum(-15, 5)).toBe(-10)
	expect(sum(-30.5, 45.5)).toBe(15)
})

test("sum works on many arguments", () => {
	expect(sum(4, 5, 6)).toBe(15)
	expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(55)
	expect(sum(-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5)).toBe(0)
})

test("sum works on a single argument, or zero args", () => {
	expect(sum(12)).toBe(12)
	expect(sum()).toBe(0)
})
