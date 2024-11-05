let arrays = [1, 2, 2, 3, 4, 4, 5, 6, 7, 8];
let target = 7;

function test(arraysV, target) {
  let left = 0;
  let right = arraysV.length - 1;
  let mid = Math.floor((left + right) / 2);
  let newArray = [];

  // console.log(mid)

  while (left <= right) {
    if (arraysV[mid] === target) {
      newArray.push(mid);
    }
    if (arraysV[mid] < target) {
      left = mid + 1;
    }

    if (arraysV[mid] > target) {
      right = mid - 1;
    }

    if (newArray.length === 0) {
      return newArray.push(-1);
    } else {
      console.log("newArray.length")
      return newArray;
    }
  }
}


// console.log(
test(arrays, target)


// )

