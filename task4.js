const color = ['Red', 'Green', 'White', 'Black']
let comma = '' 
for (let i = 0; i < color.length; i++) {
    comma += (color[i] + ',')
}
console.log(comma) // value with commas

let pluss = '' 
for (let i = 0; i < color.length; i++) {
    pluss += (color[i] + '+')
}
console.log(pluss) // value with plus

let dot = '' 
for (let i = 0; i < color.length; i++) {
    const ending = i + 1 === color.length
    if (ending) {
        dot += color[i] + '.'
    }else{
        dot += (color[i] + ',')
    }
}
console.log(dot) // value end dot
console.log('* 4.0 end *')


const comspace = color.join(', ')
const com = color.join(',')
const plusspace = color.join(' + ')
console.log(com)
console.log(comspace)
console.log(plusspace)