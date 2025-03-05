
// function Person(name, age) {
// 	this.name=namethis.age=age
	
// }
// Person.prototype.greet=function(){
// 	console.log(`Hello, my name is${this.name}, I am ${this.age} 
// 	year old.`)
// }

// function Employee(name, age, jobTitle) {
// 	Person.call(name,age)
// 	this.jobTitle=jobTitle
// }

// Employee.prototype=Object.create(Person.prototype)
// Employee.prototype.constructor=Employee

// Employee.prototype.jobGreet=function(){
// 	console.log(`Hello, my name is ${this.name}, I am ${this.age} year
// 	 old, and my job title is ${this.jobTitle}`)
// }


// const person=new Person("Balram",24)
// person.greet();

// const enployee=new Employee("balram",24,"developer")
// person.greet();




class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }  
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); 
        this.jobTitle = jobTitle;
    }
    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}
const person = new Person("Alice", 25);
person.greet(); 

const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();


window.Person = Person;
window.Employee = Employee;


