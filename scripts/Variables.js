console.log("EJERCICIO 1");
let angulo1 = 72;
let angulo2 = 36;
let angulo3 = 72;
let result = angulo1 + angulo2 + angulo3;

console.log("suma de los angulos =", result);

if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90) {
    console.log("Triangulo acutangulo");

} else if (angulo1 > 90 && angulo2 < 90 && angulo3 < 90) {
    console.log("triangulo obstusángulo");

} else {
    console.log("Rectangulo");
}

console.log("");
/************************************************* EJERCICIO 2 **************************************************/
console.log("EJERCICIO 2");
let nota = 90;
if (0 < nota && nota <= 52) {
    console.log("suspendido");

} else if (60 <= nota && nota <= 79) {
    console.log("Aprobado");

} else if (80 <= nota && nota <= 89) {
    console.log("Notable");

} else if (90 <= nota && nota <= 100) {
    console.log("Sobresaliente");

} else {
    console.log("Formato de nota incorrecto");
}

console.log("");
/* *********************************************** EJERCICIO 3 *****************************************************/
console.log("EJERCICIO 3");
console.log("traducir Hello world en :");
let language = "es";
switch (language) {
    case "es":
        console.log("Hola Mundo");
        break;
    case "fr":
        console.log("Bonjour Tout le Monde");
        break;
    case "en":
        console.log("Hello World");
        break;
    case "de":
        console.log("Hallo Welt");
        break;
    default:
        break;
}

console.log("");
/* ************************************************ EJERCICIO 4 **************************************************/
console.log("EJERCICIO 4");

let name1 = " sofia ";
let nationality = "españa";
let age = 15;

console.log("nombre:", name1);
if (nationality == "españa" && age >= 21) {
    console.log("Puede votar");
} else {
    console.log("No puede votar");
}

console.log("");
/* ********************************************* EJERCIOCIO 5 *****************************************************/
console.log("EJERCICIO 5");


console.log("");
/*********************************************** EJERCICIO 6 *****************************************************/
console.log("EJERCICIO 6");

let palabra1 = "hello word";
frasePegada = palabra1.split(" ").join("");
console.log(frasePegada);

console.log("");
/* ********************************************* EJERCICIO 7 *****************************************************/
console.log("EJERCICIO 7");

let word = "pampano";
console.log(word);

let separarString = word.split("");
let invertirString = separarString.reverse();
let unirString = invertirString.join("");
console.log(unirString);

console.log("");
/* ******************************************* EJERCICIO 8 ****************************************************/
console.log("EJERCICO 8");

console.log("");
/********************************************** EJERCICIO 9 ******************************************************/
/* console.log("EJERCICIO 9");

let str = prompt("");
console.log(str);

let primeraLetra = str[0].toLowerCase();
let restoDelSaludo = str.slice(1, (str.length - 1));
let ultimaLetra = str[(str.length - 1)].toUpperCase();

frasecompleta = primeraLetra + restoDelSaludo + ultimaLetra;
console.log(frasecompleta); */

/* **************************************************** EJERCICIO 10 ************************************************/
console.log("EJERCICIO 10");


console.log("");
/* **************************************************** EJERCICIO 11 ***********************************************/
/* console.log("EJERCICIO 11");

for (let num = 0; num <= 40;) {
    let primo = true;
    for (let e = 0; e < num; e++) {
        if (num % e == 0 && num !== e && e != 1) {
            primo = false;
            break;
        }
    }

    if (num == 1) {
        primo = false;
    }

    if (primo === true) {
        console.log("soy primo:", num);
    } else {
        console.log("no lo soy:", num);
    }
    num++;
}

console.log(""); */
/* *************************************************** EJERCICIO 12 ********************************************* */
console.log("EJERCICIO 12");

console.log("");
/* *************************************************** EJERCICO 13 *******************************************************/
/* console.log("EJERCICIO 13");

for ( i = 0; i <= 100; i +=3 ) {
    console.log("numero: ", i);
}

console.log(""); */
/* ************************************************ EJERCICIO 14 *******************************************************/
console.log("EJERCICIO 14");

/* let j = 0;
let i = 0;

for (i = 0; i <= 2;){
    console.log("indice de bucle externo: ", i);
    for (j = 0; j <= 4; j++){
        console.log("bucle interno: ", j);
    }
 i++
}

console.log(""); */
/* ********************************************** EJERCICIO 15 ***********************************************************/
/* console.log("EJERCICIO 15");

let m = 0;
let s = 0;

for ( m = 0; m <= 2;) {
    for ( s = 0; s < 10; s++){
        console.log( `${m} : ${s}` );
    }
    m++
}

console.log(""); */
/* ****************************************************** EJERCICIO 16 ***************************************************/
console.log("EJERCICIO 16");

let palabraCualquiera = prompt("javaScript");
let letraCualquiera = "S";
console.log("tamaño:", palabraCualquiera.length);
let validateLetter = false;

for (let i = 0; i <= palabraCualquiera.length; i++) {
    if (palabraCualquiera[i] == letraCualquiera.toLocaleLowerCase() || palabraCualquiera[i] == letraCualquiera.toUpperCase()) {
        console.log("S");
        validateLetter = true;
        console.log(palabraCualquiera.slice(0, i));
    }

    for (let j = 0; j <= i; j++) {
        
    }
}

if (!validateLetter) {
    console.log("la palabra no contiene la letra:");
}

