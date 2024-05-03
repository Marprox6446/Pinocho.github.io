document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar los productos en el catálogo
    function cargarProductos() {
        const productos = JSON.parse(localStorage.getItem("productos")) || [];
        const catalogoContainer = document.getElementById("catalogo");
        catalogoContainer.innerHTML = ""; // Limpiar el contenedor del catálogo

        if (productos.length === 0) {
            catalogoContainer.innerHTML = "<p>No hay productos disponibles.</p>";
        } else {
            const listaProductos = document.createElement("ul");
            productos.forEach(producto => {
                const itemProducto = document.createElement("li");
                const nombrePrecio = document.createElement("div");
                nombrePrecio.textContent = `${producto.nombre} - $${producto.precio}`;
                const descripcion = document.createElement("div");
                descripcion.textContent = `Descripción: ${producto.descripcion}`;
                const botonCarrito = document.createElement("button");
                botonCarrito.textContent = "Añadir al carrito";
                botonCarrito.addEventListener("click", function() {
                    agregarAlCarrito(producto);
                });
                itemProducto.appendChild(nombrePrecio);
                itemProducto.appendChild(descripcion);
                itemProducto.appendChild(botonCarrito);
                listaProductos.appendChild(itemProducto);
            });
            catalogoContainer.appendChild(listaProductos);
        }
    }

    // Función para agregar un producto al carrito
    function agregarAlCarrito(producto) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    // Cargar los productos en el catálogo al cargar la página
    cargarProductos();

    // Manejar el evento del botón para regresar al editor
    const regresarBtn = document.getElementById("regresarBtn");
    regresarBtn.addEventListener("click", function() {
        window.location.href = "editor.html"; // Reemplaza "editor.html" con la ruta real de tu página de editor
    });
});

