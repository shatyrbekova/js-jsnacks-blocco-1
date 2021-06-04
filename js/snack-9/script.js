//Calcola la somma e la media dei primi 10 numeri.

var nItems = 10;

var sum = 0;

for (var x=1; x<=nItems; x++){
    sum += x;
}

var avg = sum/nItems;

console.log('La somma è: ' + sum);

console.log('La media è: ' + avg);