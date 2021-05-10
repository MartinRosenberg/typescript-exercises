type MoveFn = (r: number, c: number) => [number, number]

const moveFnGen = function* (): Generator<MoveFn> {
	while (true) {
		yield (r, c) => [r, c + 1] // right
		yield (r, c) => [r + 1, c] // down
		yield (r, c) => [r, c - 1] // left
		yield (r, c) => [r - 1, c] // up
	}
}

/**
 * @param matrix - a 2D array of anything
 * @returns - a 1D array of `matrix` traversed in a clockwise spiral
 */
const traverse = <T>(matrix: T[][]): T[] => {
	const height = matrix.length
	const width = matrix[0].length
	const visited = Array.from({ length: height }, () =>
		Array.from({ length: width }).fill(false),
	)
	const res = []
	const moveFns = moveFnGen()
	let moveFn = moveFns.next().value
	let [r, c] = [0, 0]

	const isValidPos = (r: number, c: number): boolean =>
		r >= 0 && r < height && c >= 0 && c < width && !visited[r][c]

	// eslint-disable-next-line no-constant-condition
	while (true) {
		res.push(matrix[r][c])
		visited[r][c] = true
		let [nr, nc] = moveFn(r, c)
		if (isValidPos(nr, nc)) {
			;[r, c] = [nr, nc]
		} else {
			moveFn = moveFns.next().value
			;[nr, nc] = moveFn(r, c)
			if (isValidPos(nr, nc)) {
				;[r, c] = [nr, nc]
			} else {
				return res
			}
		}
	}
}

export { traverse }
