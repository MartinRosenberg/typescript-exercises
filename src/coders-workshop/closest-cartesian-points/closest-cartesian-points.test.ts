import { closestCartesianPoints } from "./closest-cartesian-points"

test("closest cartesian points", () => {
	// prettier-ignore
	const actual = closestCartesianPoints(
		[[1, 1], [-1, -1], [3, 4], [6, 1], [-1, -6], [-4, -3]]
	)
	// prettier-ignore
	const expected = [[1, 1], [-1, -1]]
	expect(actual).toEqual(expected)
})
