let btnRock, btnPaper, btnScissors, btnGame, btn3Game, btn5Game ;

let RndNumber ;

// variable for text
let notes = "welcome to rps, choose an option listed below"
let result = ""

function setup()
{
  createCanvas(600, 600);
 
  RndNumber = round (random(0.5,3.5))
 
  btnGame = createButton("single game")
  btnGame.position (75, 190)
  btnGame.style("width" , "100px")
  btnGame.mousePressed(showRPS)
  //btnGame.hide()
   
  btn3Game = createButton("best of three")
  btn3Game.position (250, 190)
  btn3Game.style("width" , "100px")
  //btn3Game.hide()
 
  btn5Game = createButton("best of five")
  btn5Game.position (425, 190)
  btn5Game.style("width" , "100px")
  //btn5Game.hide()
 
  btnRock = createButton("rock")
  btnRock.position (75, 190)
  btnRock.style("width" , "100px")
  btnRock.mousePressed(CompRock)
  btnRock.hide()
   
  btnPaper = createButton("paper")
  btnPaper.position (250, 190)
  btnPaper.style("width" , "100px")
  btnPaper.mousePressed(CompPaper)
  btnPaper.hide()
 
  btnScissors = createButton("scissors")
  btnScissors.position (425, 190)
  btnScissors.style("width" , "100px")
  btnScissors.mousePressed(CompScissors)
  btnScissors.hide()
  
  btnReplay = createButton("New Game")
  btnReplay.position (200, 400)
  btnReplay.style("width" , "100px")
  btnReplay.mousePressed(showRPS)
  btnReplay.hide()
  
  btnExit=createButton("Exit")
  btnExit.position (350, 400)
  btnExit.style("width" , "100px")
  btnExit.mousePressed(CompScissors)
  btnExit.hide()
 
}

function draw()
{
 
  background(220);
  //  increase the size of the text
 
  text("ROCK, PAPER, SCISSORS", 225, 50)
 
  text( notes, 180, 100);
 
  text (result , 150, 300)
 
  text (RndNumber , 300, 250)
}


function showRPS()
{
  notes = "rock, paper or scissors?"
  btnGame.hide()
  btn3Game.hide()
  btn5Game.hide()
  btnScissors.show()
  btnPaper.show()
  btnRock.show()
}

function CompRock()
{

   if(RndNumber == 3)
        {
         result = 'congrats, you won!'
        }
    else if (RndNumber == 2)
        {
          result = 'haha, you lost, better luck next time!'
        }
    else
        {
          result = "yikes, its a tie, try again maybe?"
        }
 
hideRPS();
}

function CompPaper()
{

   if(RndNumber == 1)
        {
         result = 'congrats, you won!'
        }
    else if (RndNumber == 3)
        {
          result = 'haha, you lost, better luck next time!'
        }
    else
        {
          result = "yikes, its a tie, try again maybe?"
        }
 
hideRPS();
}

function CompScissors()
{

   if(RndNumber == 2)
        {
         result = 'congrats, you won!'
        }
    else if (RndNumber == 1)
        {
          result = 'haha, you lost, better luck next time!'
        }
    else
        {
          result = "yikes, its a tie, try again maybe?"
        }
 
hideRPS();
}

function hideRPS()
{
  btnRock.hide()
  btnPaper.hide()
  btnScissors.hide()
  
  notes =""
  btnReplay.show()
  btnExit.show()
 
}