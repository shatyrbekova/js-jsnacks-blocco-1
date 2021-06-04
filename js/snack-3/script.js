

//il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

var totale = 0; 

for (var i=1; i<=10; i++) {
    var n = parseInt(prompt('Quanti numeri vuoi inserire?'));
     totale += n;
}

document.getElementById('start').innerHTML = totale;