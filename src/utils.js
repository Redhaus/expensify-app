console.log('utiljs');

const square = (x) => x * x;
const add = (a,b) => a + b;
const subtract = (a,b) => a-b;

// not an object just export syntax
export { square, add, subtract as default };