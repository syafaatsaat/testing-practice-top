import { Calculator } from "../calculator.js";

const calculator = new Calculator();

// Test: add -------------------------------------------------------------------

test('Adding positive numbers: 6 + 7, returns 13', () => {
  expect(calculator.add(6, 7)).toBe(13);
});

test('Adding negative numbers: (-6) + (-7), returns -13', () => {
  expect(calculator.add(-6, -7)).toBe(-13);
});

test('Adding positive and negative numbers: 6 + (-7), returns -1', () => {
  expect(calculator.add(6, -7)).toBe(-1);
});

// Test: subtract --------------------------------------------------------------

test('Subtracting positive numbers: 69 - 2, returns 67', () => {
  expect(calculator.subtract(69, 2)).toBe(67);
});

test('Subtracting negative numbers: (-69) - (-2), returns -67', () => {
  expect(calculator.subtract(-69, -2)).toBe(-67);
});

test('Subtracting positive from negative numbers: (-69) - 2, returns -71', () => {
  expect(calculator.subtract(-69, 2)).toBe(-71);
});

// Test: divide ----------------------------------------------------------------

test('Dividing positive numbers: 12 / 2, returns 6', () => {
  expect(calculator.divide(12, 2)).toBe(6);
});

test('Dividing negative numbers: (-12) / (-2), returns -6', () => {
  expect(calculator.divide(-12, -2)).toBe(-6);
});

test('Dividing numbers where dividend is negative: (-12) / 2, returns -6', () => {
  expect(calculator.divide(-12, 2)).toBe(-6);
});

test('Dividing numbers where divisor is negative: 12 / (-2), returns -6', () => {
  expect(calculator.divide(12, -2)).toBe(-6);
});

test('Dividing 0 by any number: 0 / 5, returns 0', () => {
  expect(calculator.divide(0, 5)).toBe(0);
});

test('Dividing a number by 0: 5 / 0, returns Infinity', () => {
  expect(calculator.divide(5, 0)).toBe(Infinity);
});

test('Dividing a negative number by 0: (-5) / 0, returns -Infinity', () => {
  expect(calculator.divide(-5, 0)).toBe(-Infinity);
});

test('Dividing 0 by 0: 0 / 0, returns NaN', () => {
  expect(calculator.divide(0, 0)).toBeNaN();
});

test('Division results in decimal places: 5 / 4, returns 1.25', () => {
  expect(calculator.divide(5, 4)).toBeCloseTo(1.25);
});

// Test: multiply --------------------------------------------------------------

test('Multiplying positive numbers: 4 x 2, returns 8', () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test('Multiplying negative numbers: (-4) x (-2), returns -8', () => {
  expect(calculator.multiply(-4, -2)).toBe(-8);
});

test('Multiplying positive and negative numbers: (-4) x (2), returns -8', () => {
  expect(calculator.multiply(-4, 2)).toBe(-8);
});

test('Multiplying a number by 0: 4 x 0, returns 0', () => {
  expect(calculator.multiply(4, 0)).toBe(0);
});