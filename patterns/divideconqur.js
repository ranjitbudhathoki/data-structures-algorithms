function search(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    const guess = arr[mid];

    if (guess === target) {
      return mid;
    }

    if (target > guess) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 3));
