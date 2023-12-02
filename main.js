// Calculadora de impuestos y descuentos

let valorUsuario = 0

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
console.log("El valor con IVA es: " +resultadoSuma.toFixed(2))


// Aplicar descuentos

let menu = prompt("Seleccione un descuento en efectivo a aplicar: 10%, 20%, 45% o cualquier tecla si no aplica descuento ")
let descuento = 0;

switch(menu){
    case "10":
        descuento = resultadoSuma * 0.1
        break

    case "20":
        descuento = resultadoSuma * 0.2
        break

    case "45":
        descuento = resultadoSuma * 0.45
        break
    default:
            console.log("No se aplican descuentos al valor ingresado")
}

let valorConDescuento = resultadoSuma - descuento
console.log("Valor con descuento aplicado: " + valorConDescuento.toFixed(2))
alert("Gracias por utilizar este servicio!")
console.log("Vuelvas prontos")
