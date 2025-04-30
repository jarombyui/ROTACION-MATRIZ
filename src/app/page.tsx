'use client';
import { useState } from "react";
import { rotateMatrix } from "../rotateMatrix";

function TablaMatriz({ matriz, titulo }: { matriz: number[][], titulo?: string }) {
  return (
    <div className="my-4">
      {titulo && <h3 className="text-lg font-semibold mb-2 dark:text-white">{titulo}</h3>}
      <table className="border-collapse mx-auto">
        <tbody>
          {matriz.map((fila, i) => (
            <tr key={i}>
              {fila.map((celda, j) => (
                <td
                  key={j}
                  className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center text-base dark:text-white"
                >
                  {celda}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Home() {
  const [textoMatrizEntrada, setTextoMatrizEntrada] = useState('');
  const [matrizRotada, setMatrizRotada] = useState<{
    clockwise: number[][];
    counterClockwise: number[][];
  } | null>(null);
  const [mensajeError, setMensajeError] = useState('');
  const [matrizEntrada, setMatrizEntrada] = useState<number[][] | null>(null);

  const manejarRotacion = (e: React.FormEvent) => {
    e.preventDefault();
    setMensajeError('');
    setMatrizRotada(null);
    setMatrizEntrada(null);
    if (!textoMatrizEntrada.trim()) {
      setMensajeError('Por favor, ingresa una matriz en formato JSON.');
      return;
    }
    try {
      let matriz;
      try {
        matriz = JSON.parse(textoMatrizEntrada);
      } catch {
        setMensajeError('El formato no es JSON válido. Ejemplo: [[1,2],[3,4]]');
        return;
      }
      if (!Array.isArray(matriz)) {
        setMensajeError('La estructura debe ser un array de arrays. Ejemplo: [[1,2],[3,4]]');
        return;
      }
      if (matriz.length === 0) {
        setMensajeError('La matriz no puede estar vacía.');
        return;
      }
      if (!matriz.every(fila => Array.isArray(fila))) {
        setMensajeError('Cada fila debe ser un array. Ejemplo: [[1,2],[3,4]]');
        return;
      }
      if (!matriz.every(fila => fila.length > 0)) {
        setMensajeError('Cada fila debe tener al menos un elemento.');
        return;
      }
      const n = matriz.length;
      if (!matriz.every(fila => fila.length === n)) {
        setMensajeError('La matriz debe ser cuadrada (todas las filas del mismo tamaño).');
        return;
      }
      if (!matriz.flat().every(celda => typeof celda === 'number' && !isNaN(celda))) {
        setMensajeError('No se permiten valores vacíos, nulos o no numéricos en la matriz.');
        return;
      }
      setMatrizEntrada(matriz);
      if (n === 1) {
        setMensajeError('La matriz 1x1 no se rota, pero se muestra igual.');
      }
      const resultado = rotateMatrix(matriz);
      setMatrizRotada(resultado);
    } catch (e: unknown) {
      setMensajeError(e instanceof Error ? e.message : 'Error al procesar la matriz');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Rotar matriz NxN 90°
        </h1>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <form onSubmit={manejarRotacion} className="space-y-4">
            <div>
              <label htmlFor="matrix-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Ingresa la matriz (formato JSON)
              </label>
              <textarea
                id="matrix-input"
                value={textoMatrizEntrada}
                onChange={(e) => setTextoMatrizEntrada(e.target.value)}
                placeholder='Ejemplo: [[1,2,3],[4,5,6],[7,8,9]]'
                rows={4}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Rotar Matriz
            </button>
          </form>

          {mensajeError && (
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/50 border-l-4 border-red-500 text-red-700 dark:text-red-200">
              <p>{mensajeError}</p>
            </div>
          )}

          {matrizEntrada && (
            <TablaMatriz matriz={matrizEntrada} titulo="Matriz de entrada" />
          )}

          {matrizRotada && (
            <div className="mt-6 space-y-4">
              <div>
                <TablaMatriz matriz={matrizRotada.counterClockwise} titulo="Rotación Anti-horaria (90° izquierda)" />
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md text-sm font-mono mt-2">
                  {JSON.stringify(matrizRotada.counterClockwise)}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Ingresa una matriz cuadrada en formato JSON para ver ambas rotaciones</p>
          <p className="mt-1">Ejemplo de entrada: [[1,2],[3,4]]</p>
        </div>
      </div>
    </div>
  );
}
