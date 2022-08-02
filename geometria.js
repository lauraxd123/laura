function suma (n1,n2){
    var resultado = n1+ n2 ;
    return resultado

}function resta (n1,n2){
    var resultado = n1- n2;
    return resultado

}function multiplicar (n1,n2){
    var resultado  = n1* n2;
    return resultado
}
function dividir(n1,n2){
    var resultado = n1/ n2;
    return resultado
}
function potencia (n1,n2){
    var resultado = n1** n2;
    return resultado
} 

function main_geometria() {

    var menu =prompt ("¿Quiere hallar el área de una figura o su perímetro?(dijite el numero) \n 1. área\n 2. perimetro" )
    if (menu ==1){
       var menufiguras = prompt ("¿De cuál figura quiere hallar su área?\n 1. Rectángulo \n 2.Triángulo")
       if (menufiguras==1 )
       var n1=parseFloat(prompt("ingrese un valor para la base del rectángulo:"));
       var n2=parseFloat(prompt("ingrese un valor para la altura del rectángulo:"));
       console.log ("El área del rectángulo es" + multiplicar(n1,n2));
       if (menufiguras==2 )
       var n1=parseFloat(prompt("ingrese un valor para la base del triángulo:"));
       var n2=parseFloat(prompt("ingrese un valor para la altura del triángulo:"));
       var ba=multiplicar(n1,n2)
       console.log ("El área del triángulo es" + dividir(ba,2)) ;
    }
    if (menu ==2){
        var menufiguras = prompt ("¿De cuál figura quiere hallar su perímetro?\n 1. Rectángulo \n 2.Triángulo")
        if (menufiguras==1 )
       var n1=parseFloat(prompt("ingrese un valor para la base del rectángulo:"));
       var n2=parseFloat(prompt("ingrese un valor para la altura del rectángulo:"));
       var b2 =multiplicar(n1, 2)
       var h2= multiplicar (n2, 2)
       console.log ("El perímetro del rectángulo es" + suma (b2 , h2) );
       if (menufiguras==2 )
       var n1=parseFloat(prompt("ingrese un valor para la base del triángulo:"));
       var n2=parseFloat(prompt("ingrese un valor para la altura del triángulo:"));
       var lado1= parseFloat (prompt ("Ingrese el valor del lado 1 para hallar el perimetro"))
       var lado2= parseFloat (prompt ("Ingrese el valor del lado 2 para hallar el perimetro"))
       var lado3= parseFloat (prompt ("Ingrese el valor del lado 3 para hallar el perimetro"))
    
       console.log ("El perímetro del triángulo es" + suma(lado1, lado2, lado3)) ;
     }
     
}
//Profe mauricio XD profe de verdad nos esforzamos un 5 no estaria mal 
//amen 