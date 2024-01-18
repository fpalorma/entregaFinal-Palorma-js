import { historial, divContenedorHistorialConversion, divContenedorHistorialtotal, parrafoHistorialVacio } from "../constantes/constantes.js"



export default function cargaInicial() {
    if (historial.length > 0) {
        historial.forEach((el) => {
            const parrafoHistorial = document.createElement("p")
            parrafoHistorial.innerHTML = `Convertiste ${el.pesos} pesos a ${(el.fichas).toFixed(3)} fichas a las: ${el.horas} horas ${el.minutos} minutos con ${el.segundos} segundos`
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
}