/*

1. What are the different data types present in javascript?

Primitive Types : 

String , BitInt , Boolean ,Undefined  , 

Non-primitive types - Object - to store multiple types

2. Explain Hoisting in javascript.
Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top.

This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.

3. Difference between “ == “ and “ === “ operators.

Both are comparison operators. The difference between both the operators is that,“==” is used to compare values whereas, “ === “ is used to compare both value and types.

4. Explain Implicit Type Coercion in javascript.
Implicit type coercion in javascript is automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.


5. Is javascript a statically typed or a dynamically typed language?

JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to statically typed language, where the type of a variable is checked during compile-time.


What is NaN property in JavaScript?
NaN property represents “Not-a-Number” value. It indicates a value which is not a legal number.

typeof of a NaN will return a Number .

To check if a value is NaN, we use the isNaN() function,

8. What is an Immediately Invoked Function in JavaScript?
An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.

Syntax of IIFE :

(function(){ 
  // Do something;
})();

7. Explain passed by value and passed by reference.

In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference

9. Explain Higher Order Functions in javascript.
Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

Higher order functions are a result of functions being first-class citizens in javascript.

10. Explain “this” keyword.
The “this” keyword refers to the object that the function is a property of.

The value of “this” keyword will always depend on the object that is invoking the function.

function doSomething() {
  console.log(this);
}
        
doSomething();

var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
}
        
obj.getName();

var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
        
}
        
var getName = obj.getName;
        
var obj2 = {name:"akshay", getName };
obj2.getName();

===============================================================================================================================

11. Explain call(), apply() and, bind() methods.

call()

It’s a predefined method in javascript. This method invokes a method (function) by specifying the owner object.

Example 1:

function sayHello(){
  return "Hello " + this.name;
}
        
var obj = {name: "Sandy"};
        sayHello.call(obj);
        // Returns "Hello Sandy"

          call() method allows an object to use the method (function) of another object.

apply()

The apply method is similar to the call() method. The only difference is that,

call() method takes arguments separately whereas, apply() method takes arguments as an array.

function saySomething(message){
  return this.name + " is " + message;
}
        
var person4 = {name:  "John"};
        
saySomething.apply(person4, ["awesome"]);

bind()

This method returns a new function, where the value of “this” skeyword will be bound to the owner object, which is provided as a parameter.

Example with arguments:

var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
        
var person1 = {name:  "Vivek"};
        
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
        
// Binds the displayDetails function to the person1 object
        
        
detailsOfPerson1();
// Returns Vivek, bike details: TS0452, Thunderbird

===============================================================================================================================

12. What is currying in JavaScript?

Currying is an advanced technique to transform a function of arguments n, to n functions of one or less arguments

===============================================================================================================================

13. Explain Scope and Scope Chain in javascript.

Scope in JS, determines the accessibility of variables and functions at various parts in one’s code.

In general terms, the scope will let us know at a given part of code, what are the variables and functions that we can or cannot access.

There are three types of scopes in JS:

Global Scope
Local or Function Scope
Block Scope
===============================================================================================================================

14. Explain Closures in JavaScript.

Closures is an ability of a function to remember the variables and functions that are declared in its outer scope.

var Person = function(pName){
  var name = pName;

  this.getName = function(){
    return name;
  }
}

var person = new Person("Neelesh");
console.log(person.getName());
========================================================================================================================

15. What are object prototypes?

All javascript objects inherit properties from a prototype.

A prototype is a blueprint of an object. Prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object.

Let’s see prototypes help us use methods and properties:

var arr = [];
arr.push(2);

console.log(arr); // Outputs [2]

In the code above, as one can see, we have not defined any property or method called push on the array “arr” but the javascript engine does not throw an error.

The reason being the use of prototypes. As we discussed before, Array objects inherit properties from the Array prototype.

The javascript engine sees that the method push does not exist on the current array object and therefore, looks for the method push inside the Array prototype and it finds the method.

Whenever the property or method is not found on the current object, the javascript engine will always try to look in its prototype and if it still does not exist, it looks inside the prototype's prototype and so on.
===============================================================================================

16. What are callbacks?
A callback is a function that will be executed after another function gets executed.

In javascript, functions are treated as first-class citizens, they can be used as an argument of another function, can be returned by another function and can be used as a property of an object.

Functions that are used as an argument to another function are called callback functions.
===============================================================================================

The URL.createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.

The URL lifetime is tied to the document in the window on which it was created. The new object URL represents the specified File object or Blob object.

To release an object URL, call revokeObjectURL().

const objectURL = URL.createObjectURL(object)

object - A File, Blob, or MediaSource object to create an object URL for.
Return value - A DOMString containing an object URL that can be used to reference the contents of the specified source object.

===============================================================================================

A DOMString is a sequence of 16-bit unsigned integers, typically interpreted as UTF-16 code units. This corresponds exactly to the JavaScript primitive String type. When a DOMString is provided to JavaScript, it maps directly to the corresponding String.


===============================================================================================

const whiteList = ["http://localhost:3000"];

 whiteList.indexOf(origin) !== -1 - if not present or position will get return 

===============================================================================================

===============================================================================================

===============================================================================================


===============================================================================================


===============================================================================================


===============================================================================================

===============================================================================================

===============================================================================================


===============================================================================================

===============================================================================================

===============================================================================================


===============================================================================================


===============================================================================================


===============================================================================================

===============================================================================================

===============================================================================================


===============================================================================================

===============================================================================================

===============================================================================================


===============================================================================================


===============================================================================================


===============================================================================================


===============================================================================================

===============================================================================================


===============================================================================================

===============================================================================================

===============================================================================================


===============================================================================================


===============================================================================================


===============================================================================================

*/
