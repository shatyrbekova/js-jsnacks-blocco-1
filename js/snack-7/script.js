// Stampa le potenze di 2 fino a 1000.

 var numero= parseInt(prompt('Inserisci un numero'));


for (var y=0; y < numero; y++) {
    document.getElementById('output').innerHTML += Math.pow (numero, 1000);
}


