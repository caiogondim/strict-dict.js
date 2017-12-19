!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){var e=require("global-object");module.exports=function(n,o){return void 0===o&&(o=e.Proxy),o?new o(n,{get:function(e,n){if(void 0===e[n])throw new TypeError(n+" is undefined");return e[n]}}):n}});
//# sourceMappingURL=strict-dict.umd.js.map
