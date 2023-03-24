const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A String object"); 

//Character access

const animal = 'cat'
console.log(animal.charAt(1))

//Comparing strings

//operator method
let a = 'a'
let b = 'B'
if (a < b) { 
    console.log(a + ' is less than ' +b)
} else if (a > b) { // true - because this method is case sensative
     console.log(a + ' is greater than ' + b)
} else {
    console.log(a + ' and ' + b + ' are equal.')
}

// Compare without regard for case sensitivity

function isEqual(str1, str2){
    return str1.toUpperCase() === str2.toUpperCase()
}

//String primitives and String objects

/* JavaScript distinguishes between String objects and primitive string values. 
(The same is true of Boolean and Numbers.) */

let s_prim = 'foo'
let s_obj = new String(s_prim)

console.log(typeof s_prim)
console.log(typeof s_obj)

// passing strings thru eval()
let s1 = '2+2'  // creates a string primitive
let s2 = new String('2+2') //creates a String object 
console.log(eval(s1))   // returns the number 4 - treated as source code
console.log(eval(s2))   // returns the string "2+2" - treated as object and returns an object.
console.log(eval(s2.valueOf())) // convert string object to primitive


//Long literal strings

// + method

let longString = "This is a very long string which needs " +
"to wrap across multiple lines because " +
"otherwise my code is unreadable."

console.log(longString)

// \ method

let longString2 = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."


