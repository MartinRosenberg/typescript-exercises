import { checkPermutation } from "./check-permutation"

test(`"god" is a permutation of "dog"`, () => {
	expect(checkPermutation(`god`, `dog`)).toEqual(true)
})

test(`"hello" is not a permutation of "goodbye"`, () => {
	expect(checkPermutation(`hello`, `goodbye`)).toEqual(false)
})
