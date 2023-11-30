// Calculadora de impuestos y descuentos

let valorUsuario = 0;

while(true){

    valorUsuario = parseFloat(prompt("Ingrese el valor a calcular"))

    if (valorUsuario <= 0 || isNaN(valorUsuario)){
        alert("Ingrese un valor mayor a 0 o ingrese un numero!")
        continue
    }  
console.log("El valor ingresado es: " + valorUsuario)
break
}

function calcularIva(valorUsuario){ // Calcular impuestos (iva)
    return valorUsuario * 0.21
}

let iva = calcularIva(valorUsuario)
console.log("El IVA del valor ingresado es: " + iva)

// Sumar IVA

function sumarIva(valorUsuario){
    return valorUsuario + iva
}

let resultadoSuma = sumarIva(valorUsuario, iva)
console.log("El valor con IVA es: " +resultadoSuma)


// Aplicar descuentos