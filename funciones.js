console.log("hola");
function saludo(){ 
    console.log("¿que tal?")
}
saludo();

function suma () {
    var numero1 =2;
    var numero2= 4;
    console.log (numero1+ numero2);

}
suma();

function sumita () {
    var numerito1 =10;
    var numerito2= 22;
    return numerito1 + numerito2;
}
console.log (sumita ());

sumita();

//function con parametros

function sumar(num1, num2){
    return num1+num2;
}
//console.log(sumar(20,10));

function main (){
    var numero1=parseFloat(prompt("ingrese el primer número"));
    var numero2= parseFloat (prompt("Ingrese el segundo numero"));
        console.log (sumar (numero1, numero2));
}

