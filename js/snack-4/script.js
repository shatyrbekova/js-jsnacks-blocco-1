var surnameList, surname, check;

surnameList = ['Shatyrbekova', 'Vinci', 'Pippo' ];
surname = prompt ('Inserire il Suo cognome');
check = false;


for (var y = 0; y < surnameList.length; y++) {
    if(surnameList [y] === surname) {
        check = true;
    }
}

if (check) {
    document.getElementById('start').innerHTML += 'Lei può partecipare!';
} else {
    document.getElementById('start').innerHTML += 'Lei non può partecipare!';
}