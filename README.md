# Rotador de Matrices NxN (90° antihorario)

Esta aplicación web te permite rotar matrices cuadradas (NxN) 90 grados en sentido antihorario de forma visual e interactiva. Es ideal para estudiantes, docentes y entusiastas de las matemáticas y la programación que deseen comprender cómo se transforma una matriz al rotarla.

## 🚀 ¿Qué hace esta app?
- Permite ingresar una matriz cuadrada en formato JSON.
- Muestra la matriz original y su rotación 90° a la izquierda (antihoraria) como tablas visuales.
- Valida la entrada y muestra mensajes claros si hay errores de formato o estructura.

---

## 🖥️ Requisitos previos
- Node.js (v18 o superior recomendado)
- npm (v9 o superior recomendado)

---

## ⚡ Instalación y ejecución
1. **Clona el repositorio o descarga los archivos.**
2. Abre una terminal en la carpeta del proyecto y ejecuta:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre tu navegador y visita [http://localhost:3000](http://localhost:3000)

---

## 📝 ¿Cómo usar la app?
1. Ingresa una matriz cuadrada en formato JSON en el área de texto. Ejemplo:
   ```json
   [[1,2,3],[4,5,6],[7,8,9]]
   ```
2. Haz clic en "Rotar Matriz".
3. Verás la matriz original y la matriz rotada 90° a la izquierda, ambas como tablas y en formato JSON.
4. Si hay algún error en la entrada, la app te mostrará un mensaje claro para ayudarte a corregirlo.

---

## 📚 Ejemplo de entrada y salida
**Entrada:**
```
[[1,2],[3,4]]
```
**Salida (rotación antihoraria):**
```
[[2,4],[1,3]]
```

---

## 🛠️ Personalización y desarrollo
- Puedes modificar el diseño, los colores o los textos editando los archivos en `src/app`.
- La lógica de rotación está en `src/rotateMatrix.ts`.
- Si quieres agregar nuevas funcionalidades, ¡adelante! El código es claro y está comentado.

## 📢📢 Manejo de errores
La app maneja los siguientes errores:

1. Campo vacío
Si el área de texto está vacía y se intenta rotar, muestra:
> Por favor, ingresa una matriz en formato JSON.
2. Formato JSON inválido
Si el texto ingresado no es un JSON válido, muestra:
> El formato no es JSON válido. Ejemplo: [[1,2],[3,4]]
3. Estructura incorrecta
Si el JSON no es un array de arrays (por ejemplo, un array plano o un objeto), muestra:
> La estructura debe ser un array de arrays. Ejemplo: [[1,2],[3,4]]
4. Matriz vacía
Si la matriz es un array vacío ([]), muestra:
> La matriz no puede estar vacía.
5. Filas vacías
Si alguna fila es un array vacío ([[], []]), muestra:
> Cada fila debe tener al menos un elemento.
6. Matriz no cuadrada
Si las filas no tienen la misma longitud (no es NxN), muestra:
> La matriz debe ser cuadrada (todas las filas del mismo tamaño).
7. Valores no numéricos, nulos o vacíos
Si algún elemento no es un número (por ejemplo, string, null, undefined, boolean, array, etc.), muestra:
> No se permiten valores vacíos, nulos o no numéricos en la matriz.
8. Matriz 1x1
Si la matriz es de tamaño 1x1, muestra una advertencia:
> La matriz 1x1 no se rota, pero se muestra igual.



---

## 🤝 Créditos y contacto
📫 Me puedes contactar a través de:

- https://github.com/jarombyui

- jaromcamposrodriguez@gmail.com

- https://www.linkedin.com/in/jarom-campos/

Proyectos:
- https://portafolio-jarom.vercel.app/#home

- Telefono/ Whatys: +51 947726382

¿Tienes dudas, sugerencias o quieres contribuir? ¡No dudes en abrir un issue o contactarme!

---

¡Gracias por usar esta app y que disfrutes aprendiendo sobre matrices! 🎓
