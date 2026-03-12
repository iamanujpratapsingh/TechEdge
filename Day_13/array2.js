//Reduce function
// let x = [1,2,3,4,5];

// let res = x.reduce((sum, num) => sum+num, 0)
// console.log(res)



let products =[
    {name: "Laptop", price: 40000},
    {name: "Desktop", price: 35000},
    {name: "Mobile", price: 25000}
]

let totalprice = products.reduce((sum,pr)=> sum +pr.price,0)

console.log(totalprice)