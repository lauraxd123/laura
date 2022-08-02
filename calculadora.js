function suma (n1,n2){
    var resultado = n1+ n2 ;
    var mensaje=" la suma entre "+n1+" y "+n2+" es igual a "+resultado;
    // return mensaje
    return resultado

}function resta (n1,n2){
    var resultado = n1- n2;
    var mensaje="el total de restar "+n1+" y "+n2+" es igual a "+resultado;
    // return mensaje
    return resultado

}function multiplicar (n1,n2){
    var resultado = n1* n2;
    var mensaje="el total de multiplicar "+n1+" y "+n2+" es igual a "+resultado;
    // return mensaje
    return resultado
}
function dividir(n1,n2){
    var resultado = n1/ n2;
    var mensaje="el total de dividir "+n1+" y "+n2+" es igual a "+resultado;
    // return mensaje
    return resultado
}
function potencia (n1,n2){
    var resultado = n1** n2;
    var mensaje="el total de potenciar "+n1+" y "+n2+" es igual a "+resultado;
    // return mensaje
    return resultado
} 







function main_calculadora(){
    var menu =prompt ("¿que operación desea hacer?(dijite el número) \n 1. suma\n 2. resta \n 3. multiplicación\n 4. división\n 5. potencia \n 6. Doble de la suma \n 7. Mitad de potencia \n 8. Producto más 3")
    var numero1=parseFloat(prompt("ingrese el primer valor:"));
    var numero2= parseFloat (prompt("Ingrese el segundo valor:"));
    if (menu==1){
       console.log(  suma(numero1,numero2));
    }else  if (menu==2){
       console.log (resta(numero1,numero2));
    }else  if (menu==3){
        console.log (multiplicar(numero1,numero2));
    }else  if (menu==4){
       console.log (dividir(numero1,numero2));
    }else  if (menu==5){
        console.log (potencia(numero1,numero2));
    }  else if (menu==6){
        var sumanumeros =suma(numero1,numero2)
        console.log (multiplicacion(sumanumeros,2));
    } else if (menu==7){
        var potencianumeros= potencia(numero1,numero2);
        console.log( division (potencianumeros, 2));
    }
    else if (menu==8){
        var productonumeros = multiplicar (numero1, numero2);
        console.log(suma (productonumeros, 3))
        
    }
}
