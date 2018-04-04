const assert = require('assert')
const snake = require('./')

/**
 * Cases.
 */

var strings = {
  camel: 'thisIsAString',
  constant: 'THIS_IS_A_STRING',
  dot: 'this.is.a.string',
  pascal: 'ThisIsAString',
  sentence: 'This is a string.',
  snake: 'this_is_a_string',
  space: 'this is a string',
  title: 'This Is a String',
  junk: '-this__is$%a-string...'
}

/**
 * Create a test for a given case `key`.
 *
 * @param {String} key
 */

const test = key => {
    it(`should convert ${key} case`, () => {
        assert.equal(snake(strings[key]), 'this_is_a_string')
    })
}


/**
 * Tests.
 */

describe('to-snake-case', () => {
    for (let key in strings) test(key)
})
