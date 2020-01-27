'use strict';

const add = require('../arithmetic');

describe('Arithmetic', () => {
  describe('Add', () => {
    it('should add two numbers', () => {
      const numA = 1;
      const numB = 2;
      const expected = numA + numB;

      const actual = add(numA, numB);

      expect(actual).toEqual(expected);
    });

    it('should add three numbers', () => {
      const numA = 1;
      const numB = 2;
      const numC = 3;
      const expected = numA + numB + numC;

      const actual = add(numA, numB, numC);

      expect(actual).toEqual(expected);
    });
  });
});
