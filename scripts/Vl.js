/* /* /* /***************************  como asignar las variables y tipos**********************/
/* let tipostring = "hola";
let tipoNumber = 886;
let tipoBoolean = true;
let tipoUndefined;
let tipoNull = null;
console.log("tipostring:", tipostring, "tipoNumber:", tipoNumber, "tipoUndefined:", tipoUndefined, "tipoNull:", tipoNull); */

/************************** saber el tipo de variable ************************/
/* console.log(typeof tipostring);
console.log(typeof tipoNumber);
console.log(typeof tipoBoolean);
console.log(typeof tipoUndefined);
console.log(typeof tipoNull); */

/**************************** en algunas consolas name atiguamente era un nombre restringido************************************/
/* let name;
let age;
name = "alfredo";
age = "36 años creo";
console.log(name, age,); */

/************************************ Cambiamos el valor de la variable *****************************************/
/* let city = "madrid";
city = "merida";
console.log(city); */

/**************************************** tambien se puede usar operador matematico al string (solo suma) *****************************************/
/* let name1 = "dani" + "el";
console.log(name1,);
console.log(""); */

/**************************************** variables ************************************************************/
/* let name2 = "sebastian";
let age2 = 25;
let city2 = "madrid";
let isMarried = false
let year = 2022;
console.log("name2:", name2, typeof name2);
console.log("age2:", age2, typeof age2);
console.log("city2:", city2, typeof city2);
console.log("is Married:", isMarried, typeof isMarried);
console.log("year:", year, typeof year);
console.log(""); */

/**************************************** Operadores logicos (mayor, menor, igual, estricto igual, estricto desigual)******************************************/
/* let a = 4;
let b = 3;
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a === 4);
console.log(a == 4);
console.log(a !== 4);
console.log(a != "4");
console.log(a === "4"); */

/******************************************** operadores logicos ****************************************************************/
/* let c = 4;
let d = 6;
console.log(c < d);
console.log(c == 4);
console.log(c != 5);
console.log(c <= d);

console.log(c > d);
console.log(c >= d);
console.log(c === d);
console.log(""); */

/***************************************** operdores ************************************************/
/* d = 3;
let e = 10;
let f = 12;

console.log(4 > 3 && 10 < 12, true);
console.log(c > d && e > f, false);
console.log(4 > 3 || 10 < 12, true);
console.log(c > d || e > f, true);
console.log(!(c > d), false);
console.log(!false, true);
console.log(""); */

/*************  cuadrados **************/
/* let side = 4;
let squareArea = side ** 2;
console.log("soy un capullo a la:", squareArea); */

/*******************************************  Objeto Matematico ********************************************/
/* Math.pow(2, 4);
console.log(Math.pow(2, 4));
console.log(""); */

/* ***************************************** Objeto Matematico 2 ************************************************/
/* Math.min(5, 3, 6, 4, 2, 9, 8);
console.log("el numero min:", Math.min(5, 3, 6, 4, 2, 9, 8));
console.log("");
Math.max(5, 3, 6, 4, 2, 9, 8);
console.log("el numero max:", Math.max(5, 3, 6, 4, 2, 9, 8));
console.log(""); */

/* ***************************************************  ****************************************************************/


/* ************************************************* Loops for *****************************************/
/* console.log("ejercicio 1");
for (let i = 0; i < 11; i++) {
    console.log("numero:", i);
}
console.log("");

console.log("ejercicio 2");
for (let i = 10; i > -1 ; i--) {
    console.log("number:", i);
}
console.log(""); */


/* console.log("ejercicio 3");

let number = 1;
let multiplicador = 1;
    for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
         let resultado = number * multiplicador;
        console.log(number + "x" + multiplicador + "=" + resultado);
       
    } */
/******************************************* Loops While ************************************************/
/* let i = 10 ;
while (i > -2) {
    if (i % 2 !== 0 ) {
        console.log(" number:", i);
    }
    i--
}
console.log("");  */
/* ********************************************Loops do while *************************************/
/* let num= 20;
do{
    console.log("num:",num);

}while (num > 20) */

