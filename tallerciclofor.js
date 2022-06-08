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

console.log ("cuarto punto")

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
console.log ("El numero mayor es "+ numMayor)
 