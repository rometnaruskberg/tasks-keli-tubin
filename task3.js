function greet (name) { 
    let result = 'Hello ' // kõik väärtused ekraanil algavad selle väärtusega
    if (Array.isArray(name)) {
        result += name[0] + ' and ' + name[1] // mitme nime kuvamiseks ekraanil
    }  else if (name) { 
        result +=  name
    }  else {
        result += 'my friend' 
    }
    return result + '.' // kõik väärtused ekraanil algavad selle väärtusega
}

const result = greet('Keli') 
console.log(result) 

const result2 = greet() 
console.log(result2) 

const result3 = greet(['Jill', 'Jane']) // nurksulud Array funktsiooni jaoks
console.log(result3) 