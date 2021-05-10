const combineAndSort = <T>(...arrs: T[][]): T[] =>
	arrs.reduce((acc, curr) => [...acc, ...curr], []).sort()

export { combineAndSort }
