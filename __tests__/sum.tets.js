'use strict';

const sum = require('./../common/sum').sum;

test('red', () => {
    expect(sum(1, 2)).toBe('red');
});

test('blue', () => {
    expect(sum(-1, -2)).toBe('blue');
});

test('black', () => {
    expect(sum(2, -2)).toBe('black');
});
