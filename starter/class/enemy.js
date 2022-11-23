const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom, cooldown = 3000) {
    super(name, description, currentRoom);
    this.cooldown = cooldown;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    let random = Math.floor(Math.random(this.currentRoom.getExits().length));
    let exits = this.currentRoom.getExits();
    let newRoomIndex = exits[random];
    this.currentRoom = this.currentRoom.getRoomInDirection(newRoomIndex);
    this.cooldown += 3000;
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    this.attackTarget.applyDamage(this.strength);
    console.log(`${attackTarget.name}'s health is at ${attackTarget.health}`)
    this.cooldown += 3000;
  }

  applyDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.die();
    }
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else if (this.attackTarget) {
      this.attack();
    } else {
      this.scratchNose();
      this.rest();
    }
  }


  scratchNose() {
    this.cooldown += 3000;

    this.alert(`${this.name} scratches its nose`);

  }



}

module.exports = {
  Enemy,
};
