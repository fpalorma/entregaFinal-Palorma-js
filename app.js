function convertir(pesos){
    if(typeof pesos === "string"){
        alert("ingrese un número")
    }
    else{
    let conversion = pesos*120
alert(pesos+" Pesos serian "+conversion+" Fichas de Tomy y Daly")
}}

function iniciarConversion(){
    if(confirmacion == "si"){
        let pesos = parseFloat(prompt("Ingrese cuántos pesos desea convertir a Fichas de Tomy y Daly"));
    convertir(pesos)
    
    } else if (confirmacion == null){
        alert("Gracias, vuelva prontos")
    }else{
        alert("Gracias, vuelva prontos")
    };
}
let confirmacionInicial = prompt("Desea simular una conversión de moneda? (si/no)")
let confirmacion = confirmacionInicial ? confirmacionInicial.toLowerCase(): confirmacionInicial = "no";
let repetir = "";
do{
    iniciarConversion()
    repetir = prompt("desea realizar otra conversión? (si/no)").toLowerCase()
}while(repetir == "si")