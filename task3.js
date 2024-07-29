
const zero = (fn) => (fn ? fn(0) : 0);
const one = (fn) => (fn ? fn(1) : 1);
const two = (fn) => (fn ? fn(2) : 2);
const three = (fn) => (fn ? fn(3) : 3);
const four = (fn) => (fn ? fn(4) : 4);
const five = (fn) => (fn ? fn(5) : 5);
const six = (fn) => (fn ? fn(6) : 6);
const seven = (fn) => (fn ? fn(7) : 7);
const eight = (fn) => (fn ? fn(8) : 8);
const nine = (fn) => (fn ? fn(9) : 9);

const plus = (x) => (y) => y + x;
const minus = (x) => (y) => y - x;
const times = (x) => (y) => y * x;
const dividedBy = (x) => (y) => Math.floor(y / x);

console.log(five(plus(one()))); // Outputs: 6
console.log(seven(minus(two()))); // Outputs: 5
console.log(five(minus(seven(plus(one())))));
// 5 - (1 + 7) Outputs: -3
