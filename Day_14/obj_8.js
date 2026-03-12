// Rest Operator => Result into Array
function sum(...num) {
    console.log(num)
    let res = num.reduce((s,n)=> s+n,0)
    console.log(res);
}

sum(1, 2, 3, 4);
sum(2, 3, 4, 5, 6, 7);