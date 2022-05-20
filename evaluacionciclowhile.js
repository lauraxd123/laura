//Sofia Torres y Laura Medina 

//1

console.log("primer punto")
var ciclo1=0
var numero= parseInt(prompt("por favor ingrese un numero para saber hasta donde son multiplo de 5 y cuales no"))

    while (ciclo1<=numero){ 
    if (ciclo1%5==0){
        console.log (ciclo1+" si es multiplo de 5")}
    else {
        console.log(ciclo1+" no es multiplo de 5")
    }
    ciclo1+=1
}


//2 

console.log ("segundo punto")
var producto=parseInt (prompt("ingrese la cantidad de productos que va a llevar "))
var acu=0
var total=0
while (acu<producto){ 
    var precio =parseFloat(prompt("ingrese el precio del producto a llevar"))
   total+=precio 
  acu+=1
}
console.log ("el total a pagar de todos los productos es "+total)

//3
console.log ("tercer punto")

var valortotal=0;
var ciclo2=0
var respuesta=prompt ("Si usted quiere ingresar un nuevo articulo, ponga si y si no ponga no")

while (respuesta=="si"){
    var precio=parseInt (prompt("Por favor ingrese el costo del articulo"));
    valortotal+= precio 
    ciclo2+=1
    respuesta=prompt ("Si usted quiere ingresar un nuevo  articulo, ponga si y si no ponga no")
}
console.log ("El valor total de los articulos es "+ valortotal)

//4

console.log ("cuarto punto")


var valortotal=0;
var articulos=0
var respuesta="si"

while (respuesta=="si"){
    var precio=parseInt (prompt("Por favor ingrese el costo del articulo"));
    valortotal+= precio 
    articulos+=1
    respuesta=prompt ("Si usted quiere ingresar un nuevo  articulo, ponga si y si no ponga no")
}
    
if(articulos>8 && articulos<15){
   valortotal*0,90
    console.log ("Por su compra de más de 8 articulos tiene un descuento del 10% y el total de su compra es "+valortotal)
    }
if (articulos>15&&articulos<25){
    valortotal*0,85
    console.log ("Por su compra de más de 15 articulos tiene un descuento del 15% y el total de su compra es "+valortotal)

}
if (articulos>25){
    valortotal*0.8
    console.log ("Por su compra de más de 25 articulos tiene un descuento del 20% y el total de su compra es "+valortotal)

}

//5

console.log ("quinto punto")

var acumu= 0
var cantnotas= prompt("¿Cuantas notas quieres digitar?")
var guardnotas= 0
var win= 0
var lose= 0

while (acumu< notas){
    var pregunta =parseFloat (prompt  ("¿Que nota tienes?") )
    guardnotas+= pregunta 
    acumu++
    if (pregunta < 3.5){
        console.log ("Perdiste el año por vago "+acumu)
        lose++

    }else if (pregunta<= 3.5){
        console.log ("No perdiste el año añañai "+ acumu)
        win++
    }
    
}
var totalnotas= guardnotas/notas 
if (totalnotas<3.5){
    console.log ("La cantidad de estudiantes no es suficiente para curso de verano xd")
} else console.log ("Debe abrirse el curso de verano añañai")
console.log ("La cantidad de estudiantes que ganaron fueron "+ win, "Y los reporobados fueron "+ lose)

//Profe mauricio te queremos <3 uwu, xd
