function shiftCharCode(char, factor) {
  if (char >= 97 && char <= 122) {
    return 97 + (char - 97 + factor) % 26;
  }
  
  if (char >= 65 && char <= 90) {
    return 65 + (char - 65 + factor) % 26;
  }
  
  return char;
}

function caesarCipher(str, factor) {
  const charArr = str.split("");
  const cipher = charArr.map((char) => char.charCodeAt(0))
    .map((code) => shiftCharCode(code, factor))
    .map((code) => String.fromCharCode(code));

  return cipher.join("");
}

module.exports = caesarCipher;