'use strict';

const add = require('../arithmetic');

describe('Arithmetic', () => {
  describe('Add', () => {
    it('should add two numbers', () => {
      const actual = add(1, 2);
      expect(actual).toEqual(3);
    });
  });
});
