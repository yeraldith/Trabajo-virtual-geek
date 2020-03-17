//ejercicio cinco de acuerdo a la clase que pertenezca cambie los valores
let elm = document.getElementById('item');
if (elm.className === ('error')) {
    elm.innerHTML = '<h1> ERROR </h1><p>Ha surgido un error</p>';
} else if (elm.className === ('warning')) {
    elm.innerHTML = '<h1> AVISO </h1><p>Tenga cuidado</p>';
} else if (elm.className === ('success')) {
    elm.innerHTML = '<h1> CORRECTO </h1><p>los datos son correctos</p>';
}