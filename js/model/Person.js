 "use strict";

 export class Person {
     // private fields declarations
     #name = "";
     #dateOfBirth = null;
 
     // public fields declarations
     // name = "";
     // dateOfBirth = null;
 
     constructor(name, dateOfBirth) {
         this.#name = name;
         this.#dateOfBirth = dateOfBirth;
     }
 
     // -- Getters and Setters using getXXX and setXXX methods
     // Getters
     // getName() { return this.#name; }
     // getDateOfBirth() { return this.#dateOfBirth; }
 
     // // Setters
     // setName(name) {
     //     this.#name = name;
     // }
     // setDateOfBirth(dateOfBirth) {
     //     this.#dateOfBirth = dateOfBirth;
     // }
 
     // -- Getters and Setters using JS get and set syntax
     get name() { return this.#name; }
     get dateOfBirth() { return this.#dateOfBirth; }
 
     set name(value) {
         this.#name = value;
     }
     set dateOfBirth(value) {
         this.#dateOfBirth = value;
     }
 
     toString() {
         return `{Name: ${this.#name}, DateOfBirth: ${this.#dateOfBirth.getFullYear()}-${this.#dateOfBirth.getMonth()+1}-${this.#dateOfBirth.getDate()}}`;
     }
 }