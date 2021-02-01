type Triplet<T = number> = [T, T, T]
type TripletPlus<T = number> = [...Triplet<T>, ...T[]]

const arrayThreeSum = (arr: TripletPlus, targetSum: number): Triplet[] => {
	const len = arr.length
	const sorted = [...arr].sort((a, b) => a - b)
	const result = []

	for (let currIdx = 0; currIdx < len - 2; currIdx++) {
		const currVal = sorted[currIdx]
		let lowIdx = currIdx + 1
		let highIdx = len - 1

		while (lowIdx < highIdx) {
			const lowVal = sorted[lowIdx]
			const highVal = sorted[highIdx]
			const currSum = currVal + lowVal + highVal

			if (currSum === targetSum) {
				result.push(<Triplet>[currVal, lowVal, highVal])
				lowIdx++
				highIdx--
			} else if (currSum < targetSum) {
				lowIdx++
			} else {
				highIdx--
			}
		}
	}

	return result
}

export { arrayThreeSum, Triplet, TripletPlus }
