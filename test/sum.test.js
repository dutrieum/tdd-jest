// Add the unit tests of the sum function here
const addition = require('../src/sum');

test('adds 2 + 3 to equal 5', () => {
  expect(addition(2, 3)).toBe(5);
});

test('adds word + 3 to equal 0', () => {
    expect(addition('word', 3)).toBe(0);
});

test('adds word + word to equal 0', () => {
    expect(addition('word', 'ok')).toBe(0);
});