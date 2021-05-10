type OrderLine = {
	itemName: string
	quantity: number
}

type Order = {
	id: number
	orderLines: OrderLine[]
}

class OrderRepository {
	getYesterdaysOrders(): Order[] {
		return [
			{
				id: 1,
				orderLines: [
					{ itemName: `Item 01`, quantity: 1 },
					{ itemName: `Item 02`, quantity: 3 },
					{ itemName: `Item 03`, quantity: 25 },
					{ itemName: `Item 04`, quantity: 12 },
				],
			},
			{
				id: 2,
				orderLines: [
					{ itemName: `Item 01`, quantity: 1 },
					{ itemName: `Item 08`, quantity: 42 },
					{ itemName: `Item 09`, quantity: 13 },
					{ itemName: `Item 12`, quantity: 37 },
				],
			},
			// prettier-ignore
			{
				id: 3,
				orderLines: [
					{ itemName: `Item 12`, quantity: 16 }
				],
			},
			{
				id: 4,
				orderLines: [
					{ itemName: `Item 10`, quantity: 11 },
					{ itemName: `Item 11`, quantity: 10 },
				],
			},
			{
				id: 5,
				orderLines: [
					{ itemName: `Item 06`, quantity: 7 },
					{ itemName: `Item 07`, quantity: 2 },
					{ itemName: `Item 12`, quantity: 14 },
				],
			},
			// prettier-ignore
			{
				id: 6,
				orderLines: [
					{ itemName: `Item 05`, quantity: 17 }
				],
			},
			{
				id: 7,
				orderLines: [
					{ itemName: `Item 03`, quantity: 5 },
					{ itemName: `Item 07`, quantity: 2 },
				],
			},
			{
				id: 8,
				orderLines: [
					{ itemName: `Item 02`, quantity: 13 },
					{ itemName: `Item 07`, quantity: 7 },
					{ itemName: `Item 09`, quantity: 2 },
				],
			},
			{
				id: 9,
				orderLines: [
					{ itemName: `Item 01`, quantity: 4 },
					{ itemName: `Item 06`, quantity: 17 },
					{ itemName: `Item 07`, quantity: 3 },
				],
			},
			{
				id: 10,
				orderLines: [
					{ itemName: `Item 11`, quantity: 12 },
					{ itemName: `Item 12`, quantity: 1 },
				],
			},
		]
	}
}

export { OrderRepository }
