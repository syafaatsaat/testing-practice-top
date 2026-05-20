function capitalize(str) {
  if (str.length === 0) {
    return "";
  }
  
  let firstLetterCode = str.charCodeAt(0);
  if (firstLetterCode >= 97 && firstLetterCode <= 122) {
    return String.fromCharCode(firstLetterCode - 32) + str.slice(1);
  }

  return str;
}

module.exports = capitalize;