let x = [];
let y = new Array(1,3,45);

console.log(y)

let z = () => {console.log("Good Morning")}

//z()
y.push(z)
console.log(z)


//console.log(y[3])
console.log(y[6])

console.log(y)

y[6]="swarnika"

y.push("muskan")




console.log(y)

y.push("Anuj")
console.log(y)

y.pop()

console.log(y)

y.unshift("pallavi")

console.log(y)

y.shift()

console.log(y)

console.log(y.length)

y[4] = "srusti"

y[2] = "manisha"

console.log(y)

console.log(y.indexOf("swarnika"))

console.log(y.indexOf("anuj"))
console.log(y.indexOf("swarna"))

console.log(y.includes("manisha"))

let stud = y.slice(4,6)
console.log(stud)

let a = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
//used to remove the elemenet after a particular element
// a.splice(2,4)
console.log(a)
// start index is ,0,new values => add values want to add
a.splice(1,0,"Y","Z")
console.log(a)

a.splice(1,4,"y","z")
console.log(a)

// arrayname.length
// push -> add new value at the end
// pop -> remove single value from the end
// shift -> remove single element from the start
// indexOd -> find the index of first occurance otherwise -1
// includes -> search for the element ( true/ false)
// slice -> part the Array
// splice -> add ,remove, replace





