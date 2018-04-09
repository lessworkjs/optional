[![Coverage Status](https://coveralls.io/repos/github/lessworkjs/optional.js/badge.svg?branch=master)](https://coveralls.io/github/lessworkjs/optional.js?branch=master) 
[![Build Status](https://travis-ci.org/lessworkjs/optional.js.svg?branch=master)](https://travis-ci.org/lessworkjs/optional.js)

# optional.js
Optionally load object parameters.

Idea based on the Laravel [optional](https://laravel.com/docs/5.6/helpers#method-optional) helper.

# Install
```
npm i optional.js
```

# Example
```js
const optional = require('optional.js');

const users = [{
  name: 'Jane',
}, {
  name: 'John',
  address: {
    street: '101 Main St.',
  },
}];


console.log(optional(users[0].address).street);
// null

console.log(optional(users[1].address).street);
// 101 Main St.
``` 
