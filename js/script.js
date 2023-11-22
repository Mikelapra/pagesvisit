
//EXPLICACIÓN DE COMO LO HE HECHO//

// 1.- Para operar con el DOM, capturamos el id del tag donde va el número de visitas en el sitio web.

const contadorVisitas = document.getElementById("contadorVisitas");

// 2.- Creamos una variable booleana de la anterior variable el cual console.log(contadorVisitas1) = "false".

const contadorVisitas1 = !contadorVisitas

//3.- Creamos la variable "visitasPaginas" en el cual traemos la clave "visitasPagina" del localStorage y es donde vamos a almacenar el número de visitas.
 
const visitasPagina = localStorage.getItem("visitasPagina");

//4.- Por lo que creamos una variable Contador con valor 1.

let contador = 1

//5.- Creamos un condicional ternario: 
// Sabemos que la variable "contadorVisitas1" es un "False". Entonces ejecutará la primera condición incluyéndole la variable "contador" que tiene valor numerico 1. 
// Al recargarse nuevamente la página, la variable "contadorVisitas1", al guardar el valor de la variable contador = 1 de la primera condición, se habrá convertido 
// en un "True". Por ello, ejecutará siempre a partir de ahora la segunda condición cada vez que se cargue la web. Sumándole 1 con cada recarga con "contador ++".

contadorVisitas1
    ? 
    (localStorage.setItem("visitasPagina",contador))
    :
    contador = localStorage.getItem("visitasPagina"),
    contador ++,
    localStorage.setItem("visitasPagina",contador);

// 6.- Lo insertamos en la web.

contadorVisitas.innerHTML = contador;

// 7.- Capturamos el botón mediante su id en una variable al cual le ponemos un evento. Cuando se clique, la variable "contador" será nuevamnete igual a 1 y el valor de la 
//clave "visitasPagina" recuperará este valor 1 el localStorage.

const btnReestablecer = document.getElementById("btnReestablecer") 

btnReestablecer.addEventListener("click", () => {
    contador = 1;
    localStorage.setItem("visitasPagina", contador);
    contadorVisitas.innerHTML = contador;
  });


