
import { historial, divContenedorFichas, inputConversor } from "../constantes/constantes.js";
import Conversion from "../clases.js";
import verHistorial from "./verHistorial.js";

export default function convertir(pesos) {
    if (isNaN(pesos) || pesos <= 0) {
        divContenedorFichas.innerHTML = `<p> No se pueden convertir valores negativos u otros valores no numéricos</p>`
        pesos = parseFloat(inputConversor.value);
        convertir(pesos)
    }
    else {
        let fichas = pesos / 120
        divContenedorFichas.innerHTML = `<p> ${fichas.toFixed(3)} Fichas`

        let hoy = new Date()
        let horas = hoy.getHours()
        let minutos = hoy.getMinutes()
        let segundos = hoy.getSeconds()
        let id = hoy.getTime()
        const conversionNueva = new Conversion(id, pesos, fichas, horas, minutos, segundos)
        historial.push(conversionNueva)
        console.log(conversionNueva);
        localStorage.setItem("conversion", JSON.stringify(historial))
        verHistorial()
    }
}