//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var listName = ['Ali', 'Pippo', 'Andrea', 'Luca', 'Stefano'];
var listSurname =['Verdi', 'Bianchi', 'Neri', 'Verdi', 'Gialli'];

var listInvited = [];



while (listInvited.length<3){
    var names = listName [Math.floor(Math.random()* listName.length)];

    var surname =listSurname [Math.floor(Math.random()*listSurname.length)];

    var invited = names +'  '+ surname;

    if (!listInvited.includes (invited)) {

        document.getElementById('lista').innerHTML+= '<li>' + invited + '</li>',
        
        listInvited.push(invited);
    }
}