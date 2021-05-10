import { ipsBetween } from "./count-ip-addresses"

describe("Count IP addresses", () => {
	it("Example 1", () => {
		expect(ipsBetween("10.0.0.0", "10.0.0.50")).toEqual(50)
	})

	it("Example 2", () => {
		expect(ipsBetween("10.0.0.0", "10.0.1.0")).toEqual(256)
	})

	it("Example 3", () => {
		expect(ipsBetween("20.0.0.10", "20.0.1.0")).toEqual(246)
	})
})
