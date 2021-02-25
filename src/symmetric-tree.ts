/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from './types';

function leftOrderTravelToArray(root: TreeNode | null, from: 'left' | 'right'): string[] {
  if (root === null) {
    return [];
  } else {
    return [
      ...leftOrderTravelToArray(root.left, 'left'),
      `${root.val}_${from}`,
      ...leftOrderTravelToArray(root.right, 'right'),
    ]
  }
}

function rightOrderTravelToArray(root: TreeNode | null, from: 'left' | 'right'): string[] {
  if (root === null) {
    return [];
  } else {
    return [
      ...rightOrderTravelToArray(root.right, 'right'),
      `${root.val}_${from}`,
      ...rightOrderTravelToArray(root.left, 'left'),
    ]
  }

}

function compareArray(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  else {
    for (let i = 0; i < a.length; i ++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
}
