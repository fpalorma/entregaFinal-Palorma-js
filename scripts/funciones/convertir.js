
import { historial, divContenedorFichas, inputConversor, apiDolar } from "../constantes/constantes.js";
import Conversion from "../clases.js";
import verHistorial from "./verHistorial.js";





async function getDolar() {

    const res = await fetch(apiDolar)
    if (!res.ok) {
        throw new Error("No se pudo obtener el precio actual del Dólar");
    }
    const data = await res.json();
    return data.venta


}



// console.log(precioDolar);
export default async function convertir(pesos) {
    pesos = parseFloat(inputConversor.value);
    if (isNaN(pesos) || pesos <= 0) {
        Swal.fire({
            icon: "error",
            title: "D'Oh",
            text: "No se pueden ingresar valores negativos o no numéricos",
            footer: 'Prueba usar otro número'
        });

    }

    else {
        try {
            let precioDolar = await getDolar()
            let fichas = pesos / precioDolar
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
            verHistorial();
            Toastify({
                text: "Conversión realizada con éxito",
                duration: 3000,
                close: false,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: false, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();

        } catch (error) {
            return Swal.fire({
                icon: "error",
                title: "D'Oh",
                text: "No se pudo obtener la cotización",
                footer: 'Nuestros servidores están ocupados'
            });
        }

    }
    inputConversor.value = "";
}
