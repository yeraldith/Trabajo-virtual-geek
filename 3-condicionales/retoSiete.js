//Ejercicio 7 probar si es año bisiesto
var n = parseInt(prompt("Ingrese un año para saber si es bisiesto "));
var age = n;
var valor = n % 4;
if (valor != 0) {
    age += 4 - valor;
    if (age % 100 == 0) {
        if (age % 400 != 0) {
            age += 4;
        }
    }
}


console.log("El proximo año bisciesto es: " + age);