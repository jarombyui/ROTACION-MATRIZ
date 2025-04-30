// 1.0 Definición del tipo de retorno para la función de rotación
interface RotationResult {
  clockwise: number[][];
  counterClockwise: number[][];
}

// 2.0 Función principal que maneja la rotación de matrices
export function rotateMatrix(matrix: number[][]): RotationResult {
  const n = matrix.length;

  if (!Array.isArray(matrix) || !matrix.every(row => Array.isArray(row) && row.length === n)) {
    throw new Error('La matriz debe ser NxN');
  }

  const clockwise = Array.from({ length: n }, () => Array(n).fill(0));
  const counterClockwise = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Rotación en sentido horario
      clockwise[j][n - 1 - i] = matrix[i][j];
      // Rotación en sentido antihorario
      counterClockwise[n - 1 - j][i] = matrix[i][j];
    }
  }

  return {
    clockwise,
    counterClockwise
  };
} 