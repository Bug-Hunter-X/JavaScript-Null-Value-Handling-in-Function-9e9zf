function foo(a, b) {
  // Handle null, undefined, and other falsy values
  a = a !== null && a !== undefined ? a : 0; 
  b = b !== null && b !== undefined ? b : 0;
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 2)); // Output: 2
console.log(foo(1, undefined)); // Output: 1
console.log(foo(undefined, undefined)); //Output: 0