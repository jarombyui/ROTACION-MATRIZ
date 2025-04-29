// 1.0 Definición del tipo de retorno para la función de rotación
interface ResultadoRotacion {
  horario: number[][]; // Matriz rotada en sentido horario
  antihorario: number[][]; // Matriz rotada en sentido antihorario
}

// 2.0 Función principal que maneja la rotación de matrices
export function rotarMatriz(matriz: number[][]): ResultadoRotacion {
  // 2.1 Obtiene el tamaño de la matriz (n x n)
  const n = matriz.length;

  // 2.2 Validación: verifica que sea una matriz cuadrada válida
  if (!Array.isArray(matriz) || !matriz.every(fila => Array.isArray(fila) && fila.length === n)) {
    throw new Error('La matriz debe ser NxN');
  }

  // 3.0 Inicialización de la matriz para rotación horaria
  const horario = Array.from({ length: n }, () => Array(n).fill(0));
  // 3.1 Rotación en sentido horario (90° derecha)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 3.2 Fórmula de rotación horaria: [i,j] -> [j,n-1-i]
      horario[j][n - 1 - i] = matriz[i][j];
    }
  }

  // 4.0 Inicialización de la matriz para rotación antihoraria
  const antihorario = Array.from({ length: n }, () => Array(n).fill(0));
  // 4.1 Rotación en sentido antihorario (90° izquierda)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 4.2 Fórmula de rotación antihoraria: [i,j] -> [n-1-j,i]
      antihorario[n - 1 - j][i] = matriz[i][j];
    }
  }

  // 5.0 Retorna ambas rotaciones
  return {
    horario,
    antihorario
  };
} 