const globalObj = require('global-object')

function strictDict(dict, Proxy = globalObj.Proxy) {
  if (!Proxy) {
    return dict
  }

  const proxy = new Proxy(dict, {
    get(dict, prop) {
      if (dict[prop] === undefined) {
        throw new TypeError(`${prop} is undefined`)
      }

      return dict[prop]
    }
  })

  return proxy
}

module.exports = strictDict
