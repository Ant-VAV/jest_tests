'use strict';

function sum(a, b) {
    let result = a + b;
    if (result > 0) {
        return 'red';
    } else if (result < 0) {
        return 'blue'
    }
    return 'black';
}

module.exports = {
    sum
};