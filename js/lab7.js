// Question 1
// output : undefined
//          8
//          8
//          9
//          10
//          1


// Question 2
// A variable's scope is the range of the script where it is visible. Variables have either global or local scope. 
// A global variable exists only once in a script, and is visible in every function. Modifications to it in one function 
// are permanent and visible to all functions. Unless declared otherwise, all variables in a script are global.
// Global variables are useful for values that are relatively constant, or that many functions in the script must access, such as a session id.

// A local variable, however, has a limited scope: it exists only within the block that it is declared in. Once that block ends, 
// the variable is destroyed and its values lost. A local variable of the same name declared elsewhere is a different variable.
// A local variable can even exist multiple times simultaneously, if its block is entered again before it's exited - i.e. 
// a recursive function call. Each call of the function will have a distinct local variable.


// For Example : Let take the first example :

// X,A,B,C There are global Scope
// F,X Local To C (Inside C Function )
// A,B,C Local to F ( Inside C Function )

// Question 3
//a=Global Scope => False
//b=yes
//c=false
//d=yes
//e=yes

// Question 4

// output : 81
//          25

// Question 5

// Output : Alert With box Show 10  


// Question 6
const count = (function () {
    let counter = 0;
    const getCounter + function (){
        return counter ;
    }
    function add() {
        return counter += 1;
    }
    function reset() {
        counter = 0;
    }
    return {
        getCounter:getCounter,
        add: add,
        reset: reset
    }
})();

// Question 7:
/**
 * The free variable is counter. 
 * A free variable is the variable that are referred to by a function that is not one of its parameters or local variables;
 */

// Question 8:
var add_maker = (function (x) {
    let counter = 0;
    return function () {
        return counter += x;
    }
});

// Question 9:
/**
 * Declares and immediately calls an anonymous function.
 */

// Question 10:
const Employee = (function () {
   
    let name = '',
        age = 0, 
        salary = 0;
    
    
    const getAge = function () {
        return age;
    }
    const getSalary = function () {
        return salary;
    }
    const getName = function () {
        return name;
    }

    const setAge = function (a) {
        age = a;
    }

    const setName = function (n) {
        name = n;
    }

    const setSalary = function (s) {
        salary = s;
    }
    const increaseSalary = function (percentage) {
        salary += salary * (1+ percentage/100);
        return getSalary();
    }
    const incrementAge = function () {
       let newAge = getAge()+1;
        return newAge;
    }

    return {
        setAge: setAge,
        setName: setName,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    }
})();

// Question 11:
Employee.address = "";
Employee.setAddress = function(addr) {
    this.address = addr;
};
Employee.getAddress = function() {
    return this.address
};   