/* ******************************************** Arrays  ********************************************/
/* console.log("");

let vacioArray = new Array();
let llenoArray = new Array("madrid", 15, "Diciembre", 2022, true);

let vacio2Array = new Array();
vacio2Array.unshift("hola mundo","como estas?" );
console.log(vacio2Array);

vacio2Array.push("bien y tu?", "genial!!");
console.log(vacio2Array);

vacio2Array.pop();
console.log(vacio2Array);

vacio2Array.shift();
console.log(vacio2Array);

let names = new Array("Carlos", "Maria", "Isidro", "Elizando", "Molina");
cambio = names.slice(1, 3);
console.log(cambio);

names.splice(3, 1, `Parma`);
console.log(names);

console.log(names.join(" "));

let sentencia = "el perro de san roque no tiene rabo";

let newArray = new Array(sentencia);
console.log(newArray);

let a = sentencia.split(" ");
console.log(a);

let b = sentencia.split("")
console.log(b); */

/* ************************************************ Funciones ***************************************************** */
/* function hola(b,c="kkkk") {
    let a = "capullo"
    console.log("hola mundoioooooo alfredo",);
    /* return "sebas mamon" 
    console.log(a);
} 
/* let kaka = "undefined";
kaka? console.log("true") : console.log("false");; */

/* console.log(hola("lll")); */

function ejercicio1() {
    console.log("Hello World");
}
ejercicio1 ();
console.log("");

function ejercicio2() {
    let side = 4;
    console.log("numero:",side);
    let squareArea = side ** 2;
    console.log("Numero al cuadrado:", squareArea);    
}
ejercicio2();
console.log("");

let name1= prompt("");
function ejercicio3(name) {
    console.log("Hi!!,", name);
}
ejercicio3(name1);

/* ******************************************************* Objetos ************************************************************* */
/* let obj = {
    A: "esto",
    b: 324234,
    2: "kñlk",
    a: "pqpq",
    c: [123,9238,23423],
    d: true,
    borra() {
        delete obj.c // ==== this.c
    }
}

obj.e = "koca";
obj.e = "jjjjj";
obj.c.push(hola) */
/* delete obj.c; */

/* console.log(obj);
console.log(Object.values(obj)); */

/* const user = {
	name: "John",
	lastname: "Doe",
	age: 24,
	isMarried: false
}
/* sacamos las keys y las convertimos a un array 
const keys111 = Object.keys(user);
console.log(keys111);

for (let i = 0; i < keys111.length; i++) {
	console.log(keys111[i],":", user[keys111[i]]);
}

 */

/* function name(params) {
    
}
 */
/* const www = () => { let a = "hola mundo"; return a }

console.log(www());

const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(a => a * 2);
console.log(doubles);  // [2, 4, 6, 8, 10] */


/* const numbers1 = [1, 2, 3, 4, 5];
const doubles1 = numbers1.forEach(num => console.log(num));   */


/* const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4] */

/* const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, element) => accumulator += (element * element) );
console.log(sum);  // [15] */

/* const strings = [ 'elephant', 'dog', 'cat', 'bee', "bea", 'ant' ];
const orderedStrings = strings.sort();
console.log(orderedStrings);  // [ 'ant', 'bee', 'cat', 'dog', 'elephant' ] */

/* let numbers = [5, 8, 2, -4, 1];
const mierda = numbers.sort();
const ascendingList = numbers.sort((a, b) => a - b);
const descendingList = numbers.sort((a, b) => b - a);

console.log(mierda);
console.log(ascendingList);   // [1, 2, 4, 5, 8]
console.log(descendingList);  // [8, 5, 4, 2, 1] */

/* const cat = {
	name: "Patty",
	legs: 4
}

console.log(Object.hasOwn(cat, "legs")); // true
console.log(Object.hasOwn(cat, "foods")); // false */


/* const cat = {
	name: "Patty",
	legs: 4
}

console.log(Object.entries(cat)); // [["name", "Patty"], ["legs", 4]] */

/* ******************************************************* Objetos ejercicios ************************************************************* */



