interface RotationResult {
  clockwise: number[][];
  counterClockwise: number[][];
}

export function rotateMatrix(matrix: number[][]): RotationResult {
  const n = matrix.length;
  if (!Array.isArray(matrix) || !matrix.every(row => Array.isArray(row) && row.length === n)) {
    throw new Error('La matriz debe ser NxN');
  }

  // Rotación en sentido horario (90° a la derecha)
  const clockwise = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      clockwise[j][n - 1 - i] = matrix[i][j];
    }
  }

  // Rotación en sentido anti-horario (90° a la izquierda)
  const counterClockwise = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      counterClockwise[n - 1 - j][i] = matrix[i][j];
    }
  }

  return {
    clockwise,
    counterClockwise
  };
} 