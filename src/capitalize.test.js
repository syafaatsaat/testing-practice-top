const capitalize = require("./capitalize");

test('capitalizing "stateside" returns "Stateside"', () => {
  expect(capitalize("stateside")).toBe("Stateside");
});