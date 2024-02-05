// Define the Unit class
class Unit {
    constructor(name, cost, power, resilience) {
      this.name = name;
      this.cost = cost;
      this.power = power;
      this.resilience = resilience;
    }
    attack(target) {
      target.resilience -= this.power;
    }
  }
  class Effect {
    constructor(name, cost, text, stat, magnitude) {
      this.name = name;
      this.cost = cost;
      this.text = text;
      this.stat = stat;
      this.magnitude = magnitude;
    }
    play(target) {
      if (target instanceof Unit) {
        if(this.stat==="resilience"){
          target.resilience+=this.magnitude;
        }else if(this.stat==="power"){
          target.power+=this.magnitude;
        }
      } else  {
        throw new Error("Target must be a unit!");
      }
    }
  }
  const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
  const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
  const HardAlgorithm = new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience",3);
  const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2);
  const PairProgramming = new Effect("Pair Programming",3,"	increase target's power by 2","power",2);
  
  
  
  console.log(RedBeltNinja.resilience);
  HardAlgorithm.play(RedBeltNinja);
  console.log(RedBeltNinja.resilience);
  
  console.log(RedBeltNinja.resilience);
  UnhandledPromiseRejection.play(RedBeltNinja);
  console.log(RedBeltNinja.resilience);
  
  console.log(RedBeltNinja.power);
  PairProgramming.play(RedBeltNinja);
  console.log(RedBeltNinja.power);
  
  console.log(BlackBeltNinja.resilience);
  RedBeltNinja.attack(BlackBeltNinja);
  console.log(BlackBeltNinja.resilience);