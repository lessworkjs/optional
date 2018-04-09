const test = require('japa');
const chai = require('chai');

const expect = chai.expect;

const optional = require('../src/');

const users = [{
  name: 'Jane',
}, {
  name: 'John',
  address: {
    street: '101 Main St.',
  },
}];

const user = users[1];

test.group('Optional', () => {
  test('should return null if missing address value.', () => {
    expect(optional(user.address).street0).to.be.null;
  });

  test('should return null if missing address.', () => {
    expect(optional(users[0].address).street).to.be.null;
  });

  test('should return null if missing address and value.', () => {
    expect(optional(users[0].address).street).to.be.null;
  });

  test('should return the street.', () => {
    expect(optional(user.address).street).to.equal('101 Main St.');
  });

  test('should return callback modified street.', () => {
    const newAddress = optional(user, user => ({
      name: user.name,
      address: {
        street: '202 Main St.',
      },
    }));

    expect(newAddress).to.deep.equal({
      name: 'John',
      address: {
        street: '202 Main St.',
      },
    });
  });
});