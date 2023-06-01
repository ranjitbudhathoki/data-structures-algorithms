function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const count1 = {};
  const count2 = {};

  for (char of str1) {
    count1[char] = (count1[char] || 0) + 1;
  }

  for (char of str2) {
    count2[char] = (count2[char] || 0) + 1;
  }

  console.log(count1);

  console.log(count2);

  for (key in count1) {
    if (!(key in count2)) {
      return false;
    }
    if (count1[key] !== count2[key]) {
      return false;
    }
    return true;
  }
}

console.log(validAnagrams("aaz", "zza"));
