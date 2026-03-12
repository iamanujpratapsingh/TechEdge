let user=[
    {name: "Anuj",roll :12},
    {name: "Swarnika",roll:66 },
    {name: "Muskan",roll :32},
    {name: "Aayush",roll :55},
];

let names = user.map(u=> u.name)
console.log(names)

let data = user
    .filter(u=> u.roll >20)
    .map(u=>u.name);
    
console.log(data)


