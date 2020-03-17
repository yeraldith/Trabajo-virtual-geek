const NAME = 'DERLY';
var NAME_DOS = 'YERALDITH'
nombre = prompt("Ingrese su nombre");
if (nombre === NAME || nombre === NAME_DOS) {
    console.log('BIENVENIDA  ' + nombre);
} else if (nombre != NAME || nombre != NAME_DOS) {
    console.log("Lo siento pero el usuario que has introducido no está registrado");
}