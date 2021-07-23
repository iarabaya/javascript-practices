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
let {a, c} = original;
sinB = {a,c};
console.log(sinB);

//- valorDeC: Obtener el valor de la clave "c". (¡No puede hacer "valorDeC = original.c"!)
({c} = original);
valorDeC = {c};
console.log(valorDeC);