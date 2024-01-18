import { historial, divContenedorHistorialConversion, divContenedorHistorialtotal, parrafoHistorialVacio } from "../constantes/constantes.js"


export default function verHistorial() {

    if(parrafoHistorialVacio.innerHTML === `Aun no has convertido divisas`){
        parrafoHistorialVacio.innerHTML = `Aun no has convertido divisas`
        divContenedorHistorialConversion.appendChild(parrafoHistorialVacio)
        divContenedorHistorialConversion.removeChild(parrafoHistorialVacio)

    const parrafoHistorial = document.createElement("p")
    historial.forEach((el) => {
        parrafoHistorial.innerHTML = `Convertiste ${el.pesos} pesos a ${(el.fichas).toFixed(3)} fichas a las: ${el.horas} horas ${el.minutos} minutos con ${el.segundos} segundos`
        divContenedorHistorialConversion.appendChild(parrafoHistorial)


        let pesosTotales = 0
        let fichasTotales = 0

        pesosTotales = historial.reduce((acumulador, moneda) => acumulador + moneda.pesos, 0);
        fichasTotales = historial.reduce((acumulador, moneda) => acumulador + moneda.fichas, 0);
        divContenedorHistorialtotal.innerHTML = `<p>En total has convertido ${pesosTotales} pesos a ${fichasTotales.toFixed(3)} fichas </p>`

    })
    }else{
        

    const parrafoHistorial = document.createElement("p")
    historial.forEach((el) => {
        parrafoHistorial.innerHTML = `Convertiste ${el.pesos} pesos a ${(el.fichas).toFixed(3)} fichas a las: ${el.horas} horas ${el.minutos} minutos con ${el.segundos} segundos`
        divContenedorHistorialConversion.appendChild(parrafoHistorial)


        let pesosTotales = 0
        let fichasTotales = 0

        pesosTotales = historial.reduce((acumulador, moneda) => acumulador + moneda.pesos, 0);
        fichasTotales = historial.reduce((acumulador, moneda) => acumulador + moneda.fichas, 0);
        divContenedorHistorialtotal.innerHTML = `<p>En total has convertido ${pesosTotales} pesos a ${fichasTotales.toFixed(3)} fichas </p>`

    })
    }
       
}