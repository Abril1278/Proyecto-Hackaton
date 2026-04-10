function guardar() {
    guardarDatos(tareas, sesiones, tutorias);
}

function iniciarApp() {
    let datos = cargarDatos();

    tareas = datos.tareas;
    sesiones = datos.sesiones;
    tutorias = datos.tutorias;

    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";

    mostrarTareas();
    mostrarSesiones();
    mostrarTutorias();
}

window.onload = function() {
    let user = localStorage.getItem("usuarioActual");

    if (user) {
        usuarioActual = user;
        iniciarApp();
    }
};