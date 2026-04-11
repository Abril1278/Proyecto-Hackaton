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

//  ELIMINAR
function eliminarTarea(i) {
    tareas.splice(i, 1);
    guardar();
    mostrarTareas();
}

function mostrarTareas() {
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    tareas.forEach((t,i) => {
        let estado = t.completada ? "✔️" : "⏳";

        let li = document.createElement("li");
        li.className = "list-group-item";

        li.innerHTML = `
            ${estado} ${t.titulo} | ${t.prioridad} | ${t.fecha}
            <div class="mt-2">
                <button class="btn btn-success btn-sm" onclick="completarTarea(${i})">OK</button>
                <button class="btn btn-danger btn-sm" onclick="eliminarTarea(${i})">Eliminar</button>
            </div>
        `;

        lista.appendChild(li);
    });
}