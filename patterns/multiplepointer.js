// brutforece approach with O(n2)

// function sumZero(nums) {
//   if (!nums.length) {
//     return undefined;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === 0) {
//         return [nums[i], nums[j]];
//       }
//     }
//   }
// }

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

// two pointer approach with O(n) time complexity and O(1) space conplexity

function sumZero2(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === 0) {
      return [nums[left], nums[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3]));
