// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


//#javascript labels let you break or continue out of functional blocks of code.

foo:{
  console.log('face')
  break foo;
  console.log('not be executed')
}
console.log('swap')

//You can use #javascript destructuring assignments to grab a specific Array index into a named variable.
const data = ['MicroSoft',90.25,'Window 10'];
const { 1 :price } = data;
console.log("price",price) //90.25

//Shortest code to create an Array of numbers in #javascript.

console.log("Array",[...Array(5).keys()])

//#javascript function that capitalizes the first character of a string.

const capitalize = ([first,...str])=>{
  return [first?.toUpperCase(),...str].join('')

}
console.log("capitalize",capitalize('hello'))

//You can use String.fromCodePoint() to create emoji characters from a numeric value in #javascript.

const smile = String.fromCodePoint(0X1F600);
const str = `Smile  ${smile} you're on TV`;
console.log(str);


