//Visualizzare in pagina 5 numeri casuali poi fateli sparire.
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



const container = document.getElementById('container');
const randomNumbers = [];
const guestNumber = [];
const rightNumber = [];

for (let i = 0; i < 5; i++) {
    randomNumbers.push(getRandomIntInclusive(1, 50))
    const div = document.createElement('div');
    container.append(div);
    div.classList.add('cards');
    div.append(randomNumbers[i])
}
console.log(randomNumbers);

setTimeout(fade, 30 * 1000);

let points = 0;
function fade() {
    container.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const element = parseInt(prompt('Inserisci il numero che ricordi'));
        guestNumber.push(element)
        if (randomNumbers.includes(element)) {
            points += 1
            rightNumber.push(element)
        }
    }
    if (guestNumber == rightNumber) {
        container.innerHTML = `<h1>Complimenti!!! Hai indovinato tutti i numeri</h1>`
    } else {
        container.innerHTML = `
        <h1>Complimenti!!! Hai indovinato ${points} numeri. [${rightNumber}]</h1>
        `
    }
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
