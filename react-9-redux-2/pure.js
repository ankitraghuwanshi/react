//pure function:-
//1.no side effect
//2.given the same input ----> always return the same output
function add(a, b) {
  return a + b;
}
add(2, 3);


//impure function
let counter = 0;
function increment() {
  counter += 1;
  return counter;
}
let a=increment();
let b=increment();
//a==b (false)