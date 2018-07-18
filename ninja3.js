// ES6
class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.strenght = 3;
        this.speed = 3;
    }
    sayName(){
        console.log(`Welcome Ninja ${this.name}`);
    }
    // this.constructor.name would give you the name of the constuctor, not the name from constructor
    showstats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Strenght: ${this.strenght}, Speed: ${this.speed}`);
    }
    drinksake(){
        this.health += 10;
        console.log(`${this.name} drank Sake and increased health by 10.`);
    }
}
class Sensie extends Ninja{
    constructor(teacher){
        super(teacher);
        this.health = 200;
        this.speed = 10;
        this.strenght = 10;
        this.wisdeom = 10;
    }
    speakWisdom() {
        super.drinksake();
        console.log("What one programmer can do in one month, \ntwo programmers can do in two months.");
    }
}
const boss = new Sensie("Hokage");
boss.sayName();
boss.speakWisdom();
boss.showstats();
const blue = new Ninja("Naruto");
blue.sayName();
blue.drinksake();
blue.showstats();
