let usuarioActual = null;

function clave(tipo) {
    return usuarioActual + "_" + tipo;
}

function guardarDatos(tareas, sesiones, tutorias) {
    localStorage.setItem(clave("tareas"), JSON.stringify(tareas));
    localStorage.setItem(clave("sesiones"), JSON.stringify(sesiones));
    localStorage.setItem(clave("tutorias"), JSON.stringify(tutorias));
}

function cargarDatos() {
    return {
        tareas: JSON.parse(localStorage.getItem(clave("tareas"))) || [],
        sesiones: JSON.parse(localStorage.getItem(clave("sesiones"))) || [],
        tutorias: JSON.parse(localStorage.getItem(clave("tutorias"))) || []
    };
}