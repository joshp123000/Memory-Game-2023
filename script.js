const gameContainer = document.getElementById("game");
let c1
let c2
let b1
let b2
let match = 0
let click = true
let score = 0
let scoreCounter = document.querySelector("#counter")
let highScore = localStorage.getItem("savedScore")
let e = document.getElementById("lowScore")
if(highScore > 0){
  e.innerText = highScore
}
else{
  e.innerText = 0
}
  
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

let num = COLORS.length
let wincon = num / 2

let count  = 0
let clickcount = 0
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
let shuffledColors = shuffle(COLORS);

let button = document.querySelector("button")
button.addEventListener("click", function(){
  
  clickcount++
  
  if(clickcount <= 1){
    
    
    shuffle(COLORS)        
    createDivsForColors(COLORS);
    
  }
  else{
    
    gameContainer.innerHTML = ""
    shuffle(COLORS)
    createDivsForColors(COLORS)
    
    score = 0
    scoreCounter.innerText = score
  }
  
})

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  if(click === false){return}
  if(event.target.classList.contains("flipped")){return}
  score++
  
  scoreCounter.innerText = score
  console.log("you just clicked", event.target);
  count++
  
    
    
      if(count === 1){
        c1 = event.target
        b1 = event.target.classList
        event.target.style.backgroundColor = event.target.classList
        event.target.classList.add("flipped")
      }
      if( count === 2){
        c2= event.target
        b2 = event.target.classList
        event.target.style.backgroundColor = event.target.classList
        event.target.classList.add("flipped")
        click = false
      }
        
        if(count === 2){
          count = 0
          str1 = b1.toString()
          str2 = b2.toString()
          if(str1 === str2){
            b1 = null
            b2= null
            c1= null
            c2= null
            match++
            console.log(match)
            event.target.classList.add("match")
            click = true
          
        }
        else{
          setTimeout(function(){
          c1.style.backgroundColor = "white"
          c2.style.backgroundColor = "white"
          c1.classList.remove("flipped")
          c2.classList.remove("flipped")
          b1 = null
          b2= null
          c1= null
          c2= null
          click = true
          }, 1000)
        }
          setTimeout(function(){
            if(match === wincon){
              let  nhighscore 
              if(highScore === null){
                 nhighscore = 1000
              }
              else{
                nhighscore = Number(highScore)
              }
              
              if(nhighscore > score){
                highScore = score
                e.innerText = highScore
                localStorage.setItem("savedScore", highScore)
              }
              match = 0
              score = 0
              scoreCounter.innerText = score
              shuffle(COLORS)
              gameContainer.innerHTML = ""
              createDivsForColors(COLORS)
            }
            }, 1000)
          
          
        

      }
  
  }

  
  
  
 
  
  
  
  
  

  
 



// when the DOM loads

