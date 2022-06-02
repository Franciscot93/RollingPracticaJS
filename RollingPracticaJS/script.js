console.groupCollapsed('let');
let primeraVariable;
primeraVariable = 'esta es la primera';
console.log(primeraVariable);
console.groupEnd();

console.groupCollapsed('cons');
const primeraCons = 'esta es la segunda';
console.log(primeraCons);
console.groupEnd();

console.groupCollapsed('tipos de variables');
let texto ='hola rolling';
console.log(texto);
let numero = 3;
console.log(numero);
let BooleanoVerdadero = true;
console.log(BooleanoVerdadero);
let BooleanoFalso = false;
console.log(BooleanoFalso);
let objeto = {
    nombre: 'Francisco',
    apellido: 'Torres',
    Edad: 29, 
};
console.log(objeto);
console.groupEnd();

console.groupCollapsed('array');
let array =[texto,numero,BooleanoFalso,objeto.Edad];
console.log(array);
console.log(array[1]);
console.groupEnd();
