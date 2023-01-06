const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
const { Room } = require("../class/room")
const { DarkRoom } = require("../class/darkroom");
const { Player } = require("../class/player");
const { Item } = require("../class/item");
const { Light } = require("../class/light");

describe("DarkRoom", function () {
    let newDarkRoom;
    let player;
    let light;

    this.beforeEach(function() {
        newDarkRoom = new DarkRoom("new dark room", "a dark room");
        player = new Player("Ryan", newDarkRoom);
        light = new Light("light", "a bright lamp");
    });

    it("should inherit from Room", function() {
        expect(newDarkRoom).to.be.an.instanceof(Room);
    });

    it("should show a description of 'You cannot see anything' when there is no light in the room", function() {
        expect(newDarkRoom.printRoom()).to.equal("You cannot see anything");
    });

    it("should print room normally when there is a light in the room", function() {
        let parentPrintRoom = chai.spy.on(newDarkRoom, "super.printRoom");
        expect(parentPrintRoom).to.have.been.called;
    });

    it("should print room normally when the player is holding a light", function() {
        player.items.push(light);
        expect(newDarkRoom.printRoom()).to.include("a dark room");
    });


});

describe("Light", function() {
    let light;

    this.beforeEach(function() {
        light = new Light("light", "a bright lamp");
    });

    it("should inherit from the Item class", function() {
        expect(light).to.be.an.instanceof(Item);
    });
});
