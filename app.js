function convertir(pesos){
    if(typeof pesos === "string"){
        alert("ingrese un número")
    }
    else{
    let conversion = pesos*120
alert(pesos+" Pesos serian "+conversion+" Fichas de Tomy y Daly")
}}

let confirmacionInicial = prompt("Desea simular una conversión de moneda? (si/no)")
let confirmacion = confirmacionInicial ? confirmacionInicial.toLowerCase(): confirmacionInicial = "no";
console.log(confirmacion);

if(confirmacion == "si"){
    let pesos = parseFloat(prompt("Ingrese cuántos pesos desea convertir a Fichas de Tomy y Daly"));
convertir(pesos)

} else if (confirmacion == null){
    alert("Gracias, vuelva prontos")
}else{
    alert("Gracias, vuelva prontos")
}