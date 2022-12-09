/**
 * Create an object calledTeacherderived from thePersonclass, and 
 * \implement a method calledteachwhich receives a string calledsubject, 
 * andprints out:[teacher's name]is now teaching[subject]

 */

const Person = {
    initialize: function(name, age){
        this.name= name;
        this.age=age;
    }
}

const Teacher = Object.create(Person);

Teacher.teach = function(subjcet){
    console.log(`${this.name} teaches ${subjcet}`);
}


const t1 = Object.create(Teacher)
t1.initialize("Ana", 23);
t1.teach("maths");