var numOne = prompt('Inserisci il numero');
var numTwo = prompt ('Inserisci il numero');



if ( numOne > numTwo ) {
   document.getElementById ('start').innerHTML = ' numero 1 è maggiore' ;

} else if ( numOne === numTwo) {
    document.getElementById ('start').innerHTML = 'pari';
}
else  {
    document.getElementById ('start').innerHTML = 'numero 2 è maggiore' ;
}

// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

