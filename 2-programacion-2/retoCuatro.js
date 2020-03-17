//Ejercicio 4 ¡págame tía!
const PERSONAS = 9;
const CUENTA_PAGAR = 128;
var pagarCadaUno = ((CUENTA_PAGAR - 2) / PERSONAS);
var pagarAna = pagarCadaUno + 2;
console.log("Todos deben pagar: " + pagarCadaUno + "Euros   y Ana debe pagar " + pagarAna + "Euros");
var total = (pagarCadaUno * 8) + pagarAna;
console.log("total a pagar tienda china: " + total);