// Implement the sum function here
function addition(a, b) {
    let result = null;
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        result = a + b;
    }
    return result;
}
module.exports = addition;