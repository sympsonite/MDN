//Simple array [list, list]

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);

//

const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ['tree', 795, [0, 1, 2]]; //Multidimensional

//count the amount of properties

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping.length);  // 5

//accessing array items

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping[0]); // returns "bread"

//Modifying 

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping[0] = 'tahini';
console.log(shopping); // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]

//multidimensional

const random = ['tree', 795, [0, 1, 2]];
random[2][2];

//Find items position in array .indexOf()

const birds = ['Parrot', 'Falcon', 'Owl'];
console.log(birds.indexOf('Owl'));   //  2 (true + position)
console.log(birds.indexOf('Rabbit')); // -1 (false)

//Access items and find index using forEach method

let fruits = ['Apple', 'Banana']

fruits.forEach(function(item, index, array){
  console.log(item, index,);
})


//Adding items - .push()

const cities = ['Manchester', 'Liverpool'];
cities.push('Cardiff');
console.log(cities);      // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push('Bradford', 'Brighton');
console.log(cities);      // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

//Store new array length in variable

const cities = ['Manchester', 'Liverpool'];
const newLength = cities.push('Bristol');
console.log(cities);     // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength);  // 3

//Add item to start of array .unshift()

const cities = ['Manchester', 'Liverpool'];
cities.unshift('Edinburgh');
console.log(cities);     // [ "Edinburgh", "Manchester", "Liverpool" ]

//Remove items .pop() .shift() .splice()
//.pop()

const cities = ['Manchester', 'Liverpool'];
cities.pop(); //remove the last item
console.log(cities);     // [ "Liverpool" ]

//Store removed item to new variable

const cities = ['Manchester', 'Liverpool'];
const removedCity = cities.pop();
console.log(removedCity);   // "Liverpool"

//.shift()

const cities = ['Manchester', 'Liverpool'];
cities.shift(); //remove the first item
console.log(cities);     // [ "Liverpool" ]

//.splice()

const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities.indexOf('Liverpool');
if (index !== -1) { // true, indexOf/position of Liverpool is not -1
  cities.splice(index, 1); // remove only index
}
console.log(cities);     // [ "Manchester", "Edinburgh", "Carlisle" ]

//.indexOf

const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities.indexOf('Liverpool');
if (index !== -1) { // true, indexOf/position of Liverpool is not -1
  cities.splice(index, 2); // from where to start; index, and how many items; 2
}
console.log(cities);     // [ "Manchester", "Carlisle" ]



//Use .length property to manipulate array!

const fruits = [];
fruits.push('banana' , 'apple', 'peach'); //push items to the array 'fruits'

console.log(fruits.length)

fruits[5] = 'mango' // add item on an array slot
console.log(fruits[5])
console.log(Object.keys(fruits)) // shows index of filled slots
console.log(fruits.length) // 6


fruits.length = 10 // set a new length
console.log(fruits) // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length) // 10
console.log(fruits[8]) // undifined - slot 8 is empty



// Accessing every item

const birds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds) {
  console.log(bird);
}

// Apply to each item in an array .map

function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);// map calls the function double, passes the items 
                                    //[number of numbers] and returns new values to a new array - doubled 
console.log(doubled);  // [ 10, 4, 14, 12 ]


// create a new array containing only the items in the original array that match a test .filter()

function isLong(city) {
  return city.length > 8;
}
const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
const longer = cities.filter(isLong);
console.log(longer);  // [ "Liverpool", "Edinburgh" ]



//Converting between strings and arrays

//.split()
//.join()
//.toString()

const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
const cities = data.split(',');
console.log(cities);

cities.length;
cities[0]; // the first item in the array
cities[1]; // the second item in the array
cities[cities.length - 1]; // the last item in the array

const commaSeparated = cities.join(','); //.join can join any parameter/seperator
commaSeparated;

const dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString(); // .toString() always uses comma's


