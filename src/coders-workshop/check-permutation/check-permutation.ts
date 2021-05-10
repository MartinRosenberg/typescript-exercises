const arrayShallowEquals = (a: unknown[], b: unknown[]): boolean => {
	if (a === b) return true
	const { length } = a
	if (length !== b.length) return false
	for (let i = 0; i < length; i++) {
		if (a[i] !== b[i]) return false
	}
	return true
}

/**
 * O(nlog(n)) time
 *
 * @param {string | *[]} a
 * @param {string | *[]} b
 * @returns {boolean}
 */
const checkPermutation = (a: string, b: string): boolean =>
	arrayShallowEquals([...a].sort(), [...b].sort())

export { checkPermutation }
