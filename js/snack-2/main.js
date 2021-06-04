var firstWord = prompt('inserire una parola');
var secondWord = prompt ('inserisci una parola');

if (firstWord.length > secondWord.length){
    document.getElementById ('start').innerHTML = secondWord + '  ' + firstWord;
} else if (secondWord.length > firstWord.length) {
    document.getElementById ('start').innerHTML = firstWord + '  ' + secondWord;
}
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.