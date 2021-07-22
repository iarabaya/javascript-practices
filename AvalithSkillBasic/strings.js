const stringA = 'Rojo,Verde,Amarillo,Azul';
const stringB = 'Sergio';
const stringC = 'Damian';
const stringD = 'Mi nombre es Damian y tengo 28 años';
// -------
let tamanioA = 0;
let cantidadLetraR = 0;
let nombreCompleto = '';
let fraseOtroNombre = '';
let posicionNombre = null;
let arregloParseado = [];

//A partir de los arreglo originales, obtener los siguientes resultados:
//- tamanioA: Tamaño del string A
tamanioA = stringA.length;
console.log(tamanioA);

//- cantidadLetraR: Cuantas letras R (Mayuscula o minuscula) hay en el string A
cantidadLetraR = stringA.split('').filter(e => e == 'r'|| e == 'R').length;
console.log(cantidadLetraR);

//- nombreCompleto: Formar el nombre completo a partir de los strings B y C
nombreCompleto = `${stringB} ${stringC}`;
console.log(nombreCompleto);

//- fraseOtroNombre: Cambiar el nombre 'Damian' del string D con el nombre del string B
fraseOtroNombre = stringD.split(' ').map(e => {return e === 'Damian'? stringB : e}).join(' ');
console.log(fraseOtroNombre);

//- posicionNombre: Posicion de 'Damian' en el string D
posicionNombre = stringD.split(' ').indexOf('Damian');
console.log(posicionNombre);

//- arregloParseado: Arreglo formado a partir del string A
arregloParseado = stringA.split(',');
console.log(arregloParseado);