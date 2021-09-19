const color = ['red', 'green', 'white', 'black']
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
    dot += (color[i] + ',')
}
console.log(dot + '.') // value end dot