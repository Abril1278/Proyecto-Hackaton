let tareas = [];

function agregarTarea() {
    let titulo = document.getElementById("titulo").value;
    let prioridad = document.getElementById("prioridad").value;
    let fecha = document.getElementById("fecha").value;

    if (!titulo) return;

    tareas.push({ titulo, prioridad, fecha, completada: false });

    priorizar();
    guardar();
    mostrarTareas();
}

function priorizar() {
    let orden = { Alta:1, Media:2, Baja:3 };
    tareas.sort((a,b) => orden[a.prioridad] - orden[b.prioridad]);
}

function completarTarea(i) {
    tareas[i].completada = true;
    guardar();
    mostrarTareas();
}

function mostrarTareas() {
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    tareas.forEach((t,i) => {
        let li = document.createElement("li");
        li.innerHTML = `${t.titulo} ${t.prioridad}
        <button onclick="completarTarea(${i})">OK</button>`;
        lista.appendChild(li);
    });
}