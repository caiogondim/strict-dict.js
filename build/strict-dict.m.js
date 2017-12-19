var globalObj = require('global-object');
function strictDict(dict, Proxy) {
    if ( Proxy === void 0 ) Proxy = globalObj.Proxy;

    if (!Proxy) {
        return dict;
    }
    var proxy = new Proxy(dict, {
        get: function get(dict, prop) {
            if (dict[prop] === undefined) {
                throw new TypeError((prop + " is undefined"));
            }
            return dict[prop];
        }
    });
    return proxy;
}

module.exports = strictDict;
//# sourceMappingURL=strict-dict.m.js.map
