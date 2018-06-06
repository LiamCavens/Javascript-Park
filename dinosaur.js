const Dinosaur = function(type){
    this.type = type;
    this.offspring = [];
}

Dinosaur.prototype.hasBabyDinos = function(years){
    for (i = 0; i < years; i++) {
        this.offspring.push(new Dinosaur(this.type));
        this.offspring.push(new Dinosaur(this.type));
        this.offspring.push(new Dinosaur(this.type));
    }
};

module.exports = Dinosaur;