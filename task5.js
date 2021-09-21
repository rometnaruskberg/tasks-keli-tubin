const empty1 = ''
const empty = empty1.charAt(0).toUpperCase() + empty1.slice(1)
const hi2 = 'tere'
const hi = hi2.charAt(0).toUpperCase() + hi2.slice(1)
const name3 = 'minu nimi on John'
const name = name3.charAt(0).toUpperCase() + name3.slice(1)
const TF1 = Boolean(empty1)
const TF2 = Boolean(hi2)
const TF3 = Boolean(name3)
console.log(!TF1, !TF2, !TF3)
console.log(empty)
console.log(hi)
console.log(name)