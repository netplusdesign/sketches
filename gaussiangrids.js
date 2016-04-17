var myGrid;

function setup() {
  createCanvas(500, 500);
  background(0);
  myGrid = new Grid(50, 50);
}

function draw() {
  var rand;
  var y;
  for (var x = 0; x < width; x++)
  {
    rand = random (0, TWO_PI);
    y = height/2 + randomGaussian() * 10;
    translate (x, y);
    rotate (random (0, TWO_PI));
    //print(x + ',' + y);
    myGrid.display();
  }

}

function Grid( w, h ) {
  this.gWidth = w;
  this.gHeight = h;
  this.rand = 3;
  this.n = 2.321;
  this.r = function() {
    return randomGaussian() * (this.rand * 5);
  }
  this.gColumns = int(this.r()*2);
  this.gRows = int(this.r()*2);
  this.gRotation;

  this.display = function() {
    var r1 = this.r();
    if ( r1 < (this.rand/100) ) {
      stroke(255, 30); // white, 30% opaque
    }
    else {
      stroke(1); // black
      //print ('printing black');
    }
    if ( (r1 < (this.rand/100)) && (r1 > (-this.rand/100)) ) {
      stroke(255,0,0, 70);
    }

    // draw horizontals
    for (var y = 0; y <= this.gRows; y++) {
      var x1 = 0 + this.r();
      var y1 = (y+1) * (this.gHeight + this.r() * this.n) / this.gRows + this.r();
      var x2 = this.gWidth + this.r();
      var y2 = y * (this.gHeight + this.r() * this.n) / this.gRows + this.r();
      line(x1, y1, x2, y2 );
      //print('row loop ' + y + ', x1 = ' + x1 + ', y1 = ' + y1 + ', x2 = ' + x2 + ', y2 = ' + y2);
    }
    // draw verticals
    for (var x = 0; x <= this.gColumns; x++) {
      var x1 = (x+1) * (this.gWidth + this.r() * this.n) / this.gColumns + this.r();
      var y1 = 0 + this.r();
      var x2 = (x+1) * this.gWidth/this.gRows + this.r();
      var y2 = (this.gWidth + this.r()*this.n) +this.r();
      line(x1, y1, x2, y2);
      //print('column loop ' + x + ', x1 = ' + x1 + ', y1 = ' + y1 + ', x2 = ' + x2 + ', y2 = ' + y2);
    }
  }

}
