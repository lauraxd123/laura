/* cualquier tipo de dato y cualquier cantidad, es decir, string, int, double, array, objetos, entre otros.
los arreglos o arrays tienen operaciones como insertar, eliminar, modificar y consultar
la declaracion de un arreglo se hace con corchetes [] //alt 91 y los elementos dentro de el se separa con comas. Tambien se crea o se declara var o let seguidas del nombre de la red 
*/
var miPrimerArreglo=  ["Jose", 14];
console.log (miPrimerArreglo);
// arreglo de arreglos 
var notaEst =[["sofia",4.5],["Mari",4.2]];
console.log (notaEst);
//consultar según la posición
// recordar que las posiciones de un  vector o arreglo comienzan desde 0 
console.log (miPrimerArreglo[0]);//jose 
//consultar posiciones de arreglos dentro de arreglos
//primero se accede a la posicion del arreglo mas grande y luego a las posiciones de los arreglos internos
console.log(notaEst[0][0]);
console.log (notaEst[0][1]);
console.log (notaEst[1][0]);
//modificar elementos
//se debe indicar la posicion del elemento y luego se le asigna el nuevo valor
miPrimerArreglo [0]="mario";
console.log (miPrimerArreglo);
notaEst [1][0]="laura";
console.log(notaEst[1]);
miPrimerArreglo [1]=18;
console.log(miPrimerArreglo[1]);
notaEst [0][1]=4.8;
console.log (notaEst[0][1]);
//agregar elemento al arreglo
miPrimerArreglo.push ("10B");
console.log (miPrimerArreglo);

miPrimerArreglo.unshift ("Gomez");
console.log (miPrimerArreglo);

//eliminar elemento del arreglo
miPrimerArreglo.pop();
console.log (miPrimerArreglo);
miPrimerArreglo.shift();
console.log (miPrimerArreglo);

/*
1. crear un arreglo que contenga los elementos
   -analisis
   -tecnologia
   -desarrollo
2.cambiar desarollo por BBDD
3. convertir el arreglo para que quede 
    -introducción
    -analisis
    -tecnologia
nota: para cada punto, imprima el arreglo completo
*/ 
var PrimerArreglo=["Analisis","tecnologia","desarrollo"];
console.log (PrimerArreglo);
console.log (PrimerArreglo[0][1]);
console.log (PrimerArreglo[0][2]);
console.log (PrimerArreglo[0][3]);

miPrimerArreglo [3]="BBDD";
console.log (PrimerArreglo [3]);
PrimerArreglo.pop("BBDD");
console.log (PrimerArreglo);






