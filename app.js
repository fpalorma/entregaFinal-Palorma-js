function convertir(pesos){
    if(isNaN(pesos)){
        alert("ingrese un número")
        let pesos = parseFloat(prompt("Ingrese cuántos pesos desea convertir a Fichas de Tomy y Daly"));
        convertir(pesos)
    }
    else{
        let conversion = pesos/120
        alert(pesos+" Pesos serian "+conversion+" Fichas de Tomy y Daly")
        
}}

function iniciarConversion(){
    if(confirmacion == "si"){
        let pesos = parseFloat(prompt("Ingrese cuántos pesos desea convertir a Fichas de Tomy y Daly"));
    convertir(pesos)
    repetir = prompt("desea realizar otra conversión? (si/no)").toLowerCase()
    
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
}while(repetir == "si")