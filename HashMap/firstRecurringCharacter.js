const firstRecurringCharacter = (arr) => {
  const chars = {};

  for (let i = 0; i < arr.length; i++) {
    console.log(chars);
    if (!chars[arr[i]]) {
      chars[arr[i]] = i;
    } else {
      return arr[i];
    }
  }
};

console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
