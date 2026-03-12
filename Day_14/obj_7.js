let user ={
    name: "Anmol",
    roll: 21
};
// object coy using spread operator
let newUser = {...user};
// update and create new copy
let updateUser ={...user,name: "anuj pratap singh"};
console.log(newUser);
console.log(updateUser);

// newUser.roll=23;
// console.log(user);