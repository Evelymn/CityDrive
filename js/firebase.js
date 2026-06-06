// ==============================
// IMPORTACIONES
// ==============================

// Inicializa Firebase
import {
    initializeApp
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Autenticación
import {
    getAuth
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firestore
import {
    getFirestore
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ==============================
// CONFIGURACIÓN FIREBASE
// ==============================

const firebaseConfig = {

    apiKey: "AIzaSyDL7vYpNNUcK8dgXWcj7Lo6Qp8FAdt9utw",

    authDomain:
    "registromototaxissanmateo.firebaseapp.com",

    projectId:
    "registromototaxissanmateo",

    storageBucket:
    "registromototaxissanmateo.firebasestorage.app",

    messagingSenderId:
    "866986255081",

    appId:
    "1:866986255081:web:73e32777e60120dde7c678"

};


// ==============================
// INICIALIZAR FIREBASE
// ==============================

const app =
initializeApp(firebaseConfig);


// ==============================
// AUTENTICACIÓN
// ==============================

const auth =
getAuth(app);


// ==============================
// FIRESTORE
// ==============================

const db =
getFirestore(app);


// ==============================
// EXPORTACIONES
// ==============================

// Permite usar auth y db
// desde otros archivos

export {
    auth,
    db
};