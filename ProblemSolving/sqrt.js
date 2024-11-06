// 69. Sqrt(x)
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.


function sqrts(x) {
  if (x < 0) {
    return 0;
  }
  if (x < 2) {
    return x;
  }

  let first = 0;
  let last = x;
  let result = 0;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);

    if (mid * mid === x) {
      return mid;
    }

    if (mid * mid < x) {
    //   result = mid;
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }

  return first-1;
}

console.log(sqrts(28));
