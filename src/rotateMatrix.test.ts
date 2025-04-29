import { rotateMatrix } from './rotateMatrix';

describe('rotateMatrix', () => {
  it('rota una matriz 2x2', () => {
    expect(rotateMatrix([[1,2],[3,4]])).toEqual({
      clockwise: [[3,1],[4,2]],
      counterClockwise: [[2,4],[1,3]]
    });
  });

  it('rota una matriz 3x3', () => {
    expect(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]])).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
  });

  it('lanza error si no es NxN', () => {
    expect(() => rotateMatrix([[1,2],[3,4,5]])).toThrow('La matriz debe ser NxN');
  });

  it('lanza error si la entrada no es un array', () => {
    // @ts-expect-error: Se fuerza un error para probar validación de tipo en la función
    expect(() => rotateMatrix('no es una matriz')).toThrow('La matriz debe ser NxN');
  });
}); 