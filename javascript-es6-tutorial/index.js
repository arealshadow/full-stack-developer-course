// import { fellowShip, total } from './fellowShip';
// console.log(fellowShip, total);
// import multiply from './math';
// console.log(multiply(2, 5));

// import Animal from './Animal.js'
//
// class Lion extends Animal {
//   constructor(name, height, color) {
//   super(name, height);
//   this.color = color;
// }
// hello() {
//   console.log(`Hi, im ${this.name} from yolo`);
// }
// }
//
// let son = new Lion("simba", 2, "golden");
// son.hello();
// class Calculator {
//   static multiply(a, b) {
//     return a*b;
//   }
//   static add (a, b) {
//     return a+b;
//   }
// }
//
// let a = Calculator.add(5, 7);
// console.log(a);

function Wizard(name, house, pet) {
  this.name = name;
  this.house = house;
  this.pet = pet;

  this.greet = () => `im ${this.name} from ${this.house}`
}
let harry = new Wizard("Harry", "griff", "owl");
console.log(harry.greet());
