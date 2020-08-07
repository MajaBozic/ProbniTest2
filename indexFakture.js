const fakture = []      // pravi se niz za fakture
let count = 0           // brojac potreban za lakse naknadno biranje dodatih 


// Inputi (posto sve to vec u HTMlu stoji - ne pravi se, samo treba ovako selektovati)

const unetiIme = document.querySelector('#txtCmpnName')
const unetiPIB = document.querySelector('#txtCmpnPIB')
const unosDatuma = document.querySelector('#txtTime')
const unetaVrednot = document.querySelector('#txtValue')
const dgmDodaj = document.querySelector('#bttnAdd')


// Dugme (dodatni poeni..)

const sveFakture = document.querySelector('#sveFakt')


// Lista za ubacivanje faktura

const lista = document.querySelector('#itemList')


// Najbitniji deo koda (?)

/*    .
      .
      .    */


// // Dodatno 
// sveFakture.       ...nejasno gde je to dugme, kad, napravljeno/postavljeno, ali mozda samo vise ne mogu da gledam u monitor pa to ne vidim