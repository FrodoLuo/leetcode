function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let currentMin: number | null = null;
  for (let i = 0; i < nums.length; i++) {
    const anchorStart = nums[i];
    for (let j = nums.length - 1; j > i; j--) {
      if (j - i < 2) {
        continue;
      }
      const anchorEnd = nums[j];
      const currentArray = nums.slice(i + 1, j);
      if (currentArray.length < 1) {
        continue;
      }
      const midIndex = getBaseIndex(
        currentArray,
        target - (anchorStart + anchorEnd)
      );
      const currentSum = anchorStart + anchorEnd + currentArray[midIndex];
      if (shouldSwap(currentMin, currentSum, target)) {
        currentMin = currentSum;
      }
    }
  }
  return currentMin === null ? target : currentMin;
}

function shouldSwap(currentMin: null | number, newMin: number, target: number) {
  if (currentMin === null) {
    return true;
  }
  if (Math.abs(currentMin - target) > Math.abs(newMin - target)) {
    return true;
  } else {
    return false;
  }
}

/**
 *
 * @param arr sorted array
 * @param target
 */
function getBaseIndex(arr: number[], target: number): number {
  if (arr.length === 1) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    } else if (arr[i] > target) {
      if (Math.abs(arr[i] - target) > Math.abs(arr[i - 1] - target)) {
        return i - 1;
      } else {
        return i;
      }
    }
  }
  return arr.length - 1;
}
console.log(threeSumClosest([-3, -2, -5, 3, -4], -1));
