console.log("EJERCICIO 1");
let angulo1 = 72;
let angulo2 = 36;
let angulo3 = 72;
let result = angulo1 + angulo2 + angulo3;

console.log("suma de los angulos =", result) ;

if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90) {
    console.log( "Triangulo acutangulo");

} else if (angulo1 > 90 && angulo2 < 90 && angulo3 < 90) {
    console.log("triangulo obstusángulo");
  
}else {
    console.log("Rectangulo");
}

console.log("");
/************************************************* EJERCICIO 2 **************************************************/  
console.log("EJERCICIO 2");
let nota  = 90 ;
if (0 < nota && nota <= 52) {
    console.log("suspendido");

} else if (60 <= nota && nota <= 79){
    console.log("Aprobado");

} else if (80 <= nota && nota <= 89){
    console.log("Notable");

} else if (90 <= nota && nota <= 100){
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
    case "es" :
        console.log("Hola Mundo");
        break;
    case "fr" :
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
let nationality = "españa" ;
let age = 15;

console.log("nombre:", name1 );
if ( nationality == "españa"  && age >= 21 ) {
    console.log("Puede votar");
}else{
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

let word= "pampano";
console.log(word);

let separarString = word.split(""); 
let invertirString = separarString.reverse();
let unirString= invertirString.join(""); 
console.log(unirString);

console.log("");
/* ******************************************* EJERCICIO 8 ****************************************************/
console.log("EJERCICO 8");

console.log("");
/********************************************** EJERCICIO 9 ******************************************************/ 
console.log("EJERCICIO 9");

let str = prompt("");
console.log(str);

let primeraLetra = str[0].toLowerCase();
let restoDelSaludo = str.slice(1,(str.length -1)) ;
let ultimaLetra = str[(str.length -1)].toUpperCase();

frasecompleta = primeraLetra + restoDelSaludo + ultimaLetra ;
console.log(frasecompleta);

/* **************************************************** EJERCICIO 10 ************************************************/
console.log("EJERCICIO 10");
                
	// Get our input reference.
	let emailField = document.getElementById("user-email");
	
	// Define our regular expression.
	let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern.
	if( validEmail.test(emailField.value) ){
		console.log( 'Email is valid, continue with form submission');
	}else{
		console.log('Email is invalid, skip form submission');
	}

 