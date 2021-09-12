const nimi = 'Keli'
const paev = 22
const kuu = 12
const aasta = 1993
const hobi = ('koerad', 'viipekeel')
const objekt = {nimi: nimi, sunnipaev: paev + '.' + kuu + '.' + aasta ,  hobi: hobi}; // object
console.log('Sunnipaev 2.0 vastus on: ' + objekt.sunnipaev) 


const name = 'Keli'
const birthday = new Date(1993, 12, 22)
const day = birthday.getDate()
const month = birthday.getMonth()+12
const year = birthday.getFullYear()-1
const hobby = ('koerad', 'viipekeel')
const object = {name: 'Keli', birthday: day + '.' + month + '.' + year ,  hobby: hobby}; // objekt
console.log('Sunnipaev 2.1 vastus on: ' + object.birthday)