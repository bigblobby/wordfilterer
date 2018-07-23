

const innerBox = document.getElementById('inner-box');
const form = document.getElementById('inputArea');
const textBox = document.getElementById('textBox');
const postButton = document.getElementById('button');
const ul = document.getElementById('posted');
//let li = ul.children;


let arr = ['terror', 'murder', 'kill', 'fuck', 'cunt', 'shit', 'twat', 'asshole', 'dick', 'isis', 'ass '];

//Get input, send over to 'createLI', append returned value to ul.
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let text = textBox.value;
  textBox.value = '';
  for(let word of arr) {
    if(text.toLowerCase().includes(word)) {
      return alert('Post blocked for inapropriate use of words'); 
    }
  } 
  //if(text !== '') {
  if(text) {
    const li = createLI(text);
    ul.prepend(li);
  } 
});

/*
//Create li append elements to it.
function createLI(text) {
  function createElement(elementName, prop, value) {
    const element = document.createElement(elementName);
    element[prop] = value;
    return element;
  }

  function appendLI(elementName, prop, value) {
    const element = createElement(elementName, prop, value);
    li.append(element);
    return element;
  }
  
  function getTime() {
    let today = new Date(Date.now()).toLocaleString();
    today = today.split(', ');
    return `Posted at ${today[1]} on ${today[0]}`
  }
  
  const li = document.createElement('li');
  appendLI('span', 'textContent', text);
  appendLI('button', 'textContent', 'X')
    .className = 'deleteButton';
  appendLI('button', 'textContent', '...')
    .className = 'editButton';
  appendLI('span', 'textContent', getTime())
    .className = 'timeStamp';
  return li;
}
*/

function createLI(text) {
  function createElement(elementName, prop, value, classValue = undefined) {
    const element = document.createElement(elementName);
    element[prop] = value;
    element.className = classValue;
    return element;
  }

  function appendLI(elementName, prop, value, classValue) {
    const element = createElement(elementName, prop, value, classValue);
    li.append(element);
  }
  
  function getTime() {
    let today = new Date(Date.now()).toLocaleString();
    today = today.split(', ');
    return `Posted at ${today[1]} on ${today[0]}`;
  }
  
  const li = document.createElement('li');
  appendLI('span', 'textContent', text);
  appendLI('button', 'textContent', 'X', 'deleteButton');
  appendLI('button', 'textContent', '...', 'editButton');
  appendLI('span', 'textContent', getTime(), 'timeStamp');
  return li;
}

//Delete, edit and save buttons for each li

//ul.addEventListener('click', (e) => {
//  if(e.target.tagName === 'BUTTON') {
//     const button = e.target;
//     const li = button.parentNode;
//        if(button.className === 'deleteButton') {
//            ul.removeChild(li);
//        } else if(button.className === 'editButton') {
//            const span = li.firstElementChild;
//            const input = document.createElement('textarea');
//            input.value = span.textContent;
//            li.insertBefore(input, span);
//            li.removeChild(span);
//            button.className = 'saveButton';
//            button.textContent = 'save';
//        } else if(button.className === 'saveButton') {
//            const input = li.firstElementChild;
//            for(let word of arr) {
//              if(input.value.toLowerCase().includes(word)) {
//                return alert(`Please don't use inappropriate words.`); 
//              }
//            } 
//            const span = document.createElement('span');
//            span.textContent = input.value;
//            li.insertBefore(span, input);
//            li.removeChild(input);
//            button.className = 'editButton';
//            button.textContent = '...';
//        }
//    }
//});

ul.addEventListener('click', (e) => {
  if(e.target.tagName === 'BUTTON') {
     const button = e.target;
     const li = button.parentNode;
     let action = button.textContent;
     let actionOptions = {
       "X": () => {
         ul.removeChild(li);
       },
       "...": () => {
         const span = li.firstElementChild;
         const input = document.createElement('textarea');
         input.value = span.textContent;
         li.insertBefore(input, span);
         li.removeChild(span);
         button.className = 'saveButton';
         button.textContent = 'save';
       },
       "save": () => {
         const input = li.firstElementChild;
           for(let word of arr) {
             if(input.value.toLowerCase().includes(word)) {
               return alert(`Please don't use inappropriate words.`); 
             }
           } 
         const span = document.createElement('span');
         span.textContent = input.value;
         li.insertBefore(span, input);
         li.removeChild(input);
         button.className = 'editButton';
         button.textContent = '...';
       }
     };
     actionOptions[action]();   
    }
});













































