let tutorias = [];

function agendarTutoria() {
    let materia = document.getElementById("materiaTutoria").value;
    let tutor = document.getElementById("tutor").value;
    let fecha = document.getElementById("fechaTutoria").value;

    if (!materia || !tutor) return;

    tutorias.push({ materia, tutor, fecha });
    guardar();
    mostrarTutorias();
}

//  ELIMINAR
function eliminarTutoria(i) {
    tutorias.splice(i, 1);
    guardar();
    mostrarTutorias();
}

function mostrarTutorias() {
    let lista = document.getElementById("listaTutorias");
    lista.innerHTML = "";

    tutorias.forEach((t, i) => {
        let li = document.createElement("li");
        li.className = "list-group-item";

        li.innerHTML = `
            ${t.materia} | ${t.tutor} | ${t.fecha}
            <button class="btn btn-danger btn-sm float-end" onclick="eliminarTutoria(${i})">Eliminar</button>
        `;

        lista.appendChild(li);
    });
}