function greet(name, callback){
    console.log("Hello"+name);
    callback();
}
greet("Saket" ,()=>{
    console.log("Welcome to Training");
});