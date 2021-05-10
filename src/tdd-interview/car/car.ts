type FuelTank = {
	fuelLevel: number
	fuelCapacity: number
}

class Car {
	private fuelLevel: number
	readonly fuelCapacity: number

	/**
	 * @param fuelLevel - the initial amount of fuel in the tank
	 * @param fuelCapacity - the tank's fuel capacity
	 */
	constructor({ fuelLevel, fuelCapacity }: FuelTank) {
		this.fuelLevel = fuelLevel
		this.fuelCapacity = fuelCapacity
	}

	/**
	 * @returns - the current amount of fuel in the tank
	 */
	getFuelLevel(): number {
		return this.fuelLevel
	}

	/**
	 * @param amt - the amount of fuel to add to the tank
	 */
	addFuel(amt: number): void {
		this.fuelLevel = Math.min(this.fuelLevel + amt, this.fuelCapacity)
	}
}

export { Car }
