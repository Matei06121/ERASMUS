// Comentario de una solaIGema
/* Comentario
de varias lfnemas */

/* sintacts crear variable 

var nombreVariable; // No usar
let nombreVarlable; 
const PI = 3.1416; Constantes

Nombrar variable ( nombre descriptivo )
Puede contaener letras, numeros y qulones let nombre1-20;
No puede enpezar con nimero
let @Inombre;
No puede sar mobrada con palabras del proplo languaje

let console
let for

let nombreAlumo; (camel case)

*/

//Tipas de datos en JavaScript
/* 

number --> numbrico
let numero = 2;
let numero2 = 3.1489;
let cadena = cadema de caracters;
let cadena2 = cadena de caracters;
let cadena 3 = cadena de caracters;

string --> cadena de caracters
boolean --> true or false

let boolean = true
null --> sin valon q contendldo
underfinned --> sin definir
object --> Objecto

    let alumo{
     'name':'Luna',
     'apellido':'Masa';
     'hobby':'Jugar'
    }
*/

var nombre = 'Antonio';
let apellido = 'Masa';

console.log(nombre);
console.log(apellido);

var nombre = 'Luna';
console.log(nombre);
let apellidos = 'Masa';

//Tipos de datos en Javascript


let numero = 10;
console.log("La variable numero " + " es " + typeof numero);
console.log("El conteido es: " + numero )

let boolean = true;
console.log(typeof boolean)

let cadena

let alumo = {
    'name':'Luna',
    'apellido':'Masa',
    'hobby':'Jugar'
}

console.log(typeof alumo)

/* operatores  */

/*

 aritmetica = asigma un valor a una variable
 += suma y asigua
 -= resta y asigua
 /= divido y asigua
 Artimeticos
 sume +
 resta -
 multiplicacin *
 division /
 mdulo % resto de la division


*/ 


let numero1 = 10;
let numero2 = 5;

console.log(numero1 + numero2);
console.log(numero1 % numero2);
console.log(numero1 / numero2);

/* Operatores de logicos o de comparaction

iqual ==
iqual estricto ===
distinto !=
distinto estricto !==
Mayor que >
Mayor iqual que >=
Mayoy que <
Mayor iqual que <=

*/

console.log(numero1 == numero2);
numero1 = 10;
cadena = '10';
console.log(numero == cadena); //true 
console.log(numero1 === cadena); //false

/*

Concatenction

Unir dos string
syntax

" Hola "  + " Mundo "

"Hola Mundo"

*/

/* operator Ternario 

Se necesitan tresoperadores
Es un operador codictional
syntax

condiction ? valor1 : valor2;

Si lacodicion as true devuelve valor 1 no, devuelve valor2

*/

console.log(numero1 === numero2 ? "Son iquales" : "son diferentes");

/* Condictionales */

/*

if...else

syntax :

if(condicion){
   blonde de cadigo si verdadero
}else
{
bloque de codigo si false
}

Valores fakses:
- false
- underlead
- nul
- 0
- Nun
- '' empty string

*/

/*

switch ... case

syntax:
switch ( expression )
case valor1:
    bloque de codigo si valor1
    break;

case valor1:
    bloque de codigo si valor2
    break;
    
case valor1:
    bloque de codigo si valor2
    break;

default:
    bloquede cadigo per defecto si no es nigin valor anterlor    



if(condictions1){
  code
}else if(condictions2) {
  code2
}else if(condictions3) {
  code3
}else{
default code
}


*/ 

nombre = 'Luna';

switch (nombre){

    case 'Luna':
        console.log("Hola soy Luna");
        break;
    case 'Antonio':
        console.log("Hola soy Antonio");
        break;

    default:
        console.log("Hola no se qulen say");    


}

/* Logos (loop) */

