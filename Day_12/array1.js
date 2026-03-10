// let x = [1,2,3,5,6,7,8]
// let y = ["A","B","C","D","E","F","G"]

// console.log(x)
// console.log(y)

//Old method --> for loop

// for(let i=0; i<y.length; i++){
//     console.log(i+" - "+y[i])
// }

//New mehtod --> for of loop

// for(let st of y){
//     console.log(st)
// }

//For Each loop
// -->fucntion with arguments
// y.forEach(function(value,index){
//     console.log(value)
// })

//arrow operator
// x.forEach((value,index)=>{
//     console.log(value*2)
// })
// // for even print using arguments
// y.forEach(function(value,index){
//     if(index%2 == 0) console.log(index+ "-" + value)
// })

let x =[];
for(let i=1;i<=20;i++){
    if(i%2==0)
        x.push(i)
}

console.log(x)


