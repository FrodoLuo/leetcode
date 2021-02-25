function minCount(coins: number[]): number {
  return coins.map(c => findMin(c)).reduce((a, b) => a + b, 0);
};

function findMin(coin: number): number {
  if (coin === 2) {
    return 1;
  }
  if (coin === 1) {
    return 1;
  }
  if (coin === 0) {
    return 0;
  }
  return Math.min(findMin(coin - 2) + 1, findMin(coin - 1) + 1);
}