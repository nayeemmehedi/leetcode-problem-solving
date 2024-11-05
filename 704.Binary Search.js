function binary(array, target) {
  let first = 0;
  let last = array.length - 1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);

    if (array[mid] === target) {
      return mid;
    }
    if (array[mid] < target) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }

  if (!array.includes(first)) {
    return -1;
  }

  return first;
}

let nums = [-1, 0, 3, 5, 9, 12];
let target = 2;

console.log(binary(nums, target));
