const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const squaredArray = someArray
  .filter(item => item % 3 === 0)
  .map(item => item * item);

console.log(squaredArray); // Output: [9, 36, 81]