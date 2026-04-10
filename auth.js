const usuarios = [
    { user: "admin", pass: "1234" },
    { user: "estudiante", pass: "abcd" }
];

function login() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;

    let valido = usuarios.find(u => u.user === user && u.pass === pass);

    if (!valido) {
        alert("Credenciales incorrectas");
        return;
    }

    usuarioActual = user;
    localStorage.setItem("usuarioActual", user);

    iniciarApp();
}

function logout() {
    localStorage.removeItem("usuarioActual");
    location.reload();
}