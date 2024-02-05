class Ninja{

    constructor(name,health,speed,strength){
        this.name = name;
        this.health = 90 ;
        this.speed = 3 ;
        this.strength = 3 ;
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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();