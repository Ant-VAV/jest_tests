'use strict';

const { sum } = require('./../common/sum');

describe('Sum One', () => {
    it('red', () => {
        expect(sum(1, 2)).toBe('red');
    });

    it('black', () => {
        expect(sum(2, -2)).toBe('black');
    });
});
