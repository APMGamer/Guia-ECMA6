// TODA EN ESTA GUIA TIENE QUE SER UTILIZADO EN ECMA6 O SUPERIOR

// podemos definir parametros con valores ya predeterminado 

function newFunction(name = 'andres', age = 20) {
    var name = name;
    var age = age;
    // Podemos concatenar strings de esta forma (son llamados templates)
    console.log(`El nombre es ${name} su edad es ${age} \n`);
}

console.log('Este es el ejemplo sin parametros');
newFunction();
console.log('Este es el ejemplo con parametros');
newFunction('luis', 41);


// ahora podemos ejecutar multilineas en un string
var lorem = `podemos hacer el espacion sin 
comandos diferentes 

gg`
console.log(lorem)

// De-estructuracion de objetos 
let person = {
    'name': 'andres',
    'age': 20,
    'country': 'vnz'
}

let { name, age} = person;
console.log(`Nombre Objeto ${name} Edad ${age}`);

// operador de propagacion
let team1 = ['andres', 'rafael', 'maria'];
let team2 = ['ana', 'ronald', 'virgilio'];

let education = ['Mauricio', ...team1, ...team2];

console.log(education);


// Declaracion de objectos simplificada
let name = 'oscar';
let age = 20;

obj = { name, age };
console.log(obj);

// arrow function
const names = [
    {name:'Oscar', age: 32},
    {name:'Felipe', age: 48}
];

// Con varios parametos
let nameOfList2 = (params1,params2) => {}; 
// Con un parametro
let nameOfList2 = params1 => {}; 

// Inline function 
let nameOfList3 = params1 => age * age; 

// ejemplo de un solo parametro
let nameOfList = names.map( item => console.log(item.name) );

// Promise en JS

const helloPromise = () => {
    return new Promise( (resolve, reject) => { 
        if (false) {
            resolve('Hijole como que si se va a poder');
        }else{
            reject('Hijole como que no se va a poder');
        }
    });
};

helloPromise()
    .then(response => console.log(response)) // then es para que devuelva un resultado en el caso de que todo haya sido correcto
    .then(() => {console.log('holaaaaa')}) // tambien se pueden declarar varios then en un mismo llamado en promesa
    .catch(error => console.log(error)); // catch es para capturar el error que pueda ocurrir en el proceso

// clases en js 
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;

    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    } 
}

const calc = new calculator();
console.log(calc.sum(10,25));

// modules 
import hello from './modules';
hello();

// generadores

function* helloWorld() {
    if (true) {
        yield 'Hello, '
    }
    if (true) {
        yield 'world'
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

