E-commerce JBL

Este es un proyecto de un sitio web de comercio electrónico enfocado en productos de la marca JBL, como auriculares y parlantes. El sitio incluye una página principal con una lista dinámica de productos, páginas individuales con detalles de cada producto, y un carrito de compras funcional. Además, cuenta con un formulario de contacto con validaciones para mejorar la experiencia del usuario.

Características del Proyecto

1. Página Principal (index.html)
Productos mostrados dinámicamente: Los productos se generan desde un array JSON en script.js y se muestran dinámicamente en la página principal.
Imágenes y descripciones: Cada producto incluye una imagen, descripción, precio y un botón para añadirlo al carrito.
Enlace a páginas de producto: Cada producto enlaza a una página individual con más detalles.
2. Páginas de Producto (producto1.html, producto2.html, etc.)
Cada producto tiene su propia página con una descripción más detallada.
Incluyen un botón para volver a la tienda.
3. Carrito de Compras
Botón flotante de carrito: Siempre visible en la esquina superior derecha del index.
Vista del carrito: Muestra los productos añadidos al carrito, incluyendo imagen, nombre, cantidad y precio.
Controles de cantidad: Permite aumentar, disminuir o eliminar productos del carrito.
Persistencia del carrito: Los datos se almacenan en localStorage, lo que permite mantener el carrito.
4. Formulario de Contacto
Validación dinámica: El botón "Enviar" está deshabilitado hasta que todos los campos (nombre, correo y mensaje) están completos.
Mensaje de advertencia: Si el usuario intenta enviar sin completar los campos, se muestra una alerta indicando que debe completarlos.
Envío funcional: Usa Formspree para manejar los envíos de los datos.

Tecnologías Utilizadas

HTML: Para la estructura del sitio web, dividido en etiquetas semánticas (header, main, section, footer).

CSS:
Diseño responsivo utilizando Flexbox y Grid.
Animaciones para mejorar la experiencia del usuario (zoom en productos y mensajes emergentes).
Estilos personalizados para el carrito y las tarjetas de productos.
JavaScript:
Generación dinámica de contenido (productos y carrito).
Validación del formulario.
Gestión de eventos como clics en botones de "Comprar" o "Eliminar".
Persistencia del carrito usando localStorage.
Formspree: Para el manejo del formulario de contacto.
Google Fonts: Para un diseño tipográfico moderno y legible.
Cómo Usar Este Proyecto
1. Clonar el Repositorio
Clona este repositorio en tu máquina local:

bash
Copiar código
git clone <URL_DEL_REPOSITORIO>
2. Abrir en el Navegador
Abre el archivo index.html en tu navegador para explorar el sitio.

3. Navegar por el Sitio
Explora los productos en la página principal.
Haz clic en un producto para ver su descripción detallada.
Añade productos al carrito desde cualquier página.
Consulta el carrito desde el botón flotante en la esquina superior derecha.
Envía un mensaje a través del formulario de contacto.
Funcionalidades Adicionales
Carrito de Compras
Agregar Productos: Puedes agregar productos desde la página principal o las páginas individuales.
Vista del Carrito: Muestra los productos con:
Imagen.
Nombre.
Cantidad.
Precio unitario y total.
Editar y Eliminar Productos: Cambia la cantidad o elimina productos directamente desde el carrito.
Persistencia: El carrito conserva los productos añadidos incluso después de recargar la página o navegar entre diferentes páginas.
Validación del Formulario
El botón "Enviar" está deshabilitado hasta que todos los campos estén completos.
Muestra un mensaje si intentas enviar el formulario incompleto.
Estructura del Proyecto
css
Copiar código
ecommerce-jbl/
├── index.html          # Página principal del sitio
├── producto1.html      # Página del producto 1
├── producto2.html      # Página del producto 2
├── producto3.html      # Página del producto 3
├── producto4.html      # Página del producto 4
├── style.css           # Estilos del sitio
├── script.js           # Lógica de interacción y funcionalidad
└── README.md           # Descripción del proyecto