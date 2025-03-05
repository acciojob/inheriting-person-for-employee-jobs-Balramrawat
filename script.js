
function Person(name, age) {
	this.name=namethis.age=age
	
}
Person.prototype.greet=function(){
	console.log(`Hello, my name is${this.name}, I am ${this.age} 
	year old.`)
}

function Employee(name, age, jobTitle) {
	Person.call(name,age)
	this.jobTitle=jobTitle
}

Employee.prototype=Object.create(Person.prototype)
Employee.prototype.constructor=Employee

Employee.prototype.jobGreet=function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} year
	 old, and my job title is ${this.jobTitle}`)
}


window.Person = Person;
window.Employee = Employee;



const person=new Person("Balram",24)
person.greet();

const enployee=new Employee("balram",24,"developer")
person.greet();
employee.jobGreet();





