// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

var num = prompt('Inserisci un numero di 4 cifre');

var inputLen = num.length;

if (inputLen !== 4) {
    alert ('Dovevi inserire un numero di 4 cifre');

} 
else if (isNaN(num)){
   alert ( 'Dovevi inserire un numero, non una parola');
} 
 else {
    var totale= 0;
    for (var i = 0; i <inputLen; i++){
      totale+=parseInt(num[i])
    }
}

document.getElementById('result').innerHTML = 'Il numero toale è' + '  ' + totale;
