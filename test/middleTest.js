const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
    it("returns 4,5 for [2,8,7,0,4,5]", () => {
      assert.deepEqual(middle([2,8,7,0,4,5]), '4,5');
    });

  });
