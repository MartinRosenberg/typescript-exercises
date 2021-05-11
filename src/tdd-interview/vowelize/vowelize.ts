const vowelize = (words: string[]): string[] =>
	words
		.map((word) => word.replace(/[^aeiou]/g, ""))
		.filter((word) => word !== "")

export { vowelize }
