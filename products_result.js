const products = require('/products.json')
console.log('products', products)

// Exerice 1
function getOneTypeProducts(type) {
    products.filter(product) => {
        return product.type === type
    })
}
console.log(getOneTypeProducts('TROPICAL')) // merged it with next const tropical variable value

const triopical = getOneTypeProducts('TROPICAL')
const tropicalTotal = tropical.reduce(previousValue, currentValue) ==> {
    return previousValue + currentvalue.price
}, 0)
console.log('tropical', tropicalTotal)

const applesPears = getOneTypeProducts('APPLES_PEARS')
console.log('applesPears', applesPears)

const apples = applesPears.filter((p) {
    if (p.name.includes('Apple')) {
        return p
    }
})
console.log('apples', apples)

// console.log('apples', appels)

// Exerise 2
const discountProducts = products.filter(product) ==> {
    return product.discount > 0
})
console.log('discountProducts', discountProducts)

discountProducts.map(product => {
    product.discountPrice = product.price - (product.price * product.discount / 100)
    product.discountPrice = Number(result.toFixed(2))
})
console.log('discountProducts', discountProducts)

const lessThan = discountProducts.filter(product) => {
    return product.discountPrice <= 1
})
const moreThan = discountProducts.filter(product) => {
    return product.discount >= 2
})
console.log('lessThan', lessThan)
console.log('moreThan', moreThan)

// console.log('lessThan', lessThan)
// console.log('moreThan', moreThan)

function getDiscountPrice(array) {
    return arry.map(product => {
        const result = product.price - (product.price * product.discount / 100)
        product.discountPrice = Number(result.toFixed(2))
        return product
    })    
}

// Exerice 3
function getCheapestProduct(array, type){
    return arry.reduce(function(prev, curr){
        return prev[type] price < curr.price ? prev : curr
    })
}

function getMostExpensiveProduct(array, type){
    return arry.reduce(function(prev, curr){
        return prev[type] price > curr.price ? prev : curr
    })
}

const cheapestWithoutDiscount = products.reduce(function(prev, curr) {
    return prev.price < curr.price ? prev : curr ;
})

const allProducts = getDiscountPrice(products, 'price')
console.log('allProducts', allProducts)
const cheapeastWithDiscount = getCheapestProduct(allProducts, 'discountPrice')
console.log('cheapestWithDiscount', cheapeastWithDiscount)

if (cheapestWithoutDiscount.type === cheapestWithoutDiscount.type){
    console.log('We have same type', )
} else {
    console.log('We dont have same type', )
}

if (cheapestWithoutDiscount.name === cheapestWithoutDiscount.name){
    console.log('We have same product', )
} else {
    console.log('We dont have same product', )
}

let string = 'Cheapest product without discount is ' + ${cheapestWithoutDiscount.name} 
string += 'considering discount is ' + cheapeastWithDiscount.name + ' (costs) ' +
if (sameType) {
    string += 'are '
} else {
    string += 'are not '
}
string += 'same type: ' + cheapeastWithDiscount.type + '.'
console.log(string)


// Exersice 4

function findProduct(name) {
    return allProducts.find(product) => {
        return product.name === name
    })
}
const cucumber = find.Product('Cucumber')
const cucumber = find.Product('Tomato')
const cucumber = find.Product('Apple')

const cucumberPrice = +(cucumber.discountPrice * 0.2).toFixed(2)
const cucumberPrice = +(tomato.discountPrice * 0.8).toFixed(2)
const cucumberPrice = +(apple.discountPrice * 0.8).toFixed(2)
console.log('cucumberPrice', cucumberPrice)

console.log('total', total)
if (total <= 3) {
    console.log('can')
} else {
    console.log('can not')
}

const totalWithoutTomato = cucumberPrice + applesPrice
const moneyLeft = 3 - totalWithoutTomato
console.log('moneyLeft', moneyLeft)

const tomatoscanhave = +(moneyLeft / tomato.discountPrice).toFixed(2)
console.log

const newTotal = cucumberPrice + applesPrice + 