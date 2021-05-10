const accumulate = <A, B>(arr: A[], transform: (elem: A) => B): B[] => {
	const res: B[] = []
	for (const elem of arr) {
		res.push(transform(elem))
	}
	return res
}

export { accumulate }
