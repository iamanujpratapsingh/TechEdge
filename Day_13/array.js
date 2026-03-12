// let a=[1,2,3,4,5]

// let b =a.map(num => num*2)

// let b= a.map(function (n) {
//     return n*2;
// })

// let c=a.map((x) => x*2)

// console.log(a)
// console.log(c)
// console.log(b)

let a= [1,2,3,4,5]
let b = a.filter(x => x%2 == 0)
console.log(b)

let products = [
    {name:"Laptop", price:55000},
    {name:"Desktop", price:35000},
    {name:"Mobile", price :25000}
]

console.log(products)
let pro = products.filter(products => products.price >34000)
console.log(pro)

let profind = products.find(products => products.price >30000)
console.log(profind)

let profindindex = products.findIndex(products => products.price == 55000)
console.log(profind)