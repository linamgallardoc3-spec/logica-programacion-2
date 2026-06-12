const prompt = require('prompt-sync')();
let gradosFahrenheit = 0;
let gradoskelvin = 0;
let gradosCelsius = 0;
let validacionDatoIngresado = false
while (validacionDatoIngresado === false ) {
    gradosCelsius = parseInt(prompt("Ingrese la temperatura en grados Celsius:"));
    if(!Number.isNaN(gradosCelsius)){
        validacionDatoIngresado = true;
    }else{
        console.log("Por favor ingrese un valor valido ")
    }
}
gradoskelvin = gradosCelsius + 273.15;
gradosFahrenheit = ((gradosCelsius*9/5)+32).toFixed(2);

console.log(`
        Conversión de temperatura
        Temperatura ingresada: ${gradosCelsius}°C 
        Valor en grados Kelvil ${gradoskelvin}°K
        Valor en grados Fahrenheit ${gradosFahrenheit}°F
    `);
