const ipAsDecimal = (ip: string): number =>
	ip
		.split(".")
		.map(Number)
		.reduce((acc, curr) => acc * 256 + curr)

const ipsBetween = (start: string, end: string): number =>
	ipAsDecimal(end) - ipAsDecimal(start)

export { ipsBetween }
