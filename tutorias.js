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

function mostrarTutorias() {
    let lista = document.getElementById("listaTutorias");
    lista.innerHTML = "";

    tutorias.forEach(t => {
        let li = document.createElement("li");
        li.textContent = `${t.materia} ${t.tutor}`;
        lista.appendChild(li);
    });
}