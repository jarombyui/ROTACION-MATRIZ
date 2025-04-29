// 1.0 Definición del tipo de retorno para la función de rotación
interface ResultadoRotacion {
  antihorario: number[][]; // Matriz rotada en sentido antihorario
}

// 2.0 Función principal que maneja la rotación de matrices
export function rotarMatriz(matriz: number[][]): ResultadoRotacion {
  const n = matriz.length;

  if (!Array.isArray(matriz) || !matriz.every(fila => Array.isArray(fila) && fila.length === n)) {
    throw new Error('La matriz debe ser NxN');
  }

  const antihorario = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      antihorario[n - 1 - j][i] = matriz[i][j];
    }
  }

  return {
    antihorario
  };
} 