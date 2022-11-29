//variable for  array of names
let uName = [  ]

//variable for array of marks
let uEMarks = [ ]
let uMMarks = [ ]
let uSMarks = [ ]

// variable for input boxes / text boxes
let InpFName , InpEMarks , InpMMarks , InpSMarks  

// variable for submit button
let btnSubmit

// variable for target Slot
let targetSlot = 0


function setup() {
  createCanvas(400, 400);
 
 
  InpFName = createInput()
  InpFName.position(15, 370)
  InpFName.style("width", "150px")
 
  InpEMarks = createInput()
  InpEMarks.position (190, 370)
  InpEMarks.style("width", "20px")
  
  InpMMarks = createInput()
  InpMMarks.position (220, 370)
  InpMMarks.style("width", "20px")
  
  InpSMarks = createInput()
  InpSMarks.position (250, 370)
  InpSMarks.style("width", "20px")
 
  btnSubmit = createButton("SUBMIT")
  btnSubmit.position( 290, 370)
  btnSubmit.style("width", "100px")
  btnSubmit.mousePressed(updateData)
 
}

function draw() {
  background(220);
 
  for(i=0; i< uName.length ; i=i+1)
    {
      text ( uName[i], 25, 25*i+30 )
      // text command 
      
      text ( uEMarks[i], 100, 25*i+30 )
      text ( uMMarks[i], 140, 25*i+30 )
      text ( uSMarks[i], 180, 25*i+30 )
      
    }
  
}


function updateData()
{
  //save the value of input box in array
  uName[targetSlot] = InpFName.value()
  uEMarks[targetSlot] = InpEMarks.value()
  uMMarks[targetSlot] = InpMMarks.value()
  uSMarks[targetSlot] = InpSMarks.value()
  //update target slot value
  targetSlot++
 
  // empty the text box
  InpFName.value("")
  InpEMarks.value("")
  InpMMarks.value("")
  InpSMarks.value("")
 
}