//* taller
//1  
var numciclo= 0;
while (numciclo<5){ 
 console.log(2);   
 numciclo+=1 
 }
//2 
var nciclo =0;
while (nciclo <8) { 
    console.log (nciclo);
    nciclo+=1 
 }
 //3 
 var nnciclo =0;
while (nnciclo <20) { 
    console.log (nnciclo);
    nnciclo+=2
 }
 //4 
var ciclo4="ok"
while (ciclo4 != "ok") { 
    ciclo4= prompt ("ingrese ok para parar");
    console.log ("dijo"+ ciclo4)
     }
    console.log("dijo ok");

//5 
var ciclo5=0;
while(ciclo5 >= 0){ 
    ciclo5=  prompt("ingrese un numero negativo para parar");
    console.log ("el numero es " + ciclo5);
     }
    
//6
var ciclo61
var ciclo62
var resultado6=0;
while(resultado6 <=20 ){ 
    ciclo61=parseInt(prompt("valor1"));
    ciclo62=parseInt(prompt ("valor2"));
    resultado6= ciclo61+ciclo62;
 
console.log ("la suma es" +resultado6);
  }
  //7
  var contraseña= "xd123";
  var intento =prompt("ingrese una contraseña ")
  while (intento!=contraseña) { 
      console.log ("la contraseña es incorrecta");
      intento=prompt("ingrese una contraseña nueva: ")
 }
 console.log ("la contraseña es correcta")

 //8 
 var contraseña= "xd123";
  var intento =prompt("ingrese una contraseña ")
  var numintento =1;
  while ((intento!=contraseña) && numintento<4 ){ 
      console.log ("la contraseña es incorrecta");
      intento=prompt("ingrese una contraseña nueva: ")
      numintento +=1;
 }
 if (numintento>=4){ 
     console.log ("intentos agotados")
      } else { 
 console.log ("la contraseña es correcta")
  }
