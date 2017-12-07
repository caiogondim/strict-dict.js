const test = require('ava')
const strictDict = require('../')

test('returns prop as a normal object', test => {
  const dict = strictDict({
    a: 1,
    b: 2
  })

  test.is(dict.a, 1)
  test.is(dict.b, 2)
})

test('throws error if trying to get undefined prop', test => {
  const dict = strictDict({
    a: 1,
    b: 2
  })

  test.throws(() => dict.c, TypeError)
})

test('returns unmodified object if Proxy API is not available', test => {
  const dict = strictDict({
    a: 1,
    b: 2
  }, null)

  test.is(dict.a, 1)
  test.is(dict.b, 2)
  test.is(dict.c, undefined)
})
