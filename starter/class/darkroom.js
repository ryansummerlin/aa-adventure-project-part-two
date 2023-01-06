const { Room } = require('./room');
const { Light } = require('./light');

class DarkRoom extends Room {

    constructor(name, description) {
        super(name, description);
    }

    printRoom() {
        if (this.items.some(el => el instanceof Person)) {
            super.printRoom();
        } else {
            console.log("You cannnot see anything");
            return "You cannot see anything";
        }
    }

}

module.exports = {
    DarkRoom,
  };
