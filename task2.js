const name = 'Keli'
const day = 22
const month = 12
const year = 1993
const hobby = ('koerad', 'viipekeel')
const object = {name: name, bday: day + '.' + month + '.' + year ,  hobby: hobby}; // object
console.log('Birthday 2.0 is: ' + object.bday) 


const name2 = 'Keli'
const birthday = new Date(1993, 11, 22)
const day2 = birthday.getDate()
const month2 = birthday.getMonth()+1
const year2 = birthday.getFullYear()
const hobby2 = ('koerad', 'viipekeel')
const object2 = {name2: 'Keli', birthday: day2 + '.' + month2 + '.' + year2 ,  hobby2: hobby2}; // object
console.log('Birthday 2.1 is: ' + object2.birthday)