// Reference type
var object1 = { value: 10 };
var object2 = object1; //have the same object reference
var object3 = { value: 10 };

console.log(object1 === object2); // true
console.log(object2.value); // 10

console.log(object1 === object3); // false

// Context

// (this) key word referes to what object is is inside of

// Scope is different!

function a() {
  console.log(this); // It is inside of the window Object
}

const object4 = {
  value: 10,
  a: function () {
    console.log(this); // It is inside of the object4 Object
  },
};

a();
object4.a();

// Instantiation
// Making instances or multiple copies of an object
class Player {
  constructor(name, type) {
    console.log("Player", this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, and I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type, superPower) {
    super(name, type);
    this.superPower = superPower;
    console.log("Wizard", this);
  }

  play() {
    console.log(`WEEEEEEE! I'm a ${this.type}`);
  }
}

const player1 = new Wizard("Eslam", "Healer", "I'll make you feel better!");
const player2 = new Wizard("Ahmed", "Magician", "I make things disappear!");
