// Import stylesheets
import './style.css';
import React from 'react';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//#javascript labels let you break or continue out of functional blocks of code.

foo: {
  console.log('face');
  break foo;
  console.log('not be executed');
}
console.log('swap');

//You can use #javascript destructuring assignments to grab a specific Array index into a named variable.
const data = ['MicroSoft', 90.25, 'Window 10'];
const { 1: price } = data;
console.log('price', price); //90.25

//Shortest code to create an Array of numbers in #javascript.

console.log('Array', [...Array(5).keys()]);

//#javascript function that capitalizes the first character of a string.

const capitalize = ([first, ...str]) => {
  return [first?.toUpperCase(), ...str].join('');
};
const capitalize2 = ([...text]) => {
  text[0] = text[0].toUpperCase();

  return text.join('');
};
console.log('capitalize', capitalize('hello'));
console.log('capitalize2', capitalize2('hello'));

//You can use String.fromCodePoint() to create emoji characters from a numeric value in #javascript.

const smile = String.fromCodePoint(0x1f600);
const str = `Smile  ${smile} you're on TV`;
console.log(str);

//Use Array Spreading to keep your arrays immutable

const array = [1, 2];
array.push(3); //[1,2,3]

const array1 = [1, 2];
const newArray = [...array1, 3];

console.log('array', newArray);

//Use history.back() to create a “Go Back” button.

<button onclick="history.back()">Go back</button>;

// Run event listener only once.
// If you want to add an event listener but have it run only once, you can use the ` once` option:

element.addEventListener('click', () => console.log('I run only once'), {
  once: true,
});

//Get min/max value from an array

const numbers = [6, 8, 1, 3, 9];

console.log(Math.max(...numbers)); // 9
console.log(Math.min(...numbers)); // 1

//Check if Caps Lock is on

const passwordInput = document.getElementById('password');

passwordInput.addEventListener('keyup', function (event) {
  if (event.getModifierState('CapsLock')) {
    // CapsLock is on.
  }
});

//Get mouse position

document.addEventListener('mousemove', (e) => {
  console.log(`Mouse X: ${e.clientX}, Mouse Y: ${e.clientY}`);
});

//Shorten an array

const numberss = [1, 2, 3, 4, 5];

numberss.length = 3;

console.log(numberss); // [1, 2, 3];

// Remove duplicate elements from an array:

const numbers = [2, 3, 4, 4, 2];

console.log([...new Set(numbers)]); // [2, 3, 4]

//* Convert a string to number

const str = '404';

console.log(+str); // 404;

//Remove all falsy values from an array:

const myArray = [1, undefined, NaN, 2, null, '@denicmarko', true, 3, false];

console.log(myArray.filter(Boolean)); // [1, 2, "@denicmarko", true, 3]

//Don’t repeat yourself.

const myTech = 'JavaScript';
const techs = ['HTML', 'CSS', 'JavaScript'];

// Instead of:
if (myTech === 'HTML' || myTech === 'CSS' || myTech === 'JavaScript') {
  // do something
}

// You can:
if (techs.includes(myTech)) {
  // do something
}

//You can use the `reduce` method to calculate the sum of all elements in an array:

const myArray = [10, 20, 30, 40];
const reducer = (total, currentValue) => total + currentValue;

console.log(myArray.reduce(reducer)); // 100

//Use the dataset property to access the element’s custom data attributes (data-*):

{
  /* <div id="user" data-name="John Doe" data-age="29" data-something="Some Data">
  John Doe
</div> */
}

<script>
  const user = document.getElementById('user'); console.log(user.dataset);
  {/* // { name: "John Doe", age: "29", something: "Some Data" } */}
  console.log(user.dataset.name); // "John Doe" console.log(user.dataset.age);
  // "29" console.log(user.dataset.something); // "Some Data"
</script>;
