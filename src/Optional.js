class Optional {
  constructor(value) {
    this.value = value;

    return new Proxy(this, {
      get(target, property) {
        if (value === null || typeof value === 'undefined') {
          return null;
        }

        if (value[property]) {
          return value[property];
        }

        return null;
      },
    });
  }
}

module.exports = Optional;