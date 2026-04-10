let sesiones = [];

function agregarSesion() {
    let materia = document.getElementById("materia").value;
    let duracion = document.getElementById("duracion").value;

    if (!materia) return;

    sesiones.push({ materia, duracion });
    guardar();
    mostrarSesiones();
}

function mostrarSesiones() {
    let lista = document.getElementById("listaSesiones");
    lista.innerHTML = "";

    sesiones.forEach(s => {
        let li = document.createElement("li");
        li.textContent = `${s.materia} ${s.duracion}`;
        lista.appendChild(li);
    });
}