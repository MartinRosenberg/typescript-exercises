/**
 * @param str - a string
 * @returns - that string with all the vowels removed
 */
const removeVowels = (str: string): string => str.replace(/[aeiou]/g, "")

export { removeVowels }
