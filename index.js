const inputConversor = document.getElementById("input-convertir")
const btnConversor = document.querySelector(".btn-convertir")
const borrarHistorial = document.querySelector(".borrar-historial")
const divContenedorFichas = document.querySelector(".fichas-container")
const divContenedorHistorialConversion = document.querySelector(".historial-conversiones")
const divContenedorHistorialtotal = document.querySelector(".total-historial")
const historial = JSON.parse(localStorage.getItem("conversion")) ?? [];
let parrafoHistorialVacio = document.createElement("p")

class Conversion {
    constructor(pesos, fichas, horas, minutos, segundos) {
        this.pesos = pesos;
        this.fichas = fichas;
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos
    };
}

function convertir(pesos) {
    if (isNaN(pesos) || pesos < 0) {
        divContenedorFichas.innerHTML = `<p> No se pueden convertir valores negativos u otros valores no numéricos</p>`
        let pesos = parseFloat(inputConversor.value);
        convertir(pesos)
    }
    else {
        let fichas = pesos / 120
        divContenedorFichas.innerHTML = `<p> ${fichas.toFixed(3)} Fichas`

        let hoy = new Date()
        let horas = hoy.getHours()
        let minutos = hoy.getMinutes()
        let segundos = hoy.getSeconds()
        const conversionNueva = new Conversion(pesos, fichas, horas, minutos, segundos)
        historial.push(conversionNueva)
        console.log(conversionNueva);
        localStorage.setItem("conversion", JSON.stringify(historial))
        verHistorial()
    }
}

function verHistorial() {

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


function cargaInicial() {
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


window.addEventListener('load', function () {

    cargaInicial()
});



btnConversor.addEventListener("click", convertir);

borrarHistorial.addEventListener("click", () => {
    localStorage.removeItem("conversion");
    divContenedorHistorialConversion.innerHTML = "";
    divContenedorHistorialtotal.innerHTML = "";
    location.reload();
})
