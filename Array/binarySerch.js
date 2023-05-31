const binarySearch = (list, item) => {
  let high = list.length - 1;
  let low = 0;
  const isAscending = list[low] < list[high]; // Check if the list is sorted in ascending order

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    }

    if (isAscending) {
      if (guess > item) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (guess < item) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return null;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 9], 3));
