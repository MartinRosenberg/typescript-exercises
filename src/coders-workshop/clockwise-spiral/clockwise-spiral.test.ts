import { traverse } from "./clockwise-spiral"

test("clockwise spiral", () => {
	// prettier-ignore
	const actual = traverse([
		[ 1,  2,  3,  4,  5],
		[ 6,  7,  8,  9, 10],
		[11, 12, 13, 14, 15],
		[16, 17, 18, 19, 20],
	])
	// prettier-ignore
	const expected =
		[1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

	expect(actual).toEqual(expected)
})
