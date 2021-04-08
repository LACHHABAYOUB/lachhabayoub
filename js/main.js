 "use strict";

 import { Person } from "./model/person.js";
 import { Employee } from "./model/employee.js";
 
 (function() {
     // Create an array of Persons
     const people = [
         new Person("Ana Smith", new Date(1998, 11, 15)),
         new Person("Bob Jones", new Date(1945, 10, 16)),
         new Person("Carlos Slim Helu", new Date(1976, 8, 24))
     ];
 
     // Iterate and print Persons data
     for(const person of people) {
         console.log(person.toString());
     }
 
     // Accessing and changing the data
     // using the getter/setter methods
     const ana = people[0];
     
     // console.log(`Person1's name is: ${ana.getName()}, born on ${ana.getDateOfBirth().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`);
     console.log(`Person1's name is: ${ana.name}, born on ${ana.dateOfBirth.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`);
 
     // ana.setName("Anna Marie Hanson");
     ana.name = "Anna Marie Roberts";
 
     // console.log(`Person1's name has been updated to: ${ana.getName()}, born on ${ana.getDateOfBirth().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`);
     console.log(`Person1's name has been updated to: ${ana.name}, born on ${ana.dateOfBirth.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`);
 
     // Note: We cannot directly access private data-field/properties
     // Must go through getters/setters
     // console.log(ana.#name); // gives an error
 
     // console.log(ana.getName());
     console.log(ana.name);
 
     ///-- Process Employee data --///
     const empJimHanson = new Employee("Jim Hanson", null, 245990.00, null);
     empJimHanson.doJob("Software Engineer");
 
     // Update his name through the setter in Person super-class
     empJimHanson.name = "Jim William Hanson";
     empJimHanson.doJob("Sr. Software Engineer");
 
 })();