// SOLID - Interface Segregation Principle

// in javascript there is no concept of interfaces. the principle says that all there should not be any unused methods in subclasses

/*
For example in TypeScript

interface GameCharacter{
name
reslience
power
move{}
attack{}
}

class HumanCharacter implements GameCharacter {
move{}
attack{}
}

class SuperTree implements GameCharacter{
  attack{}
  // No move - Unused
}
class Healer implements GameCharacter{
  move{}
  // No attack - Unused
}

*/
// Solution

class GameCharacter {
  constructor(name, power, resilience){
    this.name = name;
    this.power = power;
    this.resilience = resilience;
  }
}

const mover = {
  move(){
    console.log(`${this.name} is moving!`);
  }
}

const attacker = {
  attack(){
    console.log(`${this.name} is attacking!`);
  }
}

const healer = {
  heal() {
    console.log(`${this.name} is healing!`);
  }
}

class HumanCharacter extends GameCharacter{

  constructor(name,power, resilience, hasFamily){
    super(name, power, resilience);
    this.hasFamily = hasFamily;
  }

}

Object.assign(HumanCharacter.prototype,mover);
Object.assign(HumanCharacter.prototype,attacker);

class SuperTree extends GameCharacter{
  constructor(name, power, resilience, waterLevel) {
    super(name, power, resilience);
    this.waterLevel = waterLevel;
  }
}

Object.assign(SuperTree.prototype, attacker);

class Healer extends GameCharacter{
  constructor(name, power, resilience, potion) {
    super(name, power, resilience);
    this.potion = potion;
  }
}

Object.assign(Healer.prototype, healer);
Object.assign(Healer.prototype, mover);

const character = new HumanCharacter('Sam',100,80,true);
const tree = new SuperTree('Hodor',50,100,50);
const monk = new Healer('Monk',20,60,['red potion','green herbs']);

character.move();
tree.attack();
monk.move();
monk.heal();
