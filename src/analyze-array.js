function analyzeArray(arr) {
  if (arr.length === 0)
    return { average: 0, min: null, max: null, length: 0 };

  let avg = arr.reduce((total, curr) => total + curr, 0) / arr.length;
  arr.sort();

  return {
    average: avg,
    min: arr[0],
    max: arr[arr.length-1],
    length: arr.length
  };
}

module.exports = analyzeArray;