document.addEventListener("DOMContentLoaded", llamadaApi);

const btn = document.getElementById("btn");

function llamadaApi() {
    fetch("https://dolarapi.com/v1/dolares")
        .then(response => response.json())
        .then(data => mostrarDatos(data));
}

btn.addEventListener("click", (e) => {
    e.preventDefault();

    const cantidad = parseFloat(document.getElementById("cantidad").value);

    const compras = document.querySelectorAll("#compra");
    const ventas = document.querySelectorAll("#venta");

    compras.forEach(compra => {
        let valor = parseFloat(compra.getAttribute("value"));
        compra.textContent = valor * cantidad;
    });

    ventas.forEach(venta => {
        let valor = parseFloat(venta.getAttribute("value"));
        venta.textContent = valor * cantidad;
    });
});

function mostrarDatos(datos) {
    const container = document.getElementById("cont");

    datos.forEach(dato => {
        container.innerHTML += `
            <div class="card">
                <div class="title">
                    <h1>${dato.nombre}</h1>
                </div>
                <div class="values">
                    <div class="compra">
                        <h3>Compra</h3>
                        <h3 value="${dato.compra}" id="compra">${dato.compra}</h3>
                    </div>
                    <div class="venta">
                        <h3>Venta</h3>
                        <h3 value="${dato.venta}" id="venta">${dato.venta}</h3>
                    </div>
                </div>
            </div>
        `;
    });
}
