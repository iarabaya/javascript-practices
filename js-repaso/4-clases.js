//EXPRESIÓN de clase, definimos y asignamos
//const Rectangulo = class R {}
//const Rectangulo = class {} es anonima

//console.log(Rectangulo);
//DECLARACION de clase
//clases declaradas con class no tienen hoisting!
class Rectangulo {

}

// Hoisting
// Y esto es cuando tomamos variables definidas con var
// y funciones definidas con function
// y las lleva al comienzo del archivo
//console.log(Cuadrado);
function Cuadrado() {}
//console.log(Cuadrado, Rectangulo);

//new ejecuta el constructor de la clase
//sin new no podemos declarar una nueva instancia de clase
const r = new Rectangulo()

class Chancho {
  //propiedades
  propiedad = 'mi propiedad'
  //# para propiedad privada, tienen que ser definidos necesariamente
  #hambre 
  static estatico = 42
  //constructor, argumentos con valores por defecto
  constructor(estado = 'feliz', hambre = false) {
    this.estado = estado
    this.#hambre = hambre
  }
  //métodos
  hablar() {
    console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre!' : 'satisfecho!'}`);
  }
//los metodos estaticos no pueden acceder a las propiedades publicas o privadas
//las propiedades son de la instancia en si 
//si puede acceder a una propiedad estática
  static comer() {
    console.log(this.estatico, 'estoy comiendo!');
  }
}

//puedo usar metodos estaticos sin instanciarlo
Chancho.comer()
const feliz = new Chancho('feliz');
//feliz.hablar()

//veo la clase con sus propiedades (no la privada) pero no sus métodos
//console.log(feliz);
//imprimir el prototipo, no se ven los metodos en node, pero si en web
//console.log(feliz.__proto__);
//pero si se ven los metodos en node con
//console.log(feliz.__proto__.hablar);
//  puedo acceder a esta propiedad porque por defecto es publica
// console.log(feliz.propiedad);
const triste = new Chancho('triste');
//triste.hablar()
const nose = new Chancho();
//nose.hablar()
