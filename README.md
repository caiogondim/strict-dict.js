<img src="https://rawgit.com/caiogondim/strict-dict.js/master/logo/banner.svg" width="100%">

# strict-dict

<div>
  <img src="http://travis-ci.org/caiogondim/strict-dict.js.svg?branch=master" alt="Travis CI"> <img src="http://img.badgesize.io/caiogondim/strict-dict.js/master/build/strict-dict.umd.js?compression=gzip"> <img src='https://coveralls.io/repos/github/caiogondim/strict-dict.js/badge.svg' alt='Coverage Status' />
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
