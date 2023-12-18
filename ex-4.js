// Start coding here
let add = (a,b) => {
   return a+b
}
let addResult = add(34,35)
console.log(addResult)

let subtract = (a,b) => {
   return a-b
}
let subtractResult = subtract(34,35)
console.log(subtractResult)

let multiply = (a,b) => {
return a*b
}
let multiplyResult = multiply(34,35)
console.log(multiplyResult)

let divide = (a,b) => {
   return a/b
}
let divideResult = divide(10,5)
console.log(divideResult)

/////
let calculator = {
add: (a,b) => {
   return a+b;
},
subtract: (a,b) => {
return a-b;
},
multiply: (a,b) => {
return a * b;
},
divide: (a,b) => {
   return a/b;
},

};

let addResult2 = calculator.add(10,20)
console.log(addResult2)

let dividieResult2 = calculator.divide(3000,10)
console.log(dividieResult2)