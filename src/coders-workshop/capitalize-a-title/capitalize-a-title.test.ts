import { titleCase } from "./capitalize-a-title"

test(`war and peace`, () => {
	expect(titleCase(`war and peace`)).toEqual(`War and Peace`)
})

test(`the old man and the sea`, () => {
	expect(titleCase(`the old man and the sea`)).toEqual(
		`The Old Man and the Sea`,
	)
})
