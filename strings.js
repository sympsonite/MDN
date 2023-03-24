//String Basics..

const string = 'The revolution will not be televised.';
console.log(string);

//Bad strings examps - mistakes

const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';

const badString = string;
console.log(badString);

//Quotations

const sgl = 'Single quotes.';
const dbl = "Double quotes";
console.log(sgl);
console.log(dbl);

//

const badQuotes = 'What on earth?";

//

const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue.";
console.log(sglDbl);
console.log(dblSgl);

//


const bigmouth = 'I've got no right to take my place...';


//Concatenating strings ``

const name = 'Chris';
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

//

const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

//

const button = document.querySelector('button');

function greet() {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);

// Concatenation using "+"

const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"

//vs...

const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"

//Numbers vs strings

const name = "Front ";
const number = 242;
console.log(`${name}${number}`); // "Front 242"

//

const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum);

//

const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);

//Expressions in strings

const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.`;
console.log(output);  // "I like the song Fight the Youth. I gave it a score of 90%."

//Multiline strings

const output = `I like the song.
I gave it a score of 90%.`;
console.log(output);  // I like the song.
                      // I gave it a score of 90%.

// vs

const output = 'I like the song.\nI gave it a score of 90%.';
console.log(output);  // I like the song.
                      // I gave it a score of 90%.

// Strings as Objects

const browserType = 'mozilla';
browserType.length; // find length

browserType[0];// retreive string characters - treat string like array
browserType.charAt(0)// retreive string characters. charAt method

browserType[browserType.length-1]; // combine properties

// Testing if a string contains a substring

const browserType = 'mozilla';

if (browserType.includes('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}


//

const browserType = 'mozilla';

if (browserType.startsWith('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}

//

const browserType = 'mozilla';

if (browserType.endsWith('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}

// Extracting a substring from a string

const browserType = 'mozilla';
console.log(browserType.slice(1, 4)); // "ozi"

browserType.slice(2); // "zilla"

//Change case

const radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

//Replacing parts of a string

const browserType = 'mozilla';
const updated = browserType.replace('moz','van');

console.log(updated);      // "vanilla"
console.log(browserType);  // "mozilla"


let browserType = 'mozilla';
browserType = browserType.replace('moz','van');

console.log(browserType);  // "vanilla"
console.log(browserType.indexOf('o')); // find index of...




