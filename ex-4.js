// Start coding here
let add = (a,b) =>  {
    let result = a + b
    return result
   };
   
    let Execute =add(10,5);
    console.log(Execute);
   
    let subtract = (a,b) => {
   let result = a-b
    return result
    };
    let Execute2 =subtract(10,5);
    console.log(Execute2);
   
    let multiply = (a,b) => {
       let result = a*b
       return result
    };
    let Execute3 = multiply(10,5);
    console.log(Execute3);
   
    let divide = (a,b) => {
       let result = a/b
       return result
    }
    let Execute4 = divide(10,5);
    console.log(Execute4);


let calculator = {add,subtract,multiply,divide};
let addResult = calculator.add(10,20);
console.log(addResult);
let divideResult = calculator.divide(3000,10);
console.log(divideResult);
