 import { historial } from "../constantes/constantes.js";
 
 export default function actualizarBtnEliminar() {

    let btn = document.querySelectorAll(".conversion-eliminar")

    btn.forEach(boton => {
        boton.addEventListener("click", eliminarDelH)
    })
}

function eliminarDelH(e) {
    
    const idBoton = e.currentTarget.id;
    
    const index = historial.findIndex(el => el.id == idBoton)
    
    
    historial.splice(index, 1);
    
    localStorage.setItem("conversion", JSON.stringify(historial))
    
    location.reload();
}