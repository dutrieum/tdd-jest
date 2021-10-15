const multiplication = require('../src/multiplication');

test('multiply 2 and 3 to equal 6', () => {
  expect(multiplication(2, 3)).toBe(6);
});

test('multiply a word and 3 to equal null', () => {
    expect(multiplication('word', 3)).toBeNull();
});

test('multiply a word and another word to equal null', () => {
    expect(multiplication('word', 'ok')).toBeNull();
});