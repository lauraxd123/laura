//1
var saludar="si";
 
if(saludar=="si"){
    console.log("Hola, soy un condicional simple");
}

//2
var x=20;
 
if(x<=20){
    console.log("La condición es verdadera");
}

//3

var edad=18;
 
if(edad>=18){	
    console.log("Bienvenido, puede ingresar");
}else{
    console.log("Lo siento, no tiene edad suficiente para entrar aquí");
}

//4

var numero1 = 5;
var numero2 = 8;
 
if(numero1<numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(numero2>0) {
  console.log("numero2 es positivo");
}
if(numero1<0||numero1!=0) {
  console.log("numero1 es negativo o distinto de cero");
}
if(numero1+1!=numero2||numero1+1==numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}


//5, 6, 7, 8 

var numerito = 40;
 
if(numerito<50) {
  console.log("numerito sí es estrictamente menor que 50");
}
var numerito=60
 if (numerito>50&&numerito<80) {
  console.log("numerito sí está entre 50 y 80");
}
var numerito=90 
 if (numerito >80 || numerito>=100) {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}
var numerito=100
 if (numerito==100) {
  console.log("numerito es igual a 100");
}
var numerito=200
if (numerito>100){
    console.log("numerito es estrictamente mayor a 100");
}


//9

var diasiguiente="jueves";
var poli;
if (diasiguiente=="jueves"){
    console.log("mañana le toca poli")
}else{
    console.log("mañana no le toca poli")
}

//10

var num1= 100;
var num2= 2;

if (num2==0) {
console.log ("no se puede dividir debido a que el numero es igual a 0")
}else{
console.log ("la division es "+(num1/num2));
}


//11

var diaSiguiente="lunes";
var comida;
 

 
if(diaSiguiente == "lunes"){
   comida="Arroz con pollo ";
}else if(diaSiguiente == "martes"){
    comida="chuñleta de credo/pollo";
}else if(diaSiguiente == "miercoles"){
    comida="frijoles"
}else if(diasiguiente== "jueves"){
    comida="Sancocho de Pescado";
}else if (diasiguiente == "viernes"){
    comida="Bandeja Paisa";
  }else if (diasiguiente == "sabado"){
    comida="ajiaco";
}else if (diasiguiente == "domingo"){
  comida="sancocho de gallina";
}
console.log ("el plato especial del dia de hoy es: " +comida )



//12


var caracter= a;

if (caracter=="a"||caracter=="e"||caracter=="i"||caracter=="o"||caracter=="u"){
console.log ("el tipo de caracter ingresado es una vocal")
 } else if (caracter== 0 || caracter == 1 ||caracter==2 || caracter == 3 || caracter ==4 || caracter==5||
  caracter==6 || caracter==7 || caracter ==8 ||caracter==9){
    console.log ("el tipo de caracter ingresado es un número")
 }else{
   console.log ("el tipo de caracter ingresado es una consonante")
 } 
 


















