class Gigasecond {
	private endDate: Date

	constructor(startDate: Date) {
		this.endDate = new Date(startDate.getTime() + 1e12)
	}

	date = (): Date => this.endDate
}

export { Gigasecond }
