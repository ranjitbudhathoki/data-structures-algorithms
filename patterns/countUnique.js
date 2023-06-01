// function uniqueValues(nums) {
//   if (!nums.length) {
//     return 0;
//   }

//   let i = 0;
//   let j = 1;

//   while (j < nums.length) {
//     if (nums[i] === nums[j]) {
//       j++;
//     } else {
//       i++;
//       nums.splice(i, 1, nums[j]);
//       j++;
//     }
//   }

//   return i + 1;
// }

function uniqueValues(nums) {
  if (!nums.length) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
console.log(uniqueValues([1, 1, 1, 2, 3, 4, 4, 5, 6]));
