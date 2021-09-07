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

*/
