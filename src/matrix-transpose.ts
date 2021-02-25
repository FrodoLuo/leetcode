function transpose(matrix: number[][]): number[][] {
  const width = matrix[0].length;
  const height = matrix.length;
  const result = [];
  for (let i = 0; i < width; i++) {
    const row = [];
    for (let j = 0; j < height; j ++) {
      row.push(matrix[j][i]);
    }
    result[i] = row;
  }
  return result;
}