import { TreeNode } from "./types";
export function buildTreeFromArray(array: number[]): TreeNode|null {
  if (array.length === 0) return null;
  const getLeftChildIndex = (index: number): number => {
    return index * 2 + 1;
  }
  const nodes = array.map(v => new TreeNode(v, null, null));

  nodes.forEach((n, index) => {
    const leftChildIndex = getLeftChildIndex(index);
    const rightChildIndex = leftChildIndex + 1;
    n.left = nodes[leftChildIndex] ?? null;
    n.right = nodes[rightChildIndex] ?? null;
  })

  return nodes[0];
}