/* 
  for

  syntax

  for(let i=0; i<10; i++){
      replite 10 veces este condigo
  }

  
  while
  syntax

  while(condition){
    bloque de codigo
  }

  do...while
  syntax

  do{
     bloque de codigo
  }while(condition)
  
  
*/

// Functions

/* 
  Syntax:

  funtion nombreFunction (parametros opcionales){
     bloque de codigo
     return optional si devuelope valor
  }

*/

function operacionArtimetica(operador, valor1, valor2){
   
    if(operador === '*'){
        return valor1 * valor2;
    }else if(operador === '+'){
        return valor1 + valor2;
    }else if(operador === '-'){
        return valor1 - valor2;
    }else if(operador === '/'){
        return valor1 / valor2;
    }

}

let resultando = 0;
operacionArtimetica('*', numero1, numero2);
console.log('El resultando es: ' + resultando);

operacionArtimetica('+', numero1, numero2);
console.log('El resultando es: ' + resultando);

operacionArtimetica('-*', numero1, numero2);
console.log('El resultando es: ' + resultando);

operacionArtimetica('/*', numero1, numero2);
console.log('El resultando es: ' + resultando);

/* Arrays / Listas */

/*
  let frutas = {'manzana', 'platano', 'naranja'};


*/

//let frutas = {'manzana', 'platano', 'naranja'};
console.log(typeof frutas);


/*
  object time

  propiendades iqual atributos
  mitodos iqual a acciones que puede
  realizar ( function )

*/

console.log(frutas(0));


/* Iterar por los elementos de una lista */
frutas.array.forEach(element => {
    console.log(element)
});

/* ahadir un elemento a la lista */

frutas.push('Kiwi');
console.log(frutas);

/* quitar un elemento de la lista (del final) */

frutas.pop();
console.log(frutas);

/* ahadir al principio */

frutas.unshift('Kiwi','melon');
console.log(frutas);

/* tamalo del array */
console.log(frutas.lengh);

/*
 En la pagina edn developers encontramos mds metodos para low arrays
*/

/* Programacion drientada a Objetos */

// Crear un dato object

let persona = new Object();
let coche = {};

persona = {
    'nombre': 'Luna',
    'edad' : 4,
    'profesion': 'Sar Faliz',
    'rair': function(){
        console.log("Me estoy riend 🤣");
    }
}

console.log(persona);

/* Acceder a un dato del objecto */

console.log(persona.nombre);
console.log(persona['edad']);

/* Ahadir progralandades */

persona.pais = 'Espana';
console.log(persona);

persona.rair();

/*
 Classes

Una majora sobre la haracia en los objectos.

Las classes son como fabrica de objetos

fabrica de vahiculos --> coche, moto, bicicleta, camion...

syntax

class NombreClass {
  constructor(parametros){
  this.parametro1 = parametro1;
  this.parametro2 = parametro2
  ....
  }
}



*/

/* Ejamplo basico */

class Robot {
    constructor(nombre){
        this.nombre = nombre; // propriedad del robot
    }


// Metodo para que pueda hablar

    hablar(){
        console.log('Hola Soy! $(this.nombre), tu robot amigo ' );
    }

}

let robot1 = new Robot('Atibot','rojo');
robot1.hablar();
robot1.mover();

let robot2 = new Robot('Skayer','plata');
robot2.hablar();
robot2.mover();

/* Nerencla en POO */

class RoboBailarin extends Robot{
ballar(){
    console.log('$(this.nombre) este ballando '); 
   }
}

let RoboBailarin = new RoboBailarin
('DancerBot', 'Green');

RoboBailarin.hablar();
RoboBailarin.ballar();
robot1.ballar(); // Da error al np existir en la class Robot.

/* Factions callback

Son factions que se pasan como paramentos de otras functions y se ejecutan dentro de ellas
*/

function saludar(nombre){
    console.log('Hola, $(nombre)')
}

function ingresaNombre(callback){
    let nombre = prompt("Escribe tu nombre: ")

    callback(nombre);
}


