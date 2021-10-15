// Add the unit tests of the sum function here
const addition = require('../src/sum');

test('adds 2 + 3 to equal 5', () => {
  expect(addition(2, 3)).toBe(5);
});

test('adds word + 3 to equal null', () => {
    expect(addition('word', 3)).toBeNull();
});

test('adds word + word to equal null', () => {
    expect(addition('word', 'ok')).toBeNull();
});