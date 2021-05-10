import { combineAndSort } from "./combine-and-sort"

test("combineAndSort function", () => {
	expect(
		combineAndSort(["kiwi", "apple", "banana"], ["orange", "coconut"]),
	).toEqual(["apple", "banana", "coconut", "kiwi", "orange"])
	expect(combineAndSort([], ["zucchini", "cauliflower"])).toEqual([
		"cauliflower",
		"zucchini",
	])
	expect(combineAndSort(["beta", "alpha"], [])).toEqual(["alpha", "beta"])
	expect(combineAndSort([], [])).toEqual([])
})

test("don't modify combineAndSort arguments", () => {
	const arr1 = ["kombucha", "scooter", "snowboard"]
	const arr2 = ["macbook", "iphone", "airpods"]
	combineAndSort(arr1, arr2)

	expect(arr1).toEqual(["kombucha", "scooter", "snowboard"])
	expect(arr2).toEqual(["macbook", "iphone", "airpods"])
})
