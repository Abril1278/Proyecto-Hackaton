const usuarios = [
    { user: "admin" },
    { user: "estudiante" }
];

function login() {
    let user = document.getElementById("usuario").value;

    // Buscar usuario
    let valido = usuarios.find(u => u.user === user);

    if (!valido) {
        alert("Usuario no encontrado");
        return;
    }

    usuarioActual = user;
   

    iniciarApp();
}

function logout() {
    localStorage.removeItem("usuarioActual");
    location.reload();
}