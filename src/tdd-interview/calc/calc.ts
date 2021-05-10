const calc = (a: number) => (op: string) => (b: number): number => {
	const ops: Record<string, () => number> = {
		"+": () => a + b,
		"-": () => a - b,
	}
	return ops[op]()
}

export { calc }
