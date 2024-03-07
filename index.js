// EXAMPLE 1 - Using colons to separate key-value pairs in objects

const obj = {
  first: 'bobby',
  last: 'hadz',
  age: 30,
};

console.log(obj);

console.log(obj.first);
console.log(obj.last);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using colons with the ternary operator

// const num = 100;

// const result = num > 5 ? 'success' : 'failure';

// console.log(result); // 👉️ success

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using colons with the switch statement

// const num = 2;

// switch (num) {
//   case 1:
//     console.log('Today is Monday.');
//     break;
//   case 2:
//     console.log('Today is Tuesday');
//     break;

//   default:
//     console.log('Today is not Monday or Tuesday');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using colons with the label statement

// let str = '';

// loop1: for (let i = 0; i < 6; i++) {
//   if (i === 1) {
//     continue loop1;
//   }
//   str = str + i;
// }

// console.log(str); // 👉️ 02345

// ------------------------------------------------------------------

// // EXAMPLE 5 - Using colons when destructuring nested object properties

// const emp = {
//   name: 'Bobby Hadz',
//   address: {
//     country: 'Belgium',
//     city: 'Example',
//   },
// };

// const {
//   address: {country, city},
// } = emp;

// console.log(country); // 👉️ Belgium
// console.log(city); // 👉️ Example
