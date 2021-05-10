import { invertTree1, invertTree2 } from "./invert-binary-tree"
import { TreeNode } from "../lib"

describe("Invert Binary Tree", () => {
	test.concurrent.each([invertTree1, invertTree2])(
		"Given a binary tree, the tree should be inverted",
		async (invertTreeFn) => {
			const input = new TreeNode(
				4,
				new TreeNode(2, new TreeNode(1), new TreeNode(3)),
				new TreeNode(7, new TreeNode(6), new TreeNode(9)),
			)
			const expected = new TreeNode(
				4,
				new TreeNode(7, new TreeNode(9), new TreeNode(6)),
				new TreeNode(2, new TreeNode(3), new TreeNode(1)),
			)
			expect(invertTreeFn(input)).toEqual(expected)
		},
	)
})
