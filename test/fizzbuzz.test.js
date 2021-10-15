const {onenumber, fizzbuzz} = require('../src/fizzbuzz');

test('playing with the number 2', () => {
    expect(onenumber(2)).toBe(2);
});

test('playing with a number divisible by 3', () => {
    expect(onenumber(6)).toBe('Fizz');
});

test('playing with a number divisible by 5', () => {
    expect(onenumber(10)).toBe('Buzz');
});

test('playing with a number divisible by 3 and 5', () => {
    expect(onenumber(30)).toBe('FizzBuzz');
});

test('playing with a string', () => {
    expect(onenumber('number')).toBeNull();
});

test('playing with the whole list', () => {
    expect(fizzbuzz()).not.toBeNull();
});