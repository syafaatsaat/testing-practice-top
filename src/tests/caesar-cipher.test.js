const caesarCipher = require("../caesar-cipher");

test(`Test wrapping 'z' to 'a'`, () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test(`Test case preservation`, () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test(`Test punctuation is left out`, () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});