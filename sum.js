// let removeElement = function (nums, val) {
//   let pushingNewUnderscore = [];
//   let k = [];
//   let finalValue=[]


//   for (let index = 0; index < nums.length; index++) {
//     if (nums[index] === val) {
//       pushingNewUnderscore.push("_");
//     } else {
//       k.push(nums[index]);
//     }
//   }


//   finalValue = [...k,...pushingNewUnderscore]
  

//   return k
// };

// console.log(removeElement([3,2,2,3],3))
// console.log(removeElement([0,1,2,2,3,0,4,2],2))


// nums = [3,2,2,3], val = 3

let removeElement = function (nums, val) {
    let k = 0; // Counter for elements not equal to val
  
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[k] = nums[i]; // Place non-val element at index k
        k++;
      }
    }
  
    // Fill the rest of the array with "_" (only for visual clarity)
    for (let i = k; i < nums.length; i++) {
      nums[i] = "_";
    }
  
    return k; // Return the count of non-val elements
  };
  
  // Example usage:
  let nums = [3, 2, 2, 3];
  let val = 3;
  let k = removeElement(nums, val);
   // Output: 2
  console.log(nums); // Output: [2, 2, "_", "_"]
  
