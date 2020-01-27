'use strict';

function add(...nums) {
  return nums.reduce((a, b) => a + b);
}

module.exports = add;
