import { historial, divContenedorHistorialConversion, divContenedorHistorialtotal, parrafoHistorialVacio } from "../constantes/constantes.js"
import actualizarBtnEliminar from "./btnEliminar.js"



export default function cargaInicial() {
    if (historial.length > 0) {
        historial.forEach((el) => {
            const parrafoHistorial = document.createElement("div")
            parrafoHistorial.innerHTML = `<p>Convertiste ${el.pesos} pesos a ${(el.fichas).toFixed(3)} fichas a las: ${el.horas} horas ${el.minutos} minutos con ${el.segundos} segundos</p> <button class="conversion-eliminar" id="${el.id}"><i class="bi bi-trash-fill"></i></button>`
            divContenedorHistorialConversion.appendChild(parrafoHistorial)


            let pesosTotales = 0
            let fichasTotales = 0

            pesosTotales = historial.reduce((acumulador, moneda) => acumulador + moneda.pesos, 0);
            fichasTotales = historial.reduce((acumulador, moneda) => acumulador + moneda.fichas, 0);
            divContenedorHistorialtotal.innerHTML = `<p>En total has convertido ${pesosTotales} pesos a ${fichasTotales.toFixed(3)} fichas </p>`

        })
    } else {
        
        parrafoHistorialVacio.innerHTML = `Aun no has convertido divisas`
        divContenedorHistorialConversion.appendChild(parrafoHistorialVacio)
    }
    actualizarBtnEliminar();
}