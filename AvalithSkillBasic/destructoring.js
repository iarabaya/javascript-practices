const original = {
    a: 1,
    b: 2,
    c: 3,
};
// -------
let sinB = null;
let valorDeC = null;

//   Utilizando SOLAMENTE destructoring, obtener los siguientes resultados:
   
// - sinB: Una copia del objeto original sin la clave "b"
sinB = {...original }
console.log(sinB);

//- valorDeC: Obtener el valor de la clave "c". (¡No puede hacer "valorDeC = original.c"!)
valorDeC = {...original}
console.log(valorDeC);