let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1
  // DOM's personal website title is a bit wordy. 
  // Write a JavaScript statement that selects the #main-titleID element. 
  // Remember there are a couple of ways to query id. 
  // Change the text of the title to something shorter.

  const title = document.querySelector('#main-title')
  title.textContent = "Welcome to DOM Manipulation"


  // Part 2

  // Select the bodyand change the background-color to a new color of your choice.

  const body = document.querySelector('body')
  body.style.backgroundColor = 'purple'

  // Part 3

  // Select DOM's Favorite Things list and remove the last list item.

  const favoriteThings = document.querySelector('#favorite-things')
  console.log(favoriteThings)
  favoriteThings.removeChild(favoriteThings.lastElementChild)
  // Part 4

  // Select all .special-title class elements and change their font-sizeto 2rem. 
  // Remember you might have to iterate through the list of elements

  const specialTitleClass = document.querySelectorAll('.special-title')

  for (let i of specialTitleClass) {
    i.style.fontSize = '2rem'
  }


  // Part 5

  // Turns out DOM never raced in Chicago. 
  // Access the Past Races list and remove Chicago.

  const pastRaces = document.querySelector('#past-races')

  pastRaces.removeChild(pastRaces.children[3])

  // Part 6

  // Let's add to DOM's Past Races list. 
  // Create a new <li>element, change the new <li>text to the name of a city, 
  // and append it to the Past Races list.

  const newLi = document.createElement('li')
  newLi.textContent = 'China'
  pastRaces.appendChild(newLi)

  // Part 7

  // Create a new .blog-post corresponding to the new city added in Part 6. 
  // You will have to create a new <div>with class of .blog-post, 
  // a new <h2>with text, and a new <p>with some text. 
  // Think about what order you want to create the elements, 
  // and what order you want to append them in.

  const newDiv = document.createElement('div')
  const newh2 = document.createElement('h2')
  const newp2 = document.createElement('p2')

  newh2.textContent = newLi.textContent
  newp2.textContent = 'I CHALLENGED EVERY ONE'

  newDiv.appendChild(newh2)
  newDiv.appendChild(newp2)
  newDiv.className = 'blog-post purple'

  document.querySelector('.main').appendChild(newDiv)

  // Part 8

  // Query select the #quote-titleID element and add a click event handler. 
  // That event handler should use the function 
  // randomQuotewhenever #quote-titleis clicked. 
  const quote = document.querySelector('#quote-title')

  quote.addEventListener('click', randomQuote)

  // Part 9

  // Select all .blog-post class elements. 

  const blogPostElements = document.querySelectorAll('.blog-post')


  // Iterate through the list of .blog-postclass elements and 
  // apply two event handlers to each node. 
  for (let i of blogPostElements) {
    i.addEventListener("mouseout", (e) => { e.target.classList.toggle("purple") })
    i.addEventListener("mouseenter", (e) => { e.target.classList.toggle("red") })
  }
  // The first event handler should be listening for mouseoutevents 
  // while the second handler should be listening for mouseenterevents.

  // The mouseouthandler should toggle the class .purple
  // The mouseenterhandler should toggle the class .red


});
