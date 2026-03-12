let user = {
    Name: "Anuj",
    roll: 10012,
    city: "Gorakhpur",
    state:"Uttar Pradesh"
};
//object Destructing, -> fetching particular data
let { roll }= user;
// Object Destructing

//old key name:new name
const {Name,city,age, state:jilla }=user;
console.log(Name);
console.log(roll);
console.log(jilla);



