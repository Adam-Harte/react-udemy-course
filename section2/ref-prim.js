const person = {
   name: 'Max'
 }

 const secondPerson = person;

 person.name = 'Manu';

 console.log(secondPerson);

 const otherPerson = {
   name: 'Max'
 }

 const otherSecondPerson = {
   ...otherPerson
 };

 otherPerson.name = 'Manu';

 console.log(otherSecondPerson);