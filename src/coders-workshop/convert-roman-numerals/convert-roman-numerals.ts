const Numeral: Record<string, number> = Object.freeze({
	M: 1000,
	D: 500,
	C: 100,
	L: 50,
	X: 10,
	V: 5,
	I: 1,
})

const romanToArabic = (roman: string): number => {
	let arabic = 0
	for (let i = 0; i < roman.length; i++) {
		const current = roman[i]
		if (!(current in Numeral)) {
			return NaN
		}
		const next = roman[i + 1]
		if (Numeral[current] < Numeral[next]) {
			arabic += Numeral[next] - Numeral[current]
			i++
		} else {
			arabic += Numeral[current]
		}
	}
	return arabic || NaN
}

export { romanToArabic }
