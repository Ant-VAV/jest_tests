'use strict';

function sumTwo(a, b) {
    let result = a + b;
    if (result > 0) {
        return 'awesome red';
    }
    return 'deep black';
}

module.exports = {
    sumTwo
};
