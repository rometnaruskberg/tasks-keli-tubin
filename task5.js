const empty = Boolean('')
const hi = Boolean('tere')
const name = Boolean('minu nimi on John')
console.log(empty)
console.log(hi)
console.log(name)


const hi3 = 'tere'
const arr = hi3.split('')
for (var i = 0; i < arr.length; i++) {
    arr[i].charAt(0)+ arr[i].toUpperCase() + arr[i].slice(1)
}
const hi33 = arr.join('')
console.log(hi33)