type Predicate<T> = (elem: T) => boolean

const keep = <T>(arr: T[], pred: Predicate<T>): T[] =>
	arr.reduce((acc: T[], curr: T) => (pred(curr) ? [...acc, curr] : acc), [])

const discard = <T>(arr: T[], pred: Predicate<T>): T[] =>
	keep(arr, (e) => !pred(e))

export { keep, discard }
