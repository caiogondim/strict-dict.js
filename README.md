<img src="./logo/banner.svg" width="100%" />

<h1 align="center">strict-dict.js</h1>

<div align="center">
  <img src="http://travis-ci.org/caiogondim/strict-dict.js.svg?branch=master" alt="Travis CI"> <img src="http://img.badgesize.io/caiogondim/strict-dict.js/master/src/index.js?compression=gzip"> <img src="https://codecov.io/gh/caiogondim/strict-dict.js/branch/master/graph/badge.svg" alt="Code coverage">
</div>

<br>

Object (dictionary) that throws `TypeError` when trying to get an undefined property.

## Installation

```
npm install strict-dict -S
```

## Usage

```js
const obj = strictDict({
  a: 1,
  b: 2
})

obj.a // -> 1
obj.b // -> 2
obj.c // -> throws TypeError, since c is undefined
```

## Credits
- Icon by Thomas Helbig from the Noun Project

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
