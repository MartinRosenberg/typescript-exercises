import { TreeNode } from "../lib"
// class TreeNode {
//     constructor (
//         public val: number = 0,
//         public left: TreeNode | null = null,
//         public right: TreeNode | null = null
//     ) {}
// }

/**
 * A simple head-recursive solution.
 */
const invertTree1 = (root: TreeNode | null): TreeNode | null => {
	if (root) {
		;[root.left, root.right] = [
			invertTree1(root.right),
			invertTree1(root.left),
		]
	}

	return root
}

/**
 * A stack-safe iterative solution.
 */
const invertTree2 = (root: TreeNode | null): TreeNode | null => {
	const stack: Array<TreeNode | null> = [root]

	while (stack.length > 0) {
		const curr = stack.pop()

		if (curr) {
			;[curr.left, curr.right] = [curr.right, curr.left]
			stack.push(curr.left, curr.right)
		}
	}

	return root
}

export { invertTree1, invertTree2 }
