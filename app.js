let inputUser = document.getElementById("user");
let inputPassword = document.getElementById("password");


function login() {
let userName = inputUser.value;
let password = inputPassword.value;

    if (userName === "admin2022" && password === "root123") {
        window.location = "/inicio.html";
    }
    else if (userName !== "admin2022"){
        alert("usuario incorrecto, acceso denegado");
    }
    else if(password !== "root123"){
        alert("contraseña incorrecta, acceso denegado");
    }
}

boton = document.getElementById("btn");

boton.onclick = login;