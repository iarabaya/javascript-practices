const original = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
// -------
let indiceAmarillo = null;
let cantidadColoresConA = 0;
let arregloSinAzul = [];
let ordenadoPorCantidadLetras = [];
let arregloConNuevoColorInicio = [];
let arregloConNuevoColorFin = [];

//A partir del arreglo original, obtener los siguientes resultados:
//- indiceAmarillo: Indice de la ubicacion en el arreglo de 'Amarillo' 
indiceAmarillo = original.indexOf('Amarillo');
console.log(indiceAmarillo);

//- cantidadColoresConA: Cuantos colores hay en el arreglo con la letra 'a' (Mayuscula o minuscula)
cantidadColoresConA = original.filter(e =>  e.includes('a') || e.includes('A')).length
console.log(cantidadColoresConA);

//- arregloSinAzul: El arreglo original sin el valor 'Azul'
arregloSinAzul = original.filter(e => e != 'Azul');
console.log(arregloSinAzul);

//- ordenadoPorCantidadLetras: El arreglo orginal ordenado de forma ascendente por la cantidad de letras en su nombre.
ordenadoPorCantidadLetras = original.sort((a,b) => a.length - b.length);
console.log(ordenadoPorCantidadLetras);

//- arregloConNuevoColorInicio: El arreglo original con un nuevo color al inicio del mismo.
arregloConNuevoColorInicio = ['Naranja',...original];
console.log(arregloConNuevoColorInicio);

//- arregloConNuevoColorFin: El arreglo original con un nuevo color al final del mismo.
arregloConNuevoColorFin = original; // o arregloConNuevoColorFin = [...original, 'Violeta'];
arregloConNuevoColorFin.push('Violeta');
console.log(arregloConNuevoColorFin);