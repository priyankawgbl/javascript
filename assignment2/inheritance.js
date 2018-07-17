function Animal(name,age,color) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.details = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };

};

Animal.prototype.first = function() {
  alert(this.name );
}

var animal1 = new Animal("animal",43,"black");

function Dog(name,age,color,breed) {
  Animal.call(this, name,age,color);

  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
var dog = new Dog("sniff",43,"black","dog");
Dog.prototype.constructor = Dog;

