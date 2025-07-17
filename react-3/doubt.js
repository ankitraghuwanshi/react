function outer() {
    let x = 12;
    return function inner(y) { 
        x = x + y;
        console.log(x);
    }
}
const innerFn = outer();
const innerFn2 = outer();
innerFn(3); // 12 + 3
innerFn(6); // 15 + 6
innerFn2(10); // 12 + 10
