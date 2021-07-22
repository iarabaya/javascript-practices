const originalA = {
    nombre: 'Sergio',
    edad: 28,
    preferidos: ['Pizza', 'Hamburguesa'],
    madre: {
        nombre: 'Sandra',
        edad: 54,
    },
};
const originalB = '{"nombre":"Damian","edad":26}';
// -------
let edadMadre = 0;
let objetoParseado = null;
let existeClaveMadreA = null;
let existeClaveMadreB = null;
let nombreDelMasJoven = null;
let clavesDelObjeto = [];

//A partir de los objetos originales, obtener los siguientes resultados:

// - edadMadre: Edad de la madre
edadMadre = originalA.madre.edad;
console.log(edadMadre);

//- objetoParseado: Objeto "originalB" parseado a objeto
objetoParseado = JSON.parse(originalB);
console.log(objetoParseado);

//- existeClaveMadreA: Si existe la clave madre en el objeto 'originalA'
existeClaveMadreA = Object.keys(originalA).includes('madre');
console.log(existeClaveMadreA);

//- existeClaveMadreB: Si existe la clave madre en el objeto 'originalB'
existeClaveMadreB = Object.keys(JSON.parse(originalB)).includes('madre');
console.log(existeClaveMadreB);

//- nombreDelMasJoven: Nombre de la persona mas joven
nombreDelMasJoven = originalA.edad > JSON.parse(originalB).edad? originalA.nombre : JSON.parse(originalB).nombre;
console.log(nombreDelMasJoven);

//- clavesDelObjeto: Que claves contiene el objeto 'originalA'
clavesDelObjeto = Object.keys(originalA);
console.log(clavesDelObjeto);