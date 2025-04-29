// 1.0 Definición del tipo de retorno para la función de rotación
interface RotationResult {
  clockwise: number[][]; // 1.1 Matriz rotada en sentido horario
  counterClockwise: number[][]; // 1.2 Matriz rotada en sentido antihorario
}

// 2.0 Función principal que maneja la rotación de matrices
export function rotateMatrix(matrix: number[][]): RotationResult {
  // 2.1 Obtiene el tamaño de la matriz (n x n)
  const n = matrix.length;

  // 2.2 Validación: verifica que sea una matriz cuadrada válida
  if (!Array.isArray(matrix) || !matrix.every(row => Array.isArray(row) && row.length === n)) {
    throw new Error('La matriz debe ser NxN');
  }

  // 3.0 Inicialización de la matriz para rotación horaria
  const clockwise = Array.from({ length: n }, () => Array(n).fill(0));
  // 3.1 Rotación en sentido horario (90° derecha)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 3.2 Fórmula de rotación horaria: [i,j] -> [j,n-1-i]
      clockwise[j][n - 1 - i] = matrix[i][j];
    }
  }

  // 4.0 Inicialización de la matriz para rotación antihoraria
  const counterClockwise = Array.from({ length: n }, () => Array(n).fill(0));
  // 4.1 Rotación en sentido antihorario (90° izquierda)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 4.2 Fórmula de rotación antihoraria: [i,j] -> [n-1-j,i]
      counterClockwise[n - 1 - j][i] = matrix[i][j];
    }
  }

  // 5.0 Retorna ambas rotaciones
  return {
    clockwise,
    counterClockwise
  };
} 