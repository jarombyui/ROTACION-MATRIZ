'use client';
import { useState } from "react";
import { rotateMatrix } from "../rotateMatrix";

export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<{ clockwise: number[][], counterClockwise: number[][] } | null>(null);
  const [error, setError] = useState('');

  const handleRotate = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setOutput(null);
    try {
      const matrix = JSON.parse(input);
      const result = rotateMatrix(matrix);
      setOutput(result);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Error al procesar la matriz');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Rotar matriz NxN 90°
        </h1>
        
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <form onSubmit={handleRotate} className="space-y-4">
            <div>
              <label htmlFor="matrix-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Ingresa la matriz (formato JSON)
              </label>
              <textarea
                id="matrix-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
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

          {error && (
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/50 border-l-4 border-red-500 text-red-700 dark:text-red-200">
              <p>{error}</p>
            </div>
          )}

          {output && (
            <div className="mt-6 space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2 dark:text-white">Rotación Horaria (90° derecha):</h2>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md text-sm font-mono">
                  {JSON.stringify(output.clockwise)}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 dark:text-white">Rotación Anti-horaria (90° izquierda):</h2>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md text-sm font-mono">
                  {JSON.stringify(output.counterClockwise)}
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
