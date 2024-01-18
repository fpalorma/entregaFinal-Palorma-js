import { btnConversor, borrarHistorial, divContenedorHistorialConversion, divContenedorHistorialtotal } from "./scripts/constantes/constantes.js";
import cargaInicial from "./scripts/funciones/cargaInicial.js";
import convertir from "./scripts/funciones/convertir.js";




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
