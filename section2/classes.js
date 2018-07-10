class Human {
   constructor() {
     this.gender = 'male';
   }

   printGender() {
     console.log(this.gender)
   }
 }

 class Person extends Human {
   constructor()  {
     super();
     this.name = 'Max';
     this.gender = 'female';
   }

   printMyName() {
     console.log(this.name)
   }
 }

 const person = new Person();
 person.printMyName();
 person.printGender();

 class NewHuman {
     gender = 'female';

   printGender = () => {
     console.log(this.gender)
   }
 }

 class NewPerson extends Human {
     name = 'Adam';
     gender = 'male';

   printMyName = () => {
     console.log(this.name)
   }
 }

 const newPerson = new NewPerson;
 newPerson.printMyName();
 newPerson.printGender();