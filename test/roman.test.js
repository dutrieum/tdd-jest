const numberToRoman = require('../src/roman');

test('translate 1 in roman numerals', () => {
  expect(numberToRoman(1)).toBe('I');
});

test('translate 2 in roman numerals', () => {
  expect(numberToRoman(2)).toBe('II');
});

test('translate 3 in roman numerals', () => {
  expect(numberToRoman(3)).toBe('III');
});

test('translate 4 in roman numerals', () => {
  expect(numberToRoman(4)).toBe('IV');
});

test('translate 5 in roman numerals', () => {
  expect(numberToRoman(5)).toBe('V');
});