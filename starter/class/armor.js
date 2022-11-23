const { Item } = require('./item');

class Armor extends Item {
    constructor(name, description, protection) {
        super(name, description);
        this.protection = protection;
    }
}

module.exports = {
    Armor,
  };
