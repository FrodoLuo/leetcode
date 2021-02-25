import { TreeNode, TestCase } from "./types";

function isValidBST(root: TreeNode | null): boolean {

    if (root === null) {
        return true;
    }

    const helper = function (root: TreeNode | null, lessThan: number = Infinity, largerThan: number = -Infinity): boolean {
        if (root === null) return true;

        const result = root.val < lessThan && root.val > largerThan;

        return result && helper(root.left, root.val, largerThan) && helper(root.right, lessThan, root.val);
    }

    return helper(root);
};
const testCases: TestCase[] = [
    {
        input: new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6))),
        expected: false
    },
    {
        input: new TreeNode(1),
        expected: true
    },
    {
        input: new TreeNode(3, null, new TreeNode(30, new TreeNode(10, null, new TreeNode(15, null, new TreeNode(45))))),
        expected: false
    }
]

console.log(testCases.map(tc => isValidBST(tc.input) === tc.expected));