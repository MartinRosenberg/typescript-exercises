import { twoFer } from './two-fer'

describe('TwoFer', () => {
	test('no name given', () => {
		const expected = 'One for you, one for me.'
		expect(twoFer()).toEqual(expected)
	})

	test('a name given', () => {
		const expected = 'One for Alice, one for me.'
		expect(twoFer('Alice')).toEqual(expected)
	})

	test('another name given', () => {
		const expected = 'One for Bob, one for me.'
		expect(twoFer('Bob')).toEqual(expected)
	})
})
