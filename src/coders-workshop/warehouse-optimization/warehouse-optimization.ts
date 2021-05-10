import { OrderRepository } from "./order-repository"

const optimize = (displayFn?: (msg: string) => void): string[] => {
	const orderRepo = new OrderRepository()
	const orders = orderRepo.getYesterdaysOrders()

	const combinedOrders: Record<string, number> = {}

	orders.forEach(({ orderLines }) => {
		orderLines.forEach(({ itemName, quantity }) => {
			if (combinedOrders[itemName]) {
				combinedOrders[itemName] += quantity
			} else {
				combinedOrders[itemName] = quantity
			}
		})
	})

	const res = Object.entries(combinedOrders)
		.sort((a, b) => b[1] - a[1])
		.map(([k, _], i) => `Shelf ${i + 1}:\t${k}`)

	if (displayFn) {
		res.forEach((shelf) => displayFn(shelf))
	}
	return res
}

export { optimize }
