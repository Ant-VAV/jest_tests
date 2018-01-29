'use strict';

function sum(a, b) {
    let result = a + b;
    if (result > 0) {
        return 'red';
    }
    return 'black';
}

module.exports = {
    sum
};