/*
const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach

//const companyNames = companies.forEach( company => {
//  console.log(company.name);
//});


//filter

//const canDrink = ages.filter(age => age >= 21);
//console.log(canDrink);
//
//const retailFilter = companies.filter(company => company.category == 'Retail')
//console.log(retailFilter);
//
//const moreThanTen = companies.filter(company => company.end - company.start >= 10);
//console.log(moreThanTen);

//map

//const companyNames = companies.map(company => company.name);
//console.log(companyNames);
//
//const testMap = companies.map(company => `${company.name} [${company.start}-${company.end}]`);
//console.log(testMap);

//sort

//const sortedCompanies = companies.sort( (a, b) => a.start > b.start);
//console.log(sortedCompanies);
//
//const sortAges = ages.sort( (a, b) => a - b);
//console.log(sortAges);

//reduce

const addAges = ages.reduce( (total, age) => total + age);
console.log(addAges);
*/


//const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//
//const fourty = ages.filter( age => (20 <= age && age <= 69))
//                   .sort( (a, b) => a - b);
//
//const oldest = fourty[fourty.length - 1];
//const youngest = fourty[0];
//console.log(fourty);
//console.log(oldest)
//console.log(youngest);
//
//const numbers = [1, 67, 98];
//
//const combined = [...ages, ...numbers];
//
//function combined1(num) {
//  return num.reduce( (total, sum) => total + sum);
//}






// Class contructors

/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayBye() {
    console.log(`${this.surname} says bye!`);
  }
  
  get name() {
    return this._name;
  }
  
  set name(value) {
    if(value.length < 4){
      //alert('Name is too short');
      return;
    }
    this._name = value;
  }
}

class Me extends Person {
  constructor(name, surname, age) {
    super(name, age);
    this.surname = surname;
  }
  
  sayHi() {
    console.log(`${this.name} says hi!`);
  }
}

class Him extends Person {
  constructor(name, surname, age) {
    super(name, age);
    this.surname = surname;
  }
  
  sayWhat() {
    console.log(`${this.name} says what?`);
  }
}

let tom = new Me('Tommy', 'Dempster', 23);
let davei = new Him('Dave', 'Smith', 33);
let timmy = new Person('Timmy', 26);
*/

/*
let num = 34;

if(typeof num !== 'number') {
  num = 10;
}

let num2 = 35;

if(!Number.isFinite(num2)) {
  num2 = 20;
}
*/

/*
function getSecondsToday() {
  let today = new Date()
                .setHours(0, 0, 0, 0);
  let now = new Date();
  return Math.round( (now - today) / 1000 );
}

function secondsTilTomorrow() {
  let now = new Date();
  let time = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
  return 86400 - time;
}

function secondsTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let diff = tomorrow - now;
  return Math.round(diff / 1000);
}

*/
/*
function daysTilChristmas() {
  let now = new Date();
  let christmas = new Date(now.getFullYear(), 11, 25);
  let diff = christmas - now;
  return Math.round((Math.round(diff / 1000)) / 60 / 60 / 24);
}
*/

/*
const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42}
];

let reduced = users.reduce( (usersObject, user) => {
  usersObject[user.name] = user.age;
  return usersObject;
}, {});
*/
 /*
const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

const objects = userNames.filter( name => name[0] === 'S')
                         .map( name => ({'name': name}));

    // Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

*/
/*
const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42},
  {name: 'Shaniqua', age: 30},
  {name: 'Marvin', age: 23},
  {name: 'Sean', age: 47}
];

let result = users.filter( user => user.age >= 30)
                  .map( user => user.name);

*/
/*
const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 }
];



const highest = products.filter( item => item.price <= 10)
                        .reduce( (high, item) => {
                          if(high.price > item.price) {
                            return high;
                          }
                          return item;
                        }, 0);

const total = products.filter( item => item.price > 10)
                        .reduce( (sum, item) => {
                          return sum + item.price;
                        }, 0).toFixed(2);

    // Result: { name: 'paper towels', price: 6.99 }
*/

/*
const movies = [
  ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
  ['Finding Dory'],
  ['Jaws', 'On the Waterfront']
]

    // Result: ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters', 'Finding Dory', 'Jaws', 'On the Waterfront']

let newArr = movies.reduce( (all, movie) => {
  return all.concat(movie);
}, []);
*/

