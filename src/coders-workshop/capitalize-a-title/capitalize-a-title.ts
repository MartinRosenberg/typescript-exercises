/**
 * @param str - the string to title-case
 * @returns the title-cased string
 */
const titleCase = (str: string): string => {
	const lowerWords = Object.freeze([`the`, `and`, `of`, `for`])
	const upperCase = (char: string): string =>
		String.fromCharCode(char.charCodeAt(0) - 32)

	return str
		.split(/\s/)
		.map((word, i) =>
			lowerWords.includes(word) && i !== 0
				? word
				: `${upperCase(word[0])}${word.slice(1)}`,
		)
		.join(` `)
}

export { titleCase }
