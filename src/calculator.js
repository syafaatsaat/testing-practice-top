export class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  divide(dividend, divisor) {
    if (dividend < 0 && divisor < 0)
      return -(dividend / divisor);

    return dividend / divisor;
  }

  multiply(num1, num2) {
    if (num1 < 0 && num2 < 0)
      return -(num1 * num2);

    return num1 * num2;
  }
}