var x=5;
console.log(x>7);//false
console.log(x<7);//true
console.log(x=="5");//true     
console.log(x==="5");//false
console.log(x>=1);//true
console.log(x!=10);//true

console.log(2 < 12); //true
console.log(2 < "12"); //true	
console.log(2 < "John");	//false
console.log(2 > "John"); //false
console.log(2 == "John"); //false
console.log("John" == "John"); //true
console.log("john" == "John"); //false
console.log("2" < "12");	//false
console.log("2" > "12");	//true
console.log("2" == "12");//false



console.log("ejercicios");
x=12;
y=7;
x<15 && y!=7 //false
y>8 && x<20//falso
x==12 && x<18//true
//("lunes" == "Lunes") || (y!=9)//true
!(x==10) && y>=6//true
x>6 && y==12 && 2>3//false+

((x/2)<=(2*3) || (x*2)>23 ) && (15==="15" && y!=="7")//false

var tocaEduFisica= "si";
var uniforme = "diario";
 
if(tocaEduFisica == "no"){
    uniforme = "edu. física";
}

console.log("Mañana debe vestir el uniforme de " + uniforme);



var diaSiguiente= "lunes";
var uniforme = "diario";
 
if(diaSiguiente == "martes" || diaSiguiente == "jueves"){
    uniforme = "edu. física";
}
 
console.log("Mañana debe vestir el uniforme de " + uniforme)




var hayGaseosa = "no";
var bebida;
 
if(hayGaseosa == "si"){
    bebida = "gaseosa";
}else{
    bebida = "refresco de fruta"
}
 
console.log("la bebida que acompaña su pedido es " + bebida);




var diaSiguiente="jueves";
var cuaderno;
 
var diaSiguiente;
var cuaderno;
 
if(diaSiguiente == "lunes" || diaSiguiente == "martes"){
    cuaderno="Análisis";
}else if(diaSiguiente == "miercoles"){
    cuaderno="Tecnología";
}else if(diaSiguiente == "jueves"){
    cuaderno="Desarrollo"
}else{
    cuaderno="Ninguno";
}
 
console.log("Para la clase de mañana con el profesor Andres debe guardar el cuaderno de" +cuaderno);



var edad=15;
var estatura=1.40;
 
if(edad >= 14){
    if(estatura >= 1.50){
        console.log("Puede entrar al tobogán más grande porque cumple con ambas condiciones")
    }else{
        console.log("No puede entrar al tobogán porque aunque cumple con la edad, no lo hace con la estatura. Lo siento")
    }
}else{
    console.log("No puede entrar al tobogán más grande porque no cumple con la edad. Lo siento")
}



