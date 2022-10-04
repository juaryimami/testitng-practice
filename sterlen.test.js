const stringLength = require('./sterlen');
const reverseString = require('./sterlen');

test('count of the word "hello"', () => {
  expect(stringLength("hello")).toBe(5);
});
test('the revers of the string "book" is "koob" ', () => {
  expect(reverseString("book")).toBe('koob');
});