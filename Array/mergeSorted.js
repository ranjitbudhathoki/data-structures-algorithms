const mergeSortedArray = (arr1, arr2) => {
  const mergedArray = [];
  let i = 0; // Pointer for arr1
  let j = 0; //poin ter for arr2

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
};

console.log(mergeSortedArray([0, 3, 4, 31], [4, 6, 30]));
