const reverseString = require("../reverse-string");

test('reversing "midnight sun" returns "nus thgindim"', () => {
  expect(reverseString("midnight sun")).toBe("nus thgindim");
});