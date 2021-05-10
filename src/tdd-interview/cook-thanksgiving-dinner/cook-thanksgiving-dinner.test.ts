import {
	cookThanksgivingDinner,
	ThanksgivingDinnerSteps,
} from "./cook-thanksgiving-dinner"

// Note: The test passes when `done()` is called (meaning `serveDinner` needs to
// be successfully called for it to pass).
test(`Cook Thanksgiving dinner`, (done) => {
	let ovenPreheated = false
	let turkeyCooked = false
	let turkeyBurned = false
	let dressingCooked = false
	let dressingBurned = false
	const actions: ThanksgivingDinnerSteps = {
		preheatOven: () =>
			new Promise<void>((resolve) => {
				setTimeout(() => {
					ovenPreheated = true
					resolve()
				}, 50)
			}),
		cookTurkey: () =>
			new Promise<void>((resolve, reject) => {
				if (!ovenPreheated)
					reject(
						new Error(
							`must preheat the oven before cooking turkey`,
						),
					)

				setTimeout(() => {
					turkeyCooked = true
					resolve()
				}, 300)

				setTimeout(() => {
					turkeyBurned = true
				}, 400)
			}),
		cookDressing: () =>
			new Promise<void>((resolve, reject) => {
				if (!ovenPreheated) {
					reject(
						new Error(
							`must preheat the oven before cooking dressing`,
						),
					)
				}
				setTimeout(() => {
					dressingCooked = true
					resolve()
				}, 100)

				setTimeout(() => {
					dressingBurned = true
				}, 400)
			}),
		serveDinner: () =>
			new Promise<void>((resolve, reject) => {
				if (!turkeyCooked || !dressingCooked) {
					reject(
						new Error(
							`Whoops, can't serve before we cook the turkey and dressing`,
						),
					)
				}
				setTimeout(() => {
					if (turkeyBurned || dressingBurned) {
						done.fail(`turkey or dressing burned`)
						reject(
							new Error(
								`Uh oh, you burned the ${
									turkeyBurned ? `turkey` : `dressing`
								}! Maybe try multitasking?`,
							),
						)
						return
					}
					resolve()
					done()
				}, 30)
			}),
	}

	// okay, enough setup. Let's do the test.
	cookThanksgivingDinner(actions)
		.then(() => console.log(`nice work on the turkey dinner!`))
		.catch((err) => {
			console.error(err)
			throw err
		})
})
