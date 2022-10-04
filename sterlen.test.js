const stringLength = require('./sterlen');

test('count of the word "hello"', () => {
  expect(stringLength("hello")).toBe(5);
});