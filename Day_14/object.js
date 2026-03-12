let student= {
    name:"Anuj",
    roll: "12",
    city: "Gorakhpur",
    state: "Uttar Pradesh"

}

console.log(student)

let keys =Object.keys(student)
keys.map((x)=> console.log(x))

Object.values(student).map((v)=> console.log(v))


// To get all the keys of Object
// console.log(Object.keys(student))
// To get all the values of the Object
// console.log(Object.entries(student))