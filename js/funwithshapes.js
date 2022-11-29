function setup() {
    createCanvas(400, 400);
     background('#18191d')
   
  }
  
  function draw() {
    circle(mouseX, mouseY, 100 ); 
    fill('#18191d')
    stroke('#FFFFFF')
  
    triangle(10, 10, 10,50, 50, 50)
    rect(20,20,20,20);
    line(40, 20, 20, 20)
    triangle(30, 75, 58, 20, 86, 75);
  describe('white triangle with black outline in mid-centre of canvas');
  }