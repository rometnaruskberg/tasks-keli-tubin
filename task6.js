function greet(n) {
    if (!n) {
        console.log(undefined)
    } else {
        for (let i = 0; i < n; i++) {
            console.log('Hello!')
        }
    }
}
greet()
greet(2)
greet(3)
greet(12)    
    
//const hello1 = 'Hello! '
//let n1 = [ , 2, 3, 12]
//console.log(hello1.repeat(n1[0]))
//console.log(hello1.repeat(n1[1]))
//console.log(hello1.repeat(n1[2]))
//console.log(hello1.repeat(n1[3]))
