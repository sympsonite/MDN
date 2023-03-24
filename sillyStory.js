// COMPLETE VARIABLE AND FUNCTION DEFINITIONS

//three variables that store references to the "Enter custom name" text field
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//take an array, and return one of the items stored inside the array at random.
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// RAW TEXT STRINGS
// Note placeholders eg :insertz:
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. \
 When they got to :inserty:, they stared in horror for a few moments, then :insertz:. \
 Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
const insertY = ['the soup kitchen', 'Disneyland', 'the White House']
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']





//EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result); //click event and subsiquent result...

function result() {

    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
   
  //if a name is entered - replace 'Bob'   
  if(customName.value !== '') { 
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
    
} 

  
 //if 'uk' button is active convert weight and temperature
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286); // Math.round - rounds off the result of a calculation
    const temperature =  Math.round((94-32)*5/9);
    newStory = newStory.replace('300 pounds', weight + ' stones');
    newStory = newStory.replace('94 fahrenheit', temperature + ' celcius');
  }

  

 story.textContent = newStory;
  story.style.visibility = 'visible';
}

