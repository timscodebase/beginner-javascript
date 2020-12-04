// Make a div
const myWrapperDiv = document.createElement('div')
// add a class of wrapper to it
myWrapperDiv.classList.add('wrapper')

// put it into the body
document.body.appendChild(myWrapperDiv)

// make an unordered list
const myUl = document.createElement('ul')

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const listArray = ['one', 'two', 'three']
listArray.forEach(item => {
  const listItem = document.createElement('li')
  listItem.textContent = `${item}`
  myUl.appendChild(listItem)
})

myWrapperDiv.appendChild(myUl)

// create an image
const myImage = document.createElement('img')
// set the source to an image
myImage.src = 'https://picsum.photos/500'
// set the width to 250
myImage.width = 250
// add a class of cute
myImage.classList.add('cute')
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy'
// Append that image to the wrapper
myWrapperDiv.appendChild(myImage)

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
myParagraphDiv = document.createElement('div')
myHTML = `
    <p>sadadasd dsaa sadasds sdasd gfgdfg fsdgfdfg ghfgh asdsa</p>
    <p>sadadasd dsaa sadasds sdasd gfgdfg fsdgfdfg ghfgh asdsa</p>
  `
const myFragment = document.createRange().createContextualFragment(myHTML)
myParagraphDiv.appendChild(myFragment)

myUl.insertAdjacentElement('beforebegin', myParagraphDiv)

// add a class to the second paragraph called warning
myParagraphDiv.firstElementChild.classList.add('warning')
// remove the first paragraph
myParagraphDiv.firstElementChild.remove()

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  return `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
      <button class='delete' type='button'>&times; Delete</button>
    </div>
    `
}

// make a new div with a class of cards
const myCards = document.createElement('div')
myCards.classList.add('cards')

const players = [
  ['Tim', 38, 5.9],
  ['Helen', 37, 5.1],
  ['Eric', 37, 5.8],
  ['Chris', 37, 6.1],
]

players.forEach(player => {
  const [name, age, height] = player
  const card = document
    .createRange()
    .createContextualFragment(generatePlayerCard(name, age, height))
  myCards.appendChild(card)
})

myWrapperDiv.insertAdjacentElement('beforebegin', myCards)

// make 4 player into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

const deleteButtons = document.querySelectorAll('.delete')
deleteButtons.forEach(button => {
  button.addEventListener('click', e => {
    e.currentTarget.parentNode.remove()
  })
})

// select all the buttons!
// make out delete function
// loop over them and attach a listener
