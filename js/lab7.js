// Question 1
// output : undefined889101


// Question 2
// Global Scope : a ,b 
//  Local Scope : f,x

// Question 3
//a=no
//b=yes
//c=yes
//d=yes
//e=yes

// Question 4

// output : 8125

// Question 5

// nothing because the condition doesnt exist  


// Question 6
const count = (function () {
    let counter = 0;
    function add() {
        return counter += 1;
    }
    function reset() {
        counter = 0;
    }
    return {
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
    let name = '', age = 0, salary = 0;
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
        salary += salary * percentage;
        return getSalary();
    }
    const incrementAge = function () {
        age += 1;
        return getAge();
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