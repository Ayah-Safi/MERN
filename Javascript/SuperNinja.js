class Ninja{

    constructor(name,health,speed,strength){
        this.name = name;
        this.health = health || 90;
        this.speed = speed || 3;
        this.strength = strength || 3;
    }
    sayName(){
        console.log("My name is " + this.name);
    }
    showStats() {
        console.log(`I am ${this.name}, my health is ${this.health}, I can run at speed of ${this.speed}, and my strength is ${this.strength}`);
    }
    drinkSake(){

        this.health = this.health+10;
    }
}

class Sensei extends  Ninja {
    
    constructor(name, wisdom) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom || 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        console.log(`my health is ${this.health}`)
    }
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();

const sensei1 = new Sensei('Master Splinter')
sensei1.speakWisdom();
sensei1.showStats()