/**
 * Given an array of numbers, and a target number to which exactly two elements
 * add, return that pair.
 *
 * @param nums - an array of numbers
 * @param target - the target number to add to
 * @returns {[number, number]} - cannot actually return `undefined`
 */
const twoSum = (
	nums: number[],
	target: number,
): [number, number] | undefined => {
	const { length } = nums
	for (let i = 0; i < length; i++) {
		for (let j = i + 1; j < length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
	}
	return // satisfy TypeScript
}

export { twoSum }
