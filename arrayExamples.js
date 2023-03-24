/////////////////////////////REAL WORLD EXAMPLES///////////////////

//Example 1

let total = 0

const products = [
    'Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99',
  ];
  
  for (const product of products) {
    const subArray = product.split(':');//split array 'product' between ':' and pass into variable subArray 
    const name = subArray[0]; // Pass left side of subArray.split [0] into variable name
     const price = Number(subArray[1]); // Pass right side of subArray.split [1] into variable price and convert to Number
    total += price; // total = total + price
    const itemText = `${name} — $${price}`; // combine name string to price with - $

  

    console.log(itemText);
  }


 /////////////////////Example 2//////////////////////////////////////////////
 
  const list = document.querySelector('.output ul');
  const searchInput = document.querySelector('.output input');
  const searchBtn = document.querySelector('.output button');
  
  list.innerHTML = '';
  
  const myHistory = [];
  const MAX_HISTORY = 5;
  
  searchBtn.onclick = () => {
    // we will only allow a term to be entered if the search input isn't empty
    if (searchInput.value !== '') {
      myHistory.unshift(searchInput.value);
  
      // empty the list so that we don't display duplicate entries
      // the display is regenerated every time a search term is entered.
      list.innerHTML = '';
  
      // loop through the array, and display all the search terms in the list
      for (const itemText of myHistory) {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        list.appendChild(listItem);
      }
  
      // If the array length is 5 or more, remove the oldest search term
      if (myHistory.length >= MAX_HISTORY) {
        myHistory.pop();
      }
  
      // empty the search input and focus it, ready for the next term to be entered
      searchInput.value = '';
      searchInput.focus();
    }
  }

//////////////////////////Example 3////////////////////////////////////////


//Copying arrays - 'Shallow' copy types and deepcopy types

const fruits = ['banana', 'apple', 'peach', ['melon']]; // note nested array ['melon']

// Copy fruits array to new array - 'shallow'copy type
let shallowCopySpread = [...fruits]; //spread method.
let shallowCopySlice = fruits.slice(); //slice method.
let shallowCopyFrom = Array.from(fruits); //from method.

/* remove 'melon' from original array. 
(let update - is not neccasery but shows us that the original array has been updated) */
let update = fruits.pop(); 

// push new item for visual aid and to help identify method type:
shallowCopySpread.push('orange') 
shallowCopySlice.push('lime') 
shallowCopyFrom.push('pear') 

/* using .stringify to convert the array to a JSON string, 
and then JSON.parse() to convert the string back into an array. 
This method enables nested arrays to reference (reflect) 
any updates to the original array */

let deepCopy = JSON.parse(JSON.stringify(fruits)); 



console.log(fruits);

// update to original array is not referenced in following 'copied' arrays
console.log(shallowCopySpread); 
console.log(shallowCopySlice); 
console.log(shallowCopyFrom);

// update to original array is referenced with the use deep copy method
console.log(deepCopy); 


///////////////////////Chess Game/////////////////////////////////////

let board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r']
]

console.log(board.join('\n') + '\n\n')

//Move King's Pawn forward 2
board[4][4] = board[6][4]
board[6][4] = ''
console.log(board.join('\n'));


//////////////////////////Table + Maths////////////////////////////////


values = []
for (let x = 0; x < 10; x++){
  values.push([
    2 ** x,
    2 * x ** 2
  ])
}
console.table(values)