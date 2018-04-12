[![Coverage Status](https://coveralls.io/repos/github/lessworkjs/optional.js/badge.svg?branch=master)](https://coveralls.io/github/lessworkjs/optional.js?branch=master) 
[![Build Status](https://travis-ci.org/lessworkjs/optional.svg?branch=master)](https://travis-ci.org/lessworkjs/optional)

# Optional
Optionally load object parameters. Return the parameter or null.

Idea based off the Laravel [optional](https://laravel.com/docs/5.6/helpers#method-optional) helper.

# Install
```
npm i @lessworkjs/optional
```

# Example
```js
const optional = require('@lessworkjs/optional');

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

You can also use an optional callback:
```js
const results = optional(users[0], user => ({
  name: user.name,
  address: {
    street: '202 Main St.',
  },
}));

console.log(results)
/**
 * {
      name: 'John',
      address: {
        street: '202 Main St.',
      },
    }
 */
```
  
