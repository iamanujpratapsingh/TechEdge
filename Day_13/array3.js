let student ={
    name:"Anuj",
    roll: 12,
    course: "B.tech",
    stream: "CSE"
}

console.log(student)
// Dot operator
console.log(student.name)

console.log(student.stream)

// using subscript and key
console.log(student["name"])

// to add new attribute /key
student.reg = 111;
console.log(student)

// to update the value of the key
student.name="Anuj pratap singh";
console.log(student)

// to delete the key from the Object
delete student.course
console.log(student)

student.address ={
    house_no: 234,
    area: "Gorakhpur",
    state: "uttar pradesh",
    pincode: 73017
}

// console.log(student)

// accesing the nested objects
console.log(student.address.pincode)
console.log(student["address"]["pincode"])
console.log(student)

