const ipAsDecimal = (ip: string): number =>
	ip
		.split('.')
		.map(Number)
		.reduce((acc, curr) => acc * 256 + curr)

export const ipsBetween = (start: string, end: string): number =>
	ipAsDecimal(end) - ipAsDecimal(start)
