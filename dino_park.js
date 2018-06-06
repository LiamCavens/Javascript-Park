const Dinosaur = require("./dinosaur.js");

let dinosaur;

const DinoPark = function(name){
    this.name = name;
    this.enclosure = [];
};

DinoPark.prototype.addDino = function(dinosaur){
    this.enclosure.push(dinosaur);
};

DinoPark.prototype.removeDinoType = function(dinoType){
    for (i = 0; i < this.enclosure.length; i++){
        if(this.enclosure[i].type == dinoType) {
            this.enclosure.splice(i, 1);
            i--;
        }
    }
}

DinoPark.prototype.dinosWithMoreThatTwoBabies = function(){
    let lotsaBabies = [];

    for (dinosaur of this.enclosure){
        if (dinosaur.offspring.length > 2){
        lotsaBabies.push(dinosaur);
        }
    }
    return lotsaBabies;
}

DinoPark.prototype.getDinoCountPerYear = function(years){
    let dinoCount = 0;

    for (dinosaur of this.enclosure){
        dinoCount += 1 + (3 * years);
    }
    return dinoCount;
}

DinoPark.prototype.addOffspringToEnclosure = function(){
    for(dinosaur.offspring in dinosaur){
        this.enclosure.push(dinosaur.offspring);
    }
}

DinoPark.prototype.getAllDinosPerYear = function(years){
    return (this.getAllDinosPerYear(years) + this.addOffspringToEnclosure())
}

module.exports = DinoPark;
