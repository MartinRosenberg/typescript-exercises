import { Car } from "./car"

test("Car cannot be filled beyond capacity", () => {
	const camry = new Car({ fuelLevel: 4.25, fuelCapacity: 13 })
	expect(camry.getFuelLevel()).toBe(4.25)
	camry.addFuel(6)
	expect(camry.getFuelLevel()).toBe(10.25)
	camry.addFuel(10)
	expect(camry.getFuelLevel()).toBe(13)
})
