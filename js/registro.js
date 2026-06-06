// =====================================
// IMPORTACIONES
// =====================================

// auth y db vienen desde firebase.js
import {
    auth,
    db
}
from "./firebase.js";

// Firebase Authentication
import {
    createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firestore
import {
    collection,
    addDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// =====================================
// BOTÓN CREAR CUENTA
// =====================================

const btnCrearCuenta =
document.getElementById("btnCrearCuenta");


// =====================================
// EVENTO CLICK
// =====================================

btnCrearCuenta.addEventListener(
"click",
async () => {

    try {

        // ============================
        // OBTENER DATOS DEL FORMULARIO
        // ============================

        const nombre =
        document.getElementById("nombre").value;

        const correo =
        document.getElementById("correo").value;

        const password =
        document.getElementById("password").value;

        const confirmPassword =
        document.getElementById("confirmPassword").value;

        const rol =
        document.getElementById("rol").value;
        

// ============================
// VALIDAR ROL
// ============================

if(rol === "Seleccione un rol"){

    alert(
    "Debe seleccionar un rol"
    );

    return;
}


        // ============================
        // VALIDAR CONTRASEÑAS
        // ============================

        if(password !== confirmPassword){

            alert(
            "Las contraseñas no coinciden"
            );

            return;
        }


        // ============================
        // CREAR USUARIO
        // ============================

        const credenciales =
        await createUserWithEmailAndPassword(
            auth,
            correo,
            password
        );



        // ============================
        // GUARDAR DATOS EN FIRESTORE
        // ============================

        await addDoc(
            collection(db,"usuarios"),
            {

                nombre: nombre,

                correo: correo,

                rol: rol,

                uid: credenciales.user.uid

            }
        );


        // ============================
        // MENSAJE DE ÉXITO
        // ============================

        alert(
        "Usuario creado correctamente"
        );


        // ============================
        // REDIRECCIONAR AL LOGIN
        // ============================

        window.location.href =
        "index.html";

    }
    catch(error){

        console.error(error);

        alert(error.message);

    }

});