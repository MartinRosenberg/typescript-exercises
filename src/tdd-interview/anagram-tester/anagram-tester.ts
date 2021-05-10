const anagramTester = (a: string, b: string): boolean => {
	const sanitize = (s: string): string =>
		[...s.toLowerCase().replace(/\s/g, "")].sort().join("")
	return sanitize(a) === sanitize(b)
}

export { anagramTester }
