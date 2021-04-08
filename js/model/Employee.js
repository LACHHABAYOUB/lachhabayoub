"use strict";

 import { Person } from "./person.js";
 
 export class Employee extends Person {
     
     // private fields
     #salary = 0.0;
     #hireDate = null;
 
     constructor(name, dateOfBirth, salary, hireDate) {
         super(name, dateOfBirth);
         this.#salary = salary;
         this.#hireDate = hireDate;
     }
 
     // Getters using JS get fieldname syntax
     get salary() { return this.#salary; }
     get hireDate() { return this.#hireDate; }
 
     // public instance method
     doJob(jobTitle) {
         console.log(`${super.name} is a ${jobTitle} who earns ${new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(this.#salary)}`);
     }
 
 }