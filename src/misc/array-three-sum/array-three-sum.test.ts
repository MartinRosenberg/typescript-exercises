import { arrayThreeSum, Triplet, TripletPlus } from './array-three-sum'

const testCases: Array<[TripletPlus, number, Triplet[]]> = [
//   arr                          target  expected
	[[12, 3, 1, 2, -6, 5, -8, 6], 0,      [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]],
	[[5, 6, 1, -9, 7, 3, 2],      35,     []],
	[[1, 15, -5, 12, -3, 6, 2],   10,     [[ -3, 1, 12 ]]]
]

describe('Array Three Sum', () => {
	test.concurrent.each(testCases)(
		'Given integers %j and target sum %d, triplets should be %j',
		async (arr, target, expected) => {
			expect(arrayThreeSum(arr, target)).toEqual(expected)
		}
	)
})
