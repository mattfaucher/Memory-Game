document.addEventListener('DOMContentLoaded', () => {
   //card options
   const cardArray = [
      {
         name: 'alien',
         img: 'images/alien.png'
      },
      {
         name: 'alien',
         img: 'images/alien.png'
      },
      {
         name: 'naruto',
         img: 'images/naruto.png'
      },
      {
         name: 'naruto',
         img: 'images/naruto.png'
      },
      {
         name: 'smile',
         img: 'images/smile.png'
      },
      {
         name: 'smile',
         img: 'images/smile.png'
      },
      {
         name: 'sugar_skull',
         img: 'images/sugar_skull.png'
      },
      {
         name: 'sugar_skull',
         img: 'images/sugar_skull.png'
      },
      {
         name: 'sword',
         img: 'images/sword.png'
      },
      {
         name: 'sword',
         img: 'images/sword.png'
      },
      {
         name: 'turtle',
         img: 'images/turtle.png'
      },
      {
         name: 'turtle',
         img: 'images/turtle.png'
      }
   ]

   cardArray.sort(() => 0.5 - Math.random())

   const grid = document.querySelector('.grid')
   const resultDisplay = document.querySelector('#result')
   var cardsChosen = []
   var cardsChosenId = []
   var cardsWon = []

   //create the board
   function createBoard() {
      for (let i = 0; i< cardArray.length; i++) {
         var card = document.createElement('img')
         card.setAttribute('src', 'images/js_logo.png')
         card.setAttribute('data-id', i)
         card.addEventListener('click', flipcard)
         grid.appendChild(card)
      }
   }

   //Check for matches
   function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      if (cardsChosen[0] === cardsChosen[1]) {
         alert('You found a match!')
         cards[optionOneId].setAttribute('src', 'images/blank.png')
         cards[optionTwoId].setAttribute('src', 'images/blank.png')
         cardsWon.push(cardsChosen)
      } else {
         cards[optionOneId].setAttribute('src', 'images/js_logo.png')
         cards[optionTwoId].setAttribute('src', 'images/js_logo.png')
         alert('Sorry, try again.')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if (cardsWon.length === cardArray.length/2) {
         resultDisplay.textContent = 'Congratulations! You found all the matches'
      }
   }

   //flip your card
   function flipcard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length === 2) {
         setTimeout(checkForMatch, 500)
      }
   }

   createBoard()
})