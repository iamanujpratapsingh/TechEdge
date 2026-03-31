const users = [
    {name: "Mohit Prajapati", roll: 32},
    {name:"Mohit Vishwakarma", roll: 31},
    {name:"Mayank", roll: 30},
    {name:"Aditya", roll: 2}
];

// To access all the data except any particular
// const updatedUser = users.filter(user => user.roll != 31)
// console.log(updatedUser);

//  To create and update with new value
// const newUsers = users.map(user =>
//      user.roll==2 ? {...user, roll:21}: user)
// console.log(newUsers)

const newUsers = users.filter(user =>
     user.roll)
console.log(newUsers)


// users.map(u => console.log(u.name));

// let names = users.map(u => name)
// console.log(names)

// let search = "mohit";
// // To search for give string in Array of Objects
// const result = users.filter(user =>
//     user.name.toLowerCase().includes(search.toLowerCase())
// )
// console.log(result)
