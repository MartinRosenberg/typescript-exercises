import { optimize } from "./warehouse-optimization"

test("warehouse optimization", () => {
	expect(optimize()).toEqual([
		"Shelf 1:\tItem 12",
		"Shelf 2:\tItem 08",
		"Shelf 3:\tItem 03",
		"Shelf 4:\tItem 06",
		"Shelf 5:\tItem 11",
		"Shelf 6:\tItem 05",
		"Shelf 7:\tItem 02",
		"Shelf 8:\tItem 09",
		"Shelf 9:\tItem 07",
		"Shelf 10:\tItem 04",
		"Shelf 11:\tItem 10",
		"Shelf 12:\tItem 01",
	])
})
