// let a= [5,11,23,77,90]
let a= [5,11,23,77,90];
// if any of the Element is following the condition
let res = a.some(n => n % 5 ==0)
console.log(res)
// if all of the element must follow the condition
let result = a.every(n => n % 5 == 0)
console.log(result)