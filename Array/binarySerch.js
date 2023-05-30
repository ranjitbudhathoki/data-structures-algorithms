const binarySearch = (list, item) => {
  let high = list.length - 1;
  let low = 0;

  while (low <= high) {
    console.log("he");
    let mid = Math.floor((high + low) / 2);
    let guess = list[mid];

    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else if (guess < item) {
      low = mid + 1;
    }
  }
  return null;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 9], 3));
