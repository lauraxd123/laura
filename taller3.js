/* Taller 3
Fecha 23/03/2022
Realizado por: Sofia Torres
*/ 

//primer punto
var litrospiscina;
var horas;

//Preguntar cuantos litros tiene la piscina
litrospiscina= prompt ("Por favor ingrese la cantidad de litros con los que se llena su piscina");
horas= (litrospiscina/145);
console.log ("La manguera arroja 145 litros de agua por hora por lo que su piscina se llenara en" + horas);

//segundo punto
var metros;
var milimetros;

metros=prompt ("Por favor ingrese los metros que desea convertir a milimetros");
var milimetros= metros* 1000;
console.log ("la equivalencia en milimetros es"+ milimetros + "mm");

//tercer punto 
var decimetros= milimetros /100;
console.log ("la equivalencia en decimetros es "+decimetros +"dm")

//cuarto punto 
var kilometros= decimetros/10000;
console.log ("la equivalencia en kilimetros es" +kilometros+ "km");

//quinto punto 
var llamadahoras;
var costollamada;

llamadahoras= prompt ("Por favor ingrese la duracion de su llamada en horas");
costollamada= (llamadahoras*60)*120
console.log ("El precio total de su llamada es de"+costollamada)

//sexto punto
var cobroclase;
var cobrototal;




cobroclase= prompt ("Por favor ingrese las horas que enseño clase de musica")
cobrototal= (cobroclase-1)*25000+40000
console.log ("el total a pagar por el alumno es de"+cobrototal+ "pesos")







