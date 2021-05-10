/**
 * Provided definition for a binary tree node, used in multiple LeetCode
 * problems. Cleaned up a bit.
 */

export class TreeNode {
	constructor(
		public val: number,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null,
	) {}
}
