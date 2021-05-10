// prettier-ignore
enum Band {
	black, brown, red, orange, yellow, green, blue, violet, grey, white,
}

class ResistorColor {
	private _value: number

	constructor(colors: Array<keyof typeof Band>) {
		if (colors.length < 2)
			throw Error("At least two colors need to be present")
		this._value = Number(
			colors
				.slice(0, 2)
				.map((color) => Band[color])
				.join(""),
		)
	}

	value = (): number => this._value
}

export { ResistorColor }
