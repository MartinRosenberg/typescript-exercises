type Point = [number, number]

const distance = (a: Point, b: Point): number =>
	Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)

/**
 *
 * @param {number[][]} points
 * @returns {number[][]}
 */
const closestCartesianPoints = (points: Point[]): Point[] => {
	let shortestDist = Number.MAX_VALUE
	let closestPair: Point[] = []
	points.forEach((a, i) => {
		points.slice(i + 1).forEach((b) => {
			const currDist = distance(a, b)
			if (currDist < shortestDist) {
				shortestDist = currDist
				closestPair = [a, b]
			}
		})
	})
	return closestPair
}

export { closestCartesianPoints }
