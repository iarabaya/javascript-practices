//const chanchos = require('./importexport');

//console.log(chanchos);
//para usar modulos necesariamente la extension tiene que ser .mjs en node
//o "type" = "modules" en el package.json
import chanchos, { chanchosTristes, otrosChanchos, fn1, fn2 } from './3-importexport.mjs';

console.log(chanchos); //importa el export default
console.log(chanchosTristes);
console.log(otrosChanchos);
fn1()
fn2()