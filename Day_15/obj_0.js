let user = {
    name:"Anuj",
    age: 22,
    address:{
        permanent:{
            pincode: 273012,
            city:"GOrakhpur"
        },
        temporary:{
            pincode: 272037,
            city:"Meerut"
        }
    }
};

//Deep copy
let user1 = JSON.parse(JSON.stringify(user));
user1.address.permanent.pincode = 100022;
console.log(user);
console.log(user1);


// let user1 ={...user};
// console.log(user1);
// user1.address.permanent.pincode = 110001;
// console.log(user)
// console.log(user1)




// // OBJECT TO STRING 
// const response = JSON.stringify(user);
// // JSON STRING 
// console.log(response);
// // STRING TO OBJECT 
// const oldData =JSON.parse(response);
// // JSON OBJECT 
// console.log(oldData);


// Optional Chaining

// console.log(user.address);
// console.log(user.address?.permanent?.pincode);
// console.log(user.address?.state);

// Nullish Coalescing

// console.log(user.roll ?? "Roll Not Exist")
// console.log(user.address?.state?? "State Does Not Exist ")



