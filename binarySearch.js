/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function binary(arrayV, target) {
  // arrayV =[1,2,4,5,6]
  let left = 0;
  let right = arrayV.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arrayV[mid] === target) {
      return mid;
    }

    if (arrayV[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

console.log(binary([1, 3, 5, 6], 3));
