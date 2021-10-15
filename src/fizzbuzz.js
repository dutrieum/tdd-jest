function onenumber(num) {
    let result = null;
    if (typeof(num) == 'number') {
        result = num;
        if (num % 5 == 0 && num % 3 == 0) {
            result = 'FizzBuzz';
        } else if (num % 3 == 0) {
            result = 'Fizz';
        } else if (num % 5 == 0) {
            result = 'Buzz';
        }
    }
    return result;
}

function fizzbuzz() {
    for (let index = 0; index <= 100; index++) {
        let listNumber = onenumber(index);
        console.log(listNumber);
    }
}

module.exports = {onenumber, fizzbuzz};