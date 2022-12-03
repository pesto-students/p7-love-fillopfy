/**
 * 
 * Exercise 3.2:Create 3 simple functions where call, bind and 
 * apply are used. The intention of this exercise isto understand 
 * how they work and their differences.
 * 
 */


// call

const Animal = {
    getAnimalName: function(){
        return "Animal name is "+ this.animal_name
    },
    getAnimalColor: function(){
        return "Animal color is " + this.animal_color;
    },
    getAnimalLifeSpan: function(){
        return "Animal total life span is "  + this.animal_lifespan
    }
}


const Dog = {
    animal_name: "DOG",
    animal_color: 'Shady white',
    animal_lifespan: '16 years'
}

const Cat = {
    animal_name: 'Cat',
    animal_color: 'Shady black',
    animal_lifespan: '10 years'
}


console.log(Animal.getAnimalName.call(Dog));
console.log(Animal.getAnimalLifeSpan.call(Dog))
console.log(Animal.getAnimalColor.call(Dog))
Animal.getAnimalName.call(Cat);

/***
 * Question to ask: When using arrow function inside animal object, 
 * it is giving undefined even with call method, basically, when used arrow function, 
 * this is referring to global object instead of object upon which call method is called 
 */



// bind

const car = {
    name: "Polerio",
    model: 2022,
    fullName: function(){
        return "Car name is "+ this.name;
    }
}

const bike = {
    name: "Hunter",
    color: "Black"
}

let car_name = car.fullName.bind(bike);
console.log(car_name());


// apply

var numbers = [1, 4, 2, 8, 10, 12];
var max = Math.max.apply(null, numbers);

console.log(max);