/*

const users = [
  {
    name: 'Samir',
    age: 27,
    favoriteBooks:[
      {title: 'The Iliad'},
      {title: 'The Brothers Karamazov'}
    ]
  },
  {
    name: 'Angela',
    age: 33,
    favoriteBooks:[
      {title: 'Tenth of December'},
      {title: 'Cloud Atlas'},
      {title: 'One Hundred Years of Solitude'}
    ]
  },
  {
    name: 'Beatrice',
    age: 42,
    favoriteBooks:[
      {title: 'Candide'}
    ]
  }
];

const favBooks = users.reduce( (books, user) => {
  return books.concat(user.favoriteBooks);
}, []);

const books = users.map( user => user.favoriteBooks.map( book => book.title));
                   //.reduce( (books, titles) => books.concat(titles), []);


    // Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];

*/
/*
const calc = new Promise( (resolve, error) => {
  resolve(1 + 1);
});

function addTwo(value) {
  return value + 2;
}

function printValue(nextValue) {
  setTimeout( () => {
    console.log(nextValue);
  }, 1000);
}

calc.then(addTwo)
    .then(printValue);
*/

/*
let cleanRoom = new Promise(function(resolve, reject){
  
  // cleans room
  
  let isClean = false;
  if(isClean) {
    resolve('clean');
  } else {
    reject('not clean');
  }
});

function thenOrCatch(result) {
  console.log('The room is ' + result);
}

cleanRoom.then(thenOrCatch)
         .catch(thenOrCatch);
*/
/*
cleanRoom.then(function(fromResolve) {
  console.log('The room is ' + fromResolve);
}).catch(function(fromReject) {
  console.log('The room is ' + fromReject);
})
*/


//NOT SURE WHY THIS WORKS BUT IT DOES

/*
function first() {
  let message = `The bedroom is clean `;
  return function second(mess) {
    return message += `and i've taken out the rubbish`;
  }
  second(message);
}



alert( first()() );
*/

/*
let message = '';

function cleanBedroom() {
  message += `I've cleaned the bedroom `;
}

function takeOutRubbish() {
  message += ` and i've taken out the rubbish`;
}

function callBack() {
  cleanBedroom();
  takeOutRubbish();
  console.log(message);
}

//CALLBACK function

function doHomework(subject, callback) {
  let finished = true;
  console.log(`Started my ${subject} homework`)
  if(finished) {
    callback();
  }
}

function completed() {
  console.log(`I've completed my homework`);
}

doHomework('Maths', completed);
*/

/*
function Animal(name, color){
  this.name = name;
  this.color = color;
}

let canEat = {
  eats: true,
};

Animal.prototype = canEat;

//Animal.prototype = {
//  walk() {
//    return `is walking`;
//  },
//  eats: true,
//};

Animal.prototype.bark = function() {
  return `${this.name} barked!`;
};

Animal.prototype.run = function() {
  return `${this.name} runs away`;
};
  
let dog = new Animal('Jeff', 'Black');
*/
/*
function Animal(name) {
  this.name = name;
}

// All animals can eat, right?
Animal.prototype.eat = function() {
  alert(`${this.name} eats.`);
};

// Same Rabbit as before
function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.jump = function() {
  alert(`${this.name} jumps!`);
};

// setup the inheritance chain
Rabbit.prototype.__proto__ = Animal.prototype; // (*)

let rabbit = new Rabbit("White Rabbit");
*/
/*
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let color = 'blue';

let shoeSize = 11;

User.prototype.color = color;

User.prototype.shoeSize = shoeSize;

let me = new User('Tom', 23);

*/
/*
let car = {
  drive() {
    return `driving car`;
  }
};

let honda = {
  race() {
    return `racing honda`;
  }
};

//honda.__proto__ = car;
Object.setPrototypeOf(honda, car);
*/

/*

let animal = {
  eats: true,
}

let bat = Object.create(animal, {
  flys: {
    value: true,
  }
});

*/

/*

let car = {
  wheels: 4
}

let honda = Object.create(car);
honda.fast = true;
honda.drive = function() {
  console.log(`I am driving`);
};

*/
/*
function Ass() {
  this.swim = function() {
    console.log(`i am swiming`);
  }
}

Ass.prototype.drive = function() {
  console.log(`i am driving`);
}

let bum = new Ass;



class Computer {
  constructor(name){
    this.name = name;
    this.hit = function() {
      console.log(`i hit`);
    }
  }
  
  type() {
    console.log(`im typing`);
  }
  
  get() {
    return this._name;
  }
  
  set(value) {
    this._name = value;
  }
}


let it = new Computer('jeff');
 */ 

