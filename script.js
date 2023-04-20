'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, are the ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outher scope's variable
      const firstName = `Steven`;

      //Reassiging outher scope's variable
      console.log(output);

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = `NEW OUTPUT!`;
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
  }

  printAge();

  return age;
}

const firstName = `Jonas`;
calcAge(1991);
// console.log(age);
// printAge();


// Hoisting and TDZ in practice

//Variavles
console.log(me);
// console.log(job);
// console.log(year);

var me = `Jonas`;
let job = `teacher`;
const year = 1991;

//Functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numberProducts);
if (!numberProducts) deleteShoppingCart();

var numberProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);



//THIS keyword:

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);
*/

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
