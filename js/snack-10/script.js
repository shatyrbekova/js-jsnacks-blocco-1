// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


var totale = 0; 

for (var i=1; i<=5; i++) {
    var n = parseInt(prompt('Quanti numeri vuoi inserire?'));
     totale += n;
}

document.getElementById('start').innerHTML = totale;


var sum= 0;

y=0;

while ( y < 5){
    var num = parseInt(prompt('Quanti numeri vuoi inserire?'));
    sum +=num;
    y++;
   
}

document.getElementById('start').innerHTMl = sum;