const analyzeArray = require("../analyze-array");

test(`Entering an array returns correct properties`, () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual(
    {
      average: 4,
      min: 1,
      max: 8,
      length: 6
    }
  );
});

test(`Entering an empty array`, () => {
  expect(analyzeArray([])).toStrictEqual(
    {
      average: 0,
      min: null,
      max: null,
      length: 0
    }
  );
});