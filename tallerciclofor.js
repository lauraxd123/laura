console.log("primer punto")

var numero1=parseInt( prompt("ingrese un número del cual quiere que inicie el ciclo"))
var numero2= parseInt (prompt ("ingrese un número del cual quiere que termine el ciclo"))

if (numero1<numero2){
    for(var i=numero1; i<=numero2; i+=1){
        console.log(i);

    } 
}else { 
    for(var i=numero2; i<=numero1; i+=1){
        console.log(i);

    }  
}



console.log("segundo punto")

var multi= parseInt (prompt("Ingresa un numero para mostrar su tabla de multiplicar"))

for (var i=0; i<=10 ; i++){
    console.log (multi + "X"+ i+ "="+ multi* i)
}

console.log ("tercer punto")

var multi= parseInt (prompt("Ingresa un numero para mostrar su tabla de multiplicar"))
var num= parseInt (prompt("Ingrese un numero hasta el cual quiere que vaya su tabla de multiplicacion añañai"))


for (var i=0; i<= num ; i++){
    console.log (multi + "X"+ i+ "="+ multi * i)
}

console.log ("cuarto punto")//

var arreglo1=[]
var numerouno;

for (var i=1; i<=10; i++){
    numerouno= prompt ("Por favor ingrese 10 numeros")
    arreglo1.push (numerouno);
}

var numMayor = arreglo1 [0]

for (var i=0; i<10; i++) {
    if (arreglo1[i ]>numMayor)
    numMayor= arreglo1[i]
    
}
console.log 
("El numero mayor es "+ numMayor)
 


console.log ("punto 5, examen")

var arreglo2= []
var articulo_tienda
var arreglo3=[]
var precio

for (var i=0; i<5; i++){
var articulo_tienda=prompt("Por favor ingrese el nombre del articulo")
arreglo2.push(articulo_tienda)
}

for (var i= 0; i<5; i++){
    var precio=prompt("por favor ingrese el precio del articulo "+arreglo2[i])
    arreglo3.push(precio)
}

console.log( "sexto punto")

var producto=prompt("por favor escriba el nombre de un producto para conocer su precio")
for(var i=0; i<arreglo2.length; i++){
    if(arreglo2[i]== producto){
        console.log("el precio de "+producto+" es "+arreglo3+ [i]);
    }

}