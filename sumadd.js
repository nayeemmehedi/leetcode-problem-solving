function add(arrays) {
  let value = arrays.join(""); //array thke string anlm
  let result = BigInt(value); // string thke number e anlm
  let newResult = result + 1n;
  console.log("newArray", newResult);
  let newArray = newResult.toString().split(""); // number thke string aanlm then array
  const numArr = newArray.map(Number);
  console.log(newArray);
  return numArr
}

add([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);
