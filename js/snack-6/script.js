


var numero = parseInt(prompt('Inserire un numero'));
var cubo;
for( var i=0; i<=numero; i++){
    cubo = Math.pow (i, 4)
    document.getElementById('output').innerHTML = cubo;
}