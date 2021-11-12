// chiedo quanti chilometri deve fare l'utente
let userDistance = Number( prompt('quanti chilometri devi percorrere?(in numero)'));
console.log(userDistance);

// chiedo l'età dell'utente
let userAge = parseInt( prompt('quanti anni hai? (in numero)'));
console.log(userAge);
let userPrice = (userDistance * 0.21);
// altro
let userMessage = 'il prezzo del biglietto è ';
// calcolo eventuali sconti
if (userAge < 18) {
    
    let userPriceDiscount = userPrice - ((userPrice * 20) / 100) ;
    console.log(userPriceDiscount);
    userPriceDiscount = userPriceDiscount.toFixed(2)
    alert(userMessage + userPriceDiscount);

} else if (userAge > 65) {

    let userPriceDiscount = userPrice - ((userPrice * 40) / 100) ;
    console.log(userPriceDiscount);
    userPriceDiscount = userPriceDiscount.toFixed(2)
    alert(userMessage + userPriceDiscount);

} else {
    userPrice = userPrice.toFixed(2)
    console.log(userPrice);
    alert(userMessage + userPrice);
}



