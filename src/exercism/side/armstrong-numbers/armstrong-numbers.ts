export default {
	isArmstrongNumber: (n: number): boolean => {
		if (n < 0 || !Number.isInteger(n)) return false
		const s = n.toString()
		const len = s.length
		return n === s.split('').reduce((a, c) => a + (+c) ** len, 0)
	}
}
