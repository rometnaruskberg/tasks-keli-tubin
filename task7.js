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
function evenNumber(even){
    const evenno = [];
    for (let i = 0; i < even.length; i++){
        if (even[i] % 2 === 0){
            evenno.push(true);
        }
    }
    return evenno.length
}


console.log(randomNumber())
console.log('Five random numbers are ' + fiveRandomArray)
console.log(bigNum(fiveRandomArray))
console.log(smallNum(fiveRandomArray))
console.log('Even numbers are ' + evenNumber(fiveRandomArray))