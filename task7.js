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
function evenNumber(fiveRandomArray){
    let even = [];
    for (var i = 0; i < fiveRandomArray; i++){
        if (fiveRandomArray[i] % 2 === 0){
            even.push('true');
        }else (fiveRandomArray[i] % 2 === 1) 
            even.push('false');
            var evenNumbers = 0;
            for (let i = 0; i < even.length; i++){
                if (even[i] == 'true'){
                    return evenNumbers++;
                    }else{}
                } 
                return evenNumbers
    }
}


console.log(randomNumber())
console.log('Five random numbers are ' + fiveRandomArray)
console.log(bigNum(fiveRandomArray))
console.log(smallNum(fiveRandomArray))
console.log('Even numbers are ' + evenNumber(fiveRandomArray))