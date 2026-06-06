// =====================================
// IMPORTACIONES
// =====================================

import {
    db
}
from "./firebase.js";

import {
    collection,
    addDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// =====================================
// BOTÓN
// =====================================

const btnRegistrarMototaxi =
document.getElementById(
"btnRegistrarMototaxi"
);


// =====================================
// GENERAR CÓDIGO
// =====================================

function generarCodigo() {

    const letras =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const numero =
    Math.floor(
        Math.random() * 900
    ) + 100;

    let serie = "";

    for(let i = 0; i < 3; i++){

        serie += letras.charAt(
            Math.floor(
                Math.random() *
                letras.length
            )
        );

    }

    return `M ${numero} ${serie}`;

}


// =====================================
// EVENTO CLICK
// =====================================

btnRegistrarMototaxi.addEventListener(
"click",
async () => {

    try{

        // ============================
        // OBTENER DATOS
        // ============================

        const nombreCompleto =
        document.getElementById(
        "nombreCompleto"
        ).value;

        const dpi =
        document.getElementById(
        "dpi"
        ).value;

        const domicilio =
        document.getElementById(
        "domicilio"
        ).value;

        const modelo =
        document.getElementById(
        "modelo"
        ).value;

        const color =
        document.getElementById(
        "color"
        ).value;

        const seguroVida =
        document.getElementById(
        "seguroVida"
        ).value;

        const municipio =
        document.getElementById(
        "municipio"
        ).value;


        // ============================
        // VALIDACIÓN
        // ============================

        if(
            nombreCompleto === "" ||
            dpi === "" ||
            domicilio === "" ||
            modelo === "" ||
            color === ""
        ){

            alert(
            "Debe completar todos los campos"
            );

            return;
        }


        // ============================
        // GENERAR CÓDIGO
        // ============================

        const codigoMototaxi =
        generarCodigo();


        // ============================
        // GUARDAR FIRESTORE
        // ============================

        await addDoc(

            collection(
                db,
                "mototaxis"
            ),

            {

                nombreCompleto:
                nombreCompleto,

                dpi:
                dpi,

                domicilio:
                domicilio,

                municipio:
                municipio,

                modelo:
                modelo,

                color:
                color,

                seguroVida:
                seguroVida,

                codigoMototaxi:
                codigoMototaxi,

                fechaRegistro:
                new Date()
                .toLocaleDateString()

            }

        );


        // ============================
        // ÉXITO
        // ============================

        alert(
        "Mototaxi registrado\n\nCódigo: "
        + codigoMototaxi
        );



        // ============================
        // LIMPIAR FORMULARIO
        // ============================

        document.getElementById(
        "nombreCompleto"
        ).value = "";

        document.getElementById(
        "dpi"
        ).value = "";

        document.getElementById(
        "domicilio"
        ).value = "";

        document.getElementById(
        "modelo"
        ).value = "";

        document.getElementById(
        "color"
        ).value = "";

    }

    catch(error){

        console.error(error);

        alert(
        error.message
        );

    }

});