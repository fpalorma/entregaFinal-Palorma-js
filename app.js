// variables
let confirmacionInicial = prompt("Desea simular una conversión de moneda? (si/no)")
let confirmacion = confirmacionInicial ? confirmacionInicial.toLowerCase() : confirmacionInicial = "no";
let repetir = "";

const historial = [];


class Conversion {
    constructor(pesos, fichas,horas,minutos, segundos) {
        this.pesos = pesos;
        this.fichas = fichas;
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos
    };
}
// Funciones

function convertir(pesos) {
    if (isNaN(pesos) || pesos < 0) {
        alert("No se pueden convertir valores negativos u otros valores no numéricos")
        let pesos = parseFloat(prompt("Ingrese cuántos pesos desea convertir a Fichas de Tomy y Daly"));
        convertir(pesos)
    }
    else {
        let fichas = pesos / 120
        alert(pesos + " Pesos serian " + fichas + " Fichas de Tomy y Daly")
        let hoy = new Date()
        let horas = hoy.getHours()
        let minutos = hoy.getMinutes()
        let segundos = hoy.getSeconds()
        const conversionNueva = new Conversion(pesos, fichas, horas, minutos, segundos)
        historial.push(conversionNueva)
        console.log(conversionNueva);
    }
}

function iniciarConversion() {
    if (confirmacion == "si") {
        let pesos = parseFloat(prompt("Ingrese cuántos pesos desea convertir a Fichas de Tomy y Daly"));
        convertir(pesos)
        repetirOperacion()

    } else if (confirmacion == null) {
        alert("Gracias, vuelva prontos")
    } else {
        alert("Gracias, vuelva prontos")
    };
}

function verHistorial() {
    let moneda = prompt("Elija en que moneda quiere ver el historial: \n pesos \n fichas")
    
    
    let mensaje = '';
    
        let monedaALeer = moneda.toLowerCase()
        let pesosTotales = historial.reduce((acumulador,moneda) => acumulador + moneda.pesos, 0)
        let fichasTotales = historial.reduce((acumulador,moneda) => acumulador + moneda.fichas, 0)
        if (monedaALeer == "pesos"){
            historial.forEach((el)=>{
                mensaje = mensaje + "convertiste " + el.pesos + " pesos"+ " a "+ el.fichas + " fichas "+ "a las: "+ el.horas+" horas "+el.minutos+" minutos con "+el.segundos+" segundos "+"\n"
            })
            alert(mensaje + " En total has convertido " + pesosTotales + " pesos");
            
        }else if(monedaALeer == "fichas"){
            historial.forEach((el)=>{
                mensaje = mensaje + "convertiste " + el.fichas  + " fichas"+ " de "+ el.pesos + " pesos"+ " a las: "+ el.horas+" horas "+el.minutos+" minutos con "+el.segundos+" segundos "+"\n"
            })
            alert(mensaje + " En total has convertido " + fichasTotales + " fichas");
        }else{
            mensaje = "Elija una opción válida"
            alert(mensaje);
            verHistorial();
        }
    }


function repetirOperacion() {

    let opcion = parseInt(prompt("Elija una opción: \n 1- Repetir operación \n 2- Ver historial \n 3- Finalizar"));

    while (opcion !== 3) {
        switch (opcion) {
            case 1:
                let pesos = parseFloat(prompt("Ingrese cuántos pesos desea convertir a Fichas de Tomy y Daly"));
                convertir(pesos)
                break;
            case 2:
                verHistorial()
                break;
            default:
                alert("Opción incorrecta")
                break;
        }

        opcion = parseInt(prompt("Elija una opción: \n 1- Repetir operación \n 2- Ver historial \n 3- Finalizar"))

    }
}
//Inicializacion de la app
do {
    iniciarConversion()
} while (repetir == "si")