/*
class Computer {
  constructor(name) {
    this.name = name;
    this.type = function() {
      console.log(`im typing`);
    };
  }
}

class Phone extends Computer{
  constructor(name) {
    super(name);
    this.ring = function() {
      console.log(`ringing`);
    }
  }
  
  hangUp() {
    console.log(`hangs up`);
  }
}



let me = new Phone('dave');

let you = new Computer('him');
*/

// Example of Object.create and Object.assign

/*

let a = {a: 1};
let b = {b: 2};
let c = {c: 3};

let merge = Object.assign({}, a, b, c);

let obj = Object.create(a, {
  b: {value: 4},
  c: {value: 7},
});

*/

// Example of Object.getPrototypeOf.

/*

let obj = {name: 'Tom'};

let a = Object.getPrototypeOf(obj);

a.a = 4;

*/



//let a = 20;
//
//function take() {
//  function takeAgain() {
//    function takeAgainAgain() {
//      let b = 3;
//      console.log(a * b);
//    }
//    takeAgainAgain();
//    console.log(a * 2);
//  }
//  takeAgain();
//  console.log(a);
//}
//
//take();

/*
function makeAdder(a) {
  function add(b) {
    console.log(a + b);
  }
  return add;
}

let plusFive = makeAdder(5);
*/

/*

// Example of closure

var gLogNumber, gIncreaseNumber, gSetNumber;
function setupSomeGlobals() {
  // Local variable that ends up within closure
  var num = 42;
  // Store some references to functions as global variables
  gLogNumber = function() { console.log(num); }
  gIncreaseNumber = function() { num++; }
  gSetNumber = function(x) { num = x; }
}

*/

/*

let num1;
let num2;
let logNum;

function setUp() {
  let a = 0;
  let b = 0;
  num1 = function(x) { a = x};
  num2 = function(x) { b = x};
  logNum = function() { console.log( a + b)};
}

*/

/* 

// Example of counter closure

function Counter() {
  let count = 0;
  
  this.up = function() {
    return ++count;
  }
  
  this.down = function() {
    return --count;
  }
  
  this.reset = function() {
    return count = 0;
  }
  
  this.log = function() {
    return console.log(count);
  }
}

let counter = new Counter();

*/

/*

// Closure on objects

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(prop) {
  return function(a, b) {
    return a[prop] > b[prop] ? 1 : - 1;
  }
}

users.sort(byField('name'));

*/


//function addTo(passed) {
//  let num1 = 7
//  function add(inner) {
//    return passed + inner + num1;
//  }
//  return add;
//}
//
//let addFour = addTo(4);
//let addThree= addTo(3);

/*
function makeCounter() {
  let count = 0;
  return function() {
    return ++count;
  }
}

let counter = makeCounter();
*/

/*

function user(firstName, secondName, password) {
  function inner(passphrase) {
    let fullName = `${firstName} ${secondName}`;
    if(password === passphrase) {
      return console.log(`Welcome back ${fullName}.`);
    } else {
      return console.log(`Go away.`);
    }
  }
  return inner;
}

let me = user('Tom', 'Dempster', 'burgers');

*/
/*
for(var i = 0; i < 6; i++) {
  setTimeout(function() {
    console.log('var ' + i);
  }, 1000)
}

//for(let i = 0; i < 6; i++) {
//  setTimeout(function() {
//    console.log('let ' + i);
//  }, 1000)
//}

console.log(i + ' outsider');
*/

/*

function createDeck() {
  var suites = ['♠︎','♣︎','♥︎','♦︎'];
  var ranks = ['Ace','King','Queen','Jack','10','9','8','7','6','5','4', '3','2'];
  var deck = [];
  // add your code below here:
  for (let i=0; i<suites.length; i++) {
   for (let j=0; j<ranks.length; j++) {
     let card = [];
     card.push(ranks[j], suites[i]);
     deck.push(card);
   }
  }
  return deck;
}

let myDeck = createDeck();

*/

/*
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
for(let i = 0; i < contacts.length; i++) {
  if(contacts[i].firstName === name) {
    if(contacts[i].hasOwnProperty(prop)) {
      return contacts[i][prop];
    } else {
      return "No such propery";
    }
  }
}
return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");


var val = "Tom";

var array = [val];

*/
/*
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter( num => num > 0 && Number.isInteger(num))
                             .map( num => Math.pow(num, 2));
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
*/

/*
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for(let i = 0; i < arr.length; i++) {
    if(!arr[i].includes(elem)) {
      newArr.push(arr[i]);
    }
  }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));
*/

