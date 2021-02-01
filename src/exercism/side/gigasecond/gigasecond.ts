export default class Gigasecond {
	private endDate: Date

	constructor(startDate: Date) {
		this.endDate = new Date(startDate.getTime() + 1E12)
	}

	date = (): Date => this.endDate
}
