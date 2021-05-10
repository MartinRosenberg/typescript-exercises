const countWords = (str: string): Record<string, number> => {
	const res: Record<string, number> = Object.create(null)
	str.split(" ").forEach((word) => {
		if (res[word]) res[word]++
		else res[word] = 1
	})
	return res
}

export { countWords }
