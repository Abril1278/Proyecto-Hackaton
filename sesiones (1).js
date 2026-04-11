let sesiones = [];

function agregarSesion() {
    let materia = document.getElementById("materia").value;
    let duracion = document.getElementById("duracion").value;

    if (!materia) return;

    sesiones.push({ materia, duracion });
    guardar();
    mostrarSesiones();
}

// Eliminar
function eliminarSesion(i) {
    sesiones.splice(i, 1);
    guardar();
    mostrarSesiones();
}

function mostrarSesiones() {
    let lista = document.getElementById("listaSesiones");
    lista.innerHTML = "";

    sesiones.forEach((s, i) => {
        let li = document.createElement("li");
        li.className = "list-group-item";

        li.innerHTML = `
            ${s.materia} | ${s.duracion}
            <button class="btn btn-danger btn-sm float-end" onclick="eliminarSesion(${i})">Eliminar</button>
        `;

        lista.appendChild(li);
    });
}