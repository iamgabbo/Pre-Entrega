// Validar formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    const submitButton = form.querySelector('button[type="submit"]');

    // Inicialmente deshabilitar el botón
    submitButton.disabled = true;

    // Función para verificar si todos los campos están completos
    function verificarCampos() {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Habilitar o deshabilitar el botón según el estado de los campos
        if (name && email && message) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    // Escuchar cambios en los campos
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener("input", verificarCampos);
    });

    // Manejar el envío del formulario
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el envío por defecto
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name && email && message) {
            console.log("Todos los campos están completos. Enviando formulario...");
            form.submit(); // Envía el formulario si todo está completo
        } else {
            console.log("Por favor, completa todos los campos del formulario.");
            alert("Por favor, completa todos los campos del formulario.");
        }
    });
});

// Productos disponibles
const productos = [
    {
        id: 1,
        nombre: "Auriculares JBL Tune 520BT",
        precio: 62410,
        descripcion: "Auriculares inalámbricos con sonido puro y diseño ergonómico.",
        imagen: "aseets/auricularesVincha.webp",
        pagina: "producto1.html",
    },
    {
        id: 2,
        nombre: "JBL Clip 4",
        precio: 82999,
        descripcion: "Parlante portátil con diseño resistente al agua y sonido claro.",
        imagen: "aseets/clip4.webp",
        pagina: "producto2.html",
    },
    {
        id: 3,
        nombre: "Parlante JBL Go 4",
        precio: 75999,
        descripcion: "Compacto y potente, ideal para llevar a todas partes.",
        imagen: "aseets/go4.webp",
        pagina: "producto3.html",
    },
    {
        id: 4,
        nombre: "Auriculares JBL Wave Buds",
        precio: 112999,
        descripcion: "Auriculares True Wireless con resistencia al agua y gran batería.",
        imagen: "aseets/wabe.webp",
        pagina: "producto4.html",
    },
];


// Renderizar productos en el HTML
const gridProductos = document.querySelector(".product-grid");

productos.forEach(producto => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <a href="${producto.pagina}">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
        </a>
        <p>${producto.descripcion}</p>
        <p>Precio: $${producto.precio}</p>
        <button class="comprar" data-id="${producto.id}">Comprar</button>
    `;

    gridProductos.appendChild(card);
});


// Carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function actualizarCarrito() {
    const carritoContainer = document.querySelector("#carrito");
    if (!carritoContainer) return; // Si no hay contenedor del carrito en la página, salir

    carritoContainer.innerHTML = "";
    let total = 0;

    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;

        const item = document.createElement("div");
        item.className = "carrito-item";

        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="carrito-item-imagen">
            <div class="carrito-item-detalles">
                <h4>${producto.nombre}</h4>
                <p>Precio: $${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>
            </div>
            <div class="carrito-item-controles">
                <button onclick="editarCantidad(${producto.id}, -1)">-</button>
                <button onclick="editarCantidad(${producto.id}, 1)">+</button>
                <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </div>
        `;

        carritoContainer.appendChild(item);
    });

    const totalDisplay = document.createElement("p");
    totalDisplay.className = "carrito-total";
    totalDisplay.innerHTML = `<strong>Total: $${total}</strong>`;
    carritoContainer.appendChild(totalDisplay);
}


function añadirAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const enCarrito = carrito.find(p => p.id === id);

    if (enCarrito) {
        enCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarMensaje(`"${producto.nombre}" agregado al carrito`);
    actualizarCarrito();
}

function editarCantidad(id, cambio) {
    const producto = carrito.find(p => p.id === id);
    if (producto) {
        producto.cantidad += cambio;
        if (producto.cantidad <= 0) eliminarProducto(id);
        else localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito();
    }
}

function eliminarProducto(id) {
    carrito = carrito.filter(p => p.id !== id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

function mostrarMensaje(mensaje) {
    const mensajeDiv = document.createElement("div");
    mensajeDiv.className = "mensaje-carrito";
    mensajeDiv.textContent = mensaje;
    document.body.appendChild(mensajeDiv);
    setTimeout(() => mensajeDiv.remove(), 3000);
}

document.querySelector("#abrir-carrito").addEventListener("click", () => {
    document.querySelector("#carrito").classList.toggle("visible");
});

document.querySelectorAll(".comprar").forEach(boton => {
    boton.addEventListener("click", function () {
        añadirAlCarrito(parseInt(this.dataset.id));
    });
});



actualizarCarrito();
