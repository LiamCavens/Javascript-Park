const assert = require("assert");
const Dinosaur = require("../dinosaur.js");
const DinoPark = require("../dino_park.js");

describe("DinoPark", function(){

let dinosaur;
let dinoPark;

    beforeEach(function(){
        dinosaur = new Dinosaur("T-Rex");
        dinosaur2 = new Dinosaur("Raptor");
        dinosaur3 = new Dinosaur("Ptyredactol");
        dinoPark = new DinoPark("Dino World");
    });

    it("Enclosure starts off empty", function(){
        assert.strictEqual(dinoPark.enclosure.length, 0);
    });

    it("Should be able to add Dinosaur to enlosure", function(){
        dinoPark.addDino(dinosaur);
        assert.strictEqual(dinoPark.enclosure.length, 1);
    });

    it("Should be able to remove all of a type of dinosaur", function(){
        dinoPark.addDino(dinosaur);
        dinoPark.addDino(dinosaur2);
        dinoPark.addDino(dinosaur2);
        dinoPark.removeDinoType("Raptor");
        assert.strictEqual(dinoPark.enclosure.length, 1);
    });

    it("should be able to return dino's with 2 or more offspring", function(){
        dinoPark.addDino(dinosaur);
        dinoPark.addDino(dinosaur2);
        dinoPark.addDino(dinosaur3);
        dinosaur.offspring.length = 2;
        dinosaur2.offspring.length = 3;
        dinosaur3.offspring.length = 4;
        assert.strictEqual(dinoPark.dinosWithMoreThatTwoBabies().length, 2);
    });

    it("Should be able to calculate dinosaurs with one dino after 1 year", function(){
        dinoPark.addDino(dinosaur);
        assert.strictEqual(dinoPark.getDinoCountPerYear(1), 4)
    });

    it("Should be able to calculate dinosaurs with two dino after 1 year", function(){
        dinoPark.addDino(dinosaur);
        dinoPark.addDino(dinosaur2);
        assert.strictEqual(dinoPark.getDinoCountPerYear(1), 8)
    });

    it("Should be able to calculate dinosaurs with two dino after 2 year", function(){
        dinoPark.addDino(dinosaur);
        dinoPark.addDino(dinosaur2);
        dinoPark.addOffspringToEnclosure();
        assert.strictEqual(dinoPark.getDinoCountPerYear(2), 35)
    });

    // it("should be alble to calculate dinosaurs with three dinos after 3 year", function(){
    //     dinoPark.addDino(dinosaur);
    //     dinoPark.addDino(dinosaur2);
    //     dinoPark.addDino(dinosaur2);
    //     dinoPark.addOffspringToEnclosure();
    //     assert.strictEqual(dinoPark.getDinoCountPerYear(3), 150)
    // })
});

describe("Dinosaur", function(){

let dinosaur;
let dinoPark;

    beforeEach(function(){
        dinosaur = new Dinosaur("T-Rex");
        dinoPark = new DinoPark("Dino World");
    });

    it("Dinosaur should have type", function(){
        assert.strictEqual(dinosaur.type, "T-Rex")
    });

    it("Should have a number of offspring per year", function(){
        dinosaur.hasBabyDinos(1);        
        assert.strictEqual(dinosaur.offspring.length, 3)
    });
});