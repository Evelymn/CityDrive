// =====================================
// IMPORTACIONES
// =====================================

// auth viene desde firebase.js
import {
    auth
}
from "./firebase.js";

// Firebase Authentication
import {
    signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// =====================================
// BOTÓN LOGIN
// =====================================

const btnLogin =
document.getElementById("btnLogin");


// =====================================
// EVENTO CLICK
// =====================================

btnLogin.addEventListener(
"click",
async () => {

    try {

        // ============================
        // OBTENER DATOS DEL FORMULARIO
        // ============================

        const correo =
        document.getElementById("correo").value;

        const password =
        document.getElementById("password").value;


        // ============================
        // VALIDAR CAMPOS VACÍOS
        // ============================

        if(correo === "" || password === ""){

            alert(
            "Debe completar todos los campos"
            );

            return;
        }


        // ============================
        // LOGIN FIREBASE
        // ============================

        await signInWithEmailAndPassword(
            auth,
            correo,
            password
        );


        // ============================
        // MENSAJE
        // ============================

        alert(
        "Inicio de sesión correcto"
        );


        // ============================
        // REDIRECCIONAR
        // ============================

        window.location.href =
        "dashboard.html";

    }
    catch(error){

        console.error(error);

        alert(
        "Correo o contraseña incorrectos"
        );

    }

});