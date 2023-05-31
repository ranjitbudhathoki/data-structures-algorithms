function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not good";
  }

  const newStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newStr.push(str[i]);
  }
  return newStr.join("");
}

console.log(reverseString("hello"));
