class Character {

  constructor(name, description, currentRoom) {
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = [];
    this.strength = 10;
    this.health = 100;
    this.armor = 0;
  }

  applyDamage(amount) {
    this.health -= (amount - this.armor);
    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    this.currentRoom.items.push(...this.items);
    this.currentRoom = null;
    this.items =[];
  }

}

module.exports = {
  Character,
};
