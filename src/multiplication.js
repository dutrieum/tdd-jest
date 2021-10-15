function multiplication(a, b) {
    let result = null;
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        result = a * b;
    }
    return result;
}
module.exports = multiplication;