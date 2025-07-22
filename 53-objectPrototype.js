
// ✅ $$$$$$$$$$$$$$$$$ Object Prototype $$$$$$$$$$$$$$$$$ ✅ //

    // JavaScript uses prototypal inheritance, that means object can inherit properties and methods from other object via a prototype chain.
    
    // Every JavaScript object has an internal link to another object called its prototype.

    const person = {
        greet: function() {
            console.log("Hello!");
        }
    }

    const student = Object.create(person);

    student.name = "Shahbaz";

    student.greet();    // Output: "Hello!"



    // ✅ $$$$$$$$$$$$$$$$$ Constructor Function & Prototypes $$$$$$$$$$$$$$$$$ ✅ //

      // In below example, sayHello method is not stored in every Person instance—it lives on the prototype, shared across all instances.

      function Person(name) {
        this.name = name;
      }

      Person.prototype.sayHello = function() {
        console.log(`Hello, my name is ${this.name}`);
      };

      const alice = new Person("Alice");
      alice.sayHello(); // Hello, my name is Alice

    // ✅ $$$$$$$$$$$$$$$$$ Constructor Function & Prototypes $$$$$$$$$$$$$$$$$ ✅ //



    // ✅ $$$$$$$$$$$$$$$$$ Inheritance with Constructor Function $$$$$$$$$$$$$$$$$ ✅ //

      function Animal(name) {
        this.name = name;
      }

      Animal.prototype.speak = function() {
        console.log(`${this.name} makes a sound`);
      };

      function Dog(name, breed) {
        Animal.call(this, name); // Call parent constructor
        this.breed = breed;
      }

      // Inherit from Animal
      Dog.prototype = Object.create(Animal.prototype);
      Dog.prototype.constructor = Dog;

      // Extend Dog
      Dog.prototype.bark = function() {
        console.log(`${this.name} barks`);
      };

      const dog = new Dog("Buddy", "Golden Retriever");
      dog.speak(); // Buddy makes a sound
      dog.bark();  // Buddy barks

    // ✅ $$$$$$$$$$$$$$$$$ Inheritance with Constructor Function $$$$$$$$$$$$$$$$$ ✅ //

// ✅ $$$$$$$$$$$$$$$$$ Object Prototype $$$$$$$$$$$$$$$$$ ✅ //