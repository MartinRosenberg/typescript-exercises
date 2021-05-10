const count = (str: string): Map<string, number> =>
	str
		.trim()
		.toLowerCase()
		.split(/\s+/)
		.reduce(
			(acc, curr) => acc.set(curr, (acc.get(curr) || 0) + 1),
			new Map(),
		)

export { count }
