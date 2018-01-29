'use strict';

function sumTwo(a, b) {
    let result = a + b;
    if (result > 0) {
        return 'awesome red';
    }
    // else if (result < 0) {
    //     return 'great blue'
    // }
    return 'deep black';
}

module.exports = {
    sumTwo
};
