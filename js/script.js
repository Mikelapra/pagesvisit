
//EXPLICACIÓN DE COMO LO HE HECHO//

// 1.- Para operar con el DOM, capturamos el id del tag donde va el número de visitas en el sitio web.

const contadorVisitas = document.getElementById("contadorVisitas");

//3.- Creamos la variable "visitasPaginas" en el cual traemos la clave "visitasPagina" del localStorage y es donde vamos a almacenar el número de visitas.
 
const visitasPagina = localStorage.getItem("visitasPagina");

//4.- Por lo que creamos una variable Contador con valor numerico 1.

let contador = 0

//5.- Creamos un condicional ternario:
// Convertimos en variable booleana "contadorVisitas" al poner !. Siendo su respuesta console.log(!contadorVisitas)="False".
// Al saber que !contadorVisitas es un "False", en el condicional ternario ejecutará la segunda condición (siendo la primera para true), cada vez que se cargue la web. Con ello 
// sumándole 1 con cada recarga al tener "contador ++".

!contadorVisitas
    ?
    null // da igual, no lo ejecutará.
    :
    contador = localStorage.getItem("visitasPagina"),
    contador ++,
    localStorage.setItem("visitasPagina",contador);

// 6.- Lo insertamos en la web.

contadorVisitas.innerHTML = contador;

// 7.- Capturamos el botón mediante su id en una variable al cual le ponemos un evento. Cuando se clique, se limpiará el localStorage y devolverá un uno al contador.

const btnReestablecer = document.getElementById("btnReestablecer") 

btnReestablecer.addEventListener("click", () => {
    localStorage.clear();
    contador =0; 
    contadorVisitas.innerHTML = contador;
  });


