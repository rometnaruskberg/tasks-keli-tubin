const fiveRandomArray = []

for (let i = 0; i <= 4; i++){
    fiveRandomArray.push(randomNumber());
}
function randomNumber() {
    n = []
    return Math.floor(Math.random(n) * 101);
}
function bigNum(fiveRandomArray){
    return Math.max.apply(null, fiveRandomArray);
}
function smallNum(fiveRandomArray){
    return Math.min.apply(null, fiveRandomArray);
}
function even()

console.log(randomNumber())   // random number
console.log('Five random numbers are ' + fiveRandomArray) // five random numbers
console.log(bigNum(fiveRandomArray)) // biggest number
console.log(smallNum(fiveRandomArray)) // smallest number
console.log() // even numbers