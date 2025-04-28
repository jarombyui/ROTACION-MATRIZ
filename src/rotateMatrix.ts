export function rotateMatrix(matrix: number[][]): number[][] {
  const n = matrix.length;
  if (!Array.isArray(matrix) || !matrix.every(row => Array.isArray(row) && row.length === n)) {
    throw new Error('La matriz debe ser NxN');
  }
  const rotated = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[j][n - 1 - i] = matrix[i][j];
    }
  }
  return rotated;
} 