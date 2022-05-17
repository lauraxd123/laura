console.log ("Laura Medina, Mariana Peñaranda y Sofia Torres")
//punto1 
console.log ("primer punto")
var ciclo1= 1;
while (ciclo1<=7){ 
 console.log("lleva "+ ciclo1, "repeticiones");   
 ciclo1+=1  }
 //punto2
 
 console.log ("segundo punto")

 var ciclo2 =0;
 while (ciclo2 <=30) { 
     console.log ("el numero "+ciclo2 ,"es multiplo de 3");
     ciclo2+=3  }

 //punto3

console.log ("tercer punto")

var ciclo3 =0;

while (ciclo3 <=50) { 
    console.log (ciclo3+ " es un numero par ");
    ciclo3+=2  }

//punto4
console.log ("cuarto punto")

var ciclo41=1;
var ciclo42 
ciclo42 =prompt ("ingrese un numero para saber hasta donde van los impares")
while (ciclo41<=ciclo42){ 
    console.log (ciclo41+" es un numero impar")
 ciclo41+=2
 }

 //punto5

 console.log ("quinto punto")

var ciclo5


 ciclo5 =prompt ("ingrese un numero cualquiera para saber si es par") 
 while ((ciclo5 %2) == 0){ 
 console.log (ciclo5 + " es un numero par")
 ciclo5 =prompt ("ingrese un numero impar para parar") 
}
 
//punto6

console.log ("sexto punto")

var ciclo6=1
var acu=0

var estudiantes=parseInt(prompt("ingrese la cantidad de estudiantes de su grupo para hacer un acumulativo de sus edades"));

while(ciclo6<=estudiantes){ 
    var edad=parseInt(prompt("ingrese la edad de cada estudiante xd"));
    acu+=edad
    ciclo6+=1 
     }
     console.log ("el acumulado de las edades es " + acu )

//punto7

console.log ("septimo punto")

var respuesta=(prompt("la rifa es sobre numeros del 1 a el 10, por favor ingrese el numero que cree que es correcto"));
var numintentos=0
while(respuesta!=7){ 
    respuesta=(prompt("sigue intentando"));
    
     numintentos+=1
  
}
console.log ("felicidades ha ganado la rifa, el numero de intentos fue " +numintentos )

//punto8

console.log ("octavo punto")
var ciclo8= 1
var acucu=0
var nombreest=(prompt("hola buenisimas tardes uwu por favor ingrese el nombre de un estudiante"))
var cannotas =(prompt("ahora porfavor ingrese la cantidad de notas que desea sacar su promedio uwu "));

while (ciclo8<=cannotas){ 
    var notas=parseInt(prompt("por favor ingrese las notas"));
    acucu+=notas
    ciclo8+=1
}
acucu/=cannotas
if (acucu>=3.5) { 
console.log ("el estudiante "+nombreest," gano la materia, con una nota final de " +acucu )
}
 else if(acucu < 3.50) { 
    console.log ("el estudiante "+nombreest," perdio la materia, con una nota final de " +acucu )
 }

 //punto 9

 console.log ("noveno punto")
var ciclo9= 1
var cantidadest= prompt ("Ingrese la cantidad de estudiantes para calcular su nota")
while (ciclo9<=cantidadest){ 

    var acucu=0
    var nombreest=(prompt("hola buenisimas tardes uwu por favor ingrese el nombre de un estudiante"))
    var cannotas =(prompt("ahora porfavor ingrese la cantidad de notas que desea sacar su promedio uwu "));
    
    while (ciclo9<=cannotas){ 
        var notas=parseInt(prompt("por favor ingrese las notas"));
        acucu+=notas
        ciclo9+=1
    }
    acucu/=cannotas
    if (acucu>=3.5) { 
    console.log ("el estudiante "+nombreest," gano la materia, con una nota final de " +acucu )
    }
     else if(acucu < 3.50) { 
        console.log ("el estudiante "+nombreest," perdio la materia, con una nota final de " +acucu )
     }
    ciclo9+=1
}



