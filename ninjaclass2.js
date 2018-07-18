// This is ES5
function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log("My ninja name is " + this.name)
    }
    this.showstats = function(){
        console.log("Name: " + this.name + " Health: " + this.health + " Speed: " + speed + " Strength: " + strength);
    }
    // Prototype is used to get data when you can't, I was about to get data just by using 'this'
    Ninja.prototype.drinkSake = function(){
        this.health = this.health + 10;
        return this;
    }
    Ninja.prototype.punch = function(fighter){
        fighter.health = fighter.health -5;
        console.log(fighter.name + " was punched by " + this.name + " and lost 5 health!")
    }
    this.kick = function(fighter){
        const damage = strength * 5;
        fighter.health -= damage;
        console.log(fighter.name + " was kicked by " + this.name + " and lost " + damage + " Health!");
		return this;
    }
}
var ninja1 = new Ninja("Hyabusa");
var ninja2 = new Ninja("Tony");
ninja1.sayName();
ninja1.showstats();
ninja1.punch(ninja2);
ninja2.showstats();

