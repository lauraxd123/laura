console.log("Hola mundo");//imprimir por consola 
//comentario en linea.
/*comentario
en
varias
lineas
o
multilinea 
*/ 
//variables
/*son espacios de memoria  que almacenan datos o información
existen varios tipos de variable en js, pero generalmente se utiliza los siguientes:
string: almacena cadenas de texto. Se deba declarar o asignar el valor entre comillas 
int: almacena números enteros
double: almacena números reales 
boolean: almacena valores de verdad (true, false)
*/
/*declarar variables 
declarar una variable es crearla, decirle al lenguaje como se llama la variable e indicarle
que ya existe.
para declarar una variable se puede utilizar ya sea la palabra reservada var o let 
*/ 
var nombre;
console.log(nombre); 
/*inicializar variables 
para iniciar variables es necesario asignar un valor cuando se crea una variable
*/
var apellido = "Medina";
console.log (apellido); 
/*asignar un valor:
asignar un valor se hace mediante el signo igual =, se debe hacer sobre una variable que ya fue
declarada 
*/
nombre= "Laura";console.log(nombre+" "+apellido);
//desde otra variable 
var edad= 16;
var edadestudiante = edad; 
//desde el teclado
var gradoestudiante= prompt("ingrese el grado")
console.log ("el grado es:" + gradoestudiante);
/*constantes:
son valores que una vez inicializados no pueden cambiar lo que almacenan. se crean con la palabra reservada const, el nombre de las constantes se escribe todo en mayusculas para diferenciarlo de las variables
*/
const PI= 3.1416;
//PI= 5;
//imprimir por consola
//simple
console.log ("mensaje");
console.log (nombre);
//concatenado
console.log("la edad es"+edad+"años");
//operadores
//suma 

//residuo 
var residuo; 
residuo= 12%2; //0 
console.log (residuo)
//contadores
//incremento (+)
var incre= 1;
console.log(incre);
incre= incre+1;
console.log(incre); 
incre+=1;
console.log(incre);
incre++;
console.log(incre);
//decremento
var decre= 1;
console.log(decre);
decre= decre-1;
console.log(decre); 
decre-=1;
console.log(decre);
decre--;
console.log(decre);
//cadenas o texto
//.length
console.log (nomCompleto.length);
Andres
012345
console.log (nombre[0]);//para encontrar el caracter en la ultima posicion de una cadena o un vector se debe buscar la longitud -1(.length -1)
console.log (nombre[nombre.length-1]);
