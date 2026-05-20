function reverseString(str) {
  let left = 0;
  let right = str.length - 1;
  let strArr = str.split("");
  
  while (left < right) {
    let temp = strArr[left];
    strArr[left] = strArr[right];
    strArr[right] = temp;
    
    left += 1;
    right -= 1;
  }

  return strArr.join("");
}

module.exports = reverseString;