/** 54 OBJECT ORIENTED JavaScript 
 * Factory pattern, Constructor pattern, Prototype pattern
 * Objects are group of name-value pairs
 */
// When a function is created inside an object, they are called METHODS!!! // NEW OBJECT !!!
// var person = { 
// name: "CodeSign Design", 
// sayName: function() {
//     alert(this.name);
// }
// };
// person.sayName('CodeSign Design');

/**
 * 55 FACTORY PATTERN
 */
// function createPerson(name, age, job) {
//     var obj = new Object();
//     obj.name = name;
//     obj.age = age;
//     obj.job = job;
//     obj.sayName = function() {
//         alert(this.name)
//     };
//     return obj;
// }
// var person1 = createPerson("Coder", 50, "Developer");
// var person2 = createPerson("Ryan", 30, "Developer");
// console.log(person1, person2);

/** 56 CONSTRUCTOR PATTERN
 * The only difference between constructor function and other functions
 * is the way in which they are called.
 * Any function that is called with a new operator acts as a constructor
 */
// function createPerson(name, age, job) {this
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = function() {
//         alert(this.name)
//     };
// }
// // HERE: they are called using "new" keyword
// var person1 = new createPerson("Coder", 50, "Developer");
// var person2 = new createPerson("Ryan", 30, "Developer");
// console.log(person1, person2);
// OUTPUT: 
// createPerson {name: "Coder", age: 50, job: "Developer", sayName: ƒ} 
// createPerson {name: "Ryan", age: 30, job: "Developer", sayName: ƒ}

// IMPORTANT: THERE IS CONVENTION TO ALWAYS USE UPPERCASE LETTER
// function Person(name, age, job) {this
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = function() {
//         alert(this.name)
//     };
// }
// // HERE: they are called using "new" keyword
// var person1 = new Person("Coder", 50, "Developer");
// var person2 = new Person("Ryan", 30, "Developer");
// console.log(person1, person2);

/** 57 PROTOTYPE PATTERN
 * whenever function is created its PROTOTYPE PROPERTY IS ALSO CREATED
 * ...WHICH IS AN OBJECT
 * Person.prototype.constructor points to Person - (itself)! 
 * Instead of assigning object information in the constructor
 * ....they can be assigned directly to the prototype
 */
// function Person(name, age, job) {this
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = function() {
//         alert(this.name)
//     };
// }
// // HERE: they are called using "new" keyword
// var person1 = new Person("Coder", 50, "Developer");
// var person2 = new Person("Ryan", 30, "Developer");
// console.log(Person.prototype.constructor);

function Person() {
    //
}
// THIS WAY IS NOT BETTER !!!
// Person.prototype.name = "CodeSign";
// Person.prototype.age = 50;
// Person.prototype.sayName = function(){
// alert(this.name);
// };

// THIS WAY IS BETTER ! ! ! @ @ @
// Person.prototype = {
//     constructor: Person,
//     name: "CodeSign",
//     age: 50,
//     sayName: function(){
//         alert(this.name);
//     }
// }

// var person1 = new Person();
// person1.sayName();
// var person2 = new Person();
// person1.sayName();
// alert(Person.prototype.isPrototypeOf(person1));
// alert(Person.prototype.isPrototypeOf(person2));
// OBJECT KEYS
// var keys = Object.keys(Person.prototype);
// console.log(keys);

/** 58 COMBINATION OF CONSTRUCTOR AND PROTOTYPE PATTERN
 *  with this approach, each instance ends up with its own copy
 * of the instance properties
 * but they all share references to methods...
 */
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['DrCode', 'CodeSign'];
}
Person.prototype = {
    constructor: Person,
    sayName: function(){
        alert(this.name);
    }
};
var person1 = new Person('DrCode', '50', 'Web Developer');
person1.friends.push('Zen')
var person2 = new Person('CodeSign', '30', 'Web Doctor');
console.log(person1, person2);