/*

let arr1 = ["Tom", "Dempster", "Is", "Awesome"];

function check(array, elem) {
  if(array.indexOf(elem) >= 0) {
    return `'${elem}' is at index ${array.indexOf(elem)}`;
  } else {
    console.log('No such element inside array');
  }
}

console.log(check(arr1, "Tom"));

*/

/*

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line
  let count = 0;
for(let user in obj) {
  if(obj[user].online) {
    count++;
  }
}
  return count;
  // change code above this line
}

console.log(countOnline(users));

*/

/*

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) { 
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));


*/
/*
function multiplesOf3and5(number) {
let arr = [];
for(let i = 0; i < number; i++) {
  if(i % 5 === 0 || i % 3 ===0) {
    arr.push(i);
  }
}
  return arr.reduce( (total, sum) => total + sum, 0);
}

multiplesOf3and5(1000);
*/


//let count = 0;
//let arr2 = [];
//
//function setNumber(upper) {
//  return Math.floor(Math.random() * upper) + 1;
//}
//
//function guessNumber(upper) {
//  let randomNumber = setNumber(upper);
//  while(true) {
//    let guess = setNumber(upper);
//    count++;
//    arr2.push(guess);
//    if(guess === randomNumber) {
//      console.log(`It took ${count} attempts to guess ${randomNumber}`);
//      break;
//    }
//  }
//}
//
//function logIt() {
//  console.log(`sea of text`);
//}
//
//guessNumber(1000000);
//console.log(arr2.map( (number, index) => `${index + 1} guess was ${number}`));
//setTimeout(logIt, 5000);

/*
function frankenSplice(arr1, arr2, n) {
  let newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

*/

//function frankenSplice(arr1, arr2, n) {
//  let newArr = [];
//  for(let item of arr2) {
//    newArr.push(item);
//  }
//  for(let i = arr1.length; 0 <= i; i--) {
//    newArr.splice(n, 0, arr1[i]);
//  }
//  return newArr;
//}
//
//frankenSplice([1, 2, 3], [4, 5, 6], 1);

/*

function Book(title, year, author) {
  this.title = title;
  this.year = year;
  this.author = author;
  this.getYear = function() {
    console.log(`The year is ${this.year}`);
  }
}

function Magazine(title, year, author) {
  Book.call(this, title, year, author);
}

Magazine.prototype = Object.create(Book.prototype);

let book1 = new Magazine('Stuff', '2036', 'Tom');

*/

/*

class Book {
  constructor(title, year, author) {
    this.title = title;
    this.year = year;
    this.author = author;
  }
  
  getYear() {
    console.log(`The year is ${this.year}`);
  }
}

class Magazine extends Book {
  constructor(title, year, author) {
    super(title, year, author);
  }
  
  getYear() {
    super.getYear();
    console.log('HAHAH');
  }
}

let book1 = new Magazine('Stuff', '2036', 'Tom');

*/

/*

//CLOCK

let p = document.createElement('p');
document.body.append(p);

function getTime() {
  function format(number) {
    if(number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }
  
  let now = new Date();
  let hours = format(now.getHours());
  let minutes = format(now.getMinutes());
  let seconds = format(now.getSeconds());
  
  //return `${hours}:${minutes}:${seconds}`;
  p.textContent = `${hours}:${minutes}:${seconds}`;
}

function tick(callback) {
  let clock = callback()
  console.log(clock);
}


setInterval(getTime, 1000);

*/

/*

let p = document.createElement('p');
document.body.append(p);

function getTime() {
  function format(number) {
    if(number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }
  
  let now = new Date();
  let hours = format(now.getHours());
  let minutes = format(now.getMinutes());
  let seconds = format(now.getSeconds());
  
  return `${hours}:${minutes}:${seconds}`;
}

setInterval( () => p.textContent = getTime(), 1000);

*/



//TIMES TABLES

/*

(function() {
  
  let number = +prompt('What times table do you want? (pick 1 number)');
  let count = number;
  let times = 1;
  
  function appendElement(element, parent) {
    let el = document.createElement(element);
    document.body.append(el);
    return el;
  }
  
  function timer() {
    if(times <= 100) {
      let item = appendElement('p', 'body');
      item.innerHTML += `${times} x ${number} = ${count} <br>`;
      count += number;
      times += 1;
    }
  }
  
  setInterval(timer, 10);
  
})()

*/



function factor(num) {
  let newArr = [];
  for(let i = 0; i <= num; i++) {
    if(num % i === 0) {
      newArr.push(i);
    }
  }
  return newArr;
}


























