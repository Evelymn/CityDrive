// =============================
// IMPORTACIONES
// =============================

import {
    db
}
from "./firebase.js";

import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    getDoc,
    updateDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// =============================
// TABLA
// =============================

const tabla =
document.getElementById(
"tablaMototaxis"
);


// =============================
// CARGAR REGISTROS
// =============================

async function cargarMototaxis(){

    tabla.innerHTML = "";

    const consulta =
    await getDocs(
        collection(db,"mototaxis")
    );

    consulta.forEach((registro)=>{

        const datos =
        registro.data();

        tabla.innerHTML += `

        <tr>

            <td>
                ${datos.codigoMototaxi}
            </td>

            <td>
                ${datos.nombreCompleto}
            </td>

            <td>
                ${datos.modelo}
            </td>

            <td>
                ${datos.color}
            </td>

           <td>

    <button
    class="btn btn-warning btn-sm me-2"
    onclick="editarMototaxi('${registro.id}')">

        ✏️ Editar

    </button>

    <button
    class="btn btn-danger btn-sm"
    onclick="eliminarMototaxi('${registro.id}')">

        🗑️ Eliminar

    </button>

</td>
        </tr>

        `;

    });

}


// =============================
// ELIMINAR
// =============================

window.eliminarMototaxi =
async (id)=>{

    const confirmar =
    confirm(
    "¿Desea eliminar este registro?"
    );

    if(!confirmar){

        return;
    }

    await deleteDoc(
        doc(
            db,
            "mototaxis",
            id
        )
    );

    cargarMototaxis();

};

// =============================
// EDITAR
// =============================

window.editarMototaxi =
async (id)=>{

    const referencia =
    doc(db,"mototaxis",id);

    const documento =
    await getDoc(referencia);

    const datos =
    documento.data();

    document.getElementById(
    "editId"
    ).value = id;

    document.getElementById(
    "editNombre"
    ).value =
    datos.nombreCompleto;

    document.getElementById(
    "editModelo"
    ).value =
    datos.modelo;

    document.getElementById(
    "editColor"
    ).value =
    datos.color;

    document.getElementById(
    "editSeguro"
    ).value =
    datos.seguroVida;

    const modal =
    new bootstrap.Modal(
        document.getElementById(
        "modalEditar"
        )
    );

    modal.show();

};
cargarMototaxis();
// =============================
// GUARDAR CAMBIOS
// =============================

document
.getElementById(
"btnGuardarCambios"
)
.addEventListener(
"click",
async ()=>{

    const id =
    document.getElementById(
    "editId"
    ).value;

    await updateDoc(
        doc(db,"mototaxis",id),
        {

            nombreCompleto:
            document.getElementById(
            "editNombre"
            ).value,

            modelo:
            document.getElementById(
            "editModelo"
            ).value,

            color:
            document.getElementById(
            "editColor"
            ).value,

            seguroVida:
            document.getElementById(
            "editSeguro"
            ).value

        }
    );

    location.reload();

});