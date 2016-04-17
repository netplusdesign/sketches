var myGrid;

function setup() {
  createCanvas(500, 500);
  background(0);
  myGrid = new Grid(50, 50);
}

function draw() {
  var rand;
  for (var x = 0; x < width; x++)
  {
    rand = random (0, TWO_PI);
    translate (x, height/2 + randomGaussian() * height/2);
    rotate (random (0, TWO_PI));
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
      stroke(1);
    }
    if ( (r1 < (this.rand/100)) && (r1 > (-this.rand/100)) ) {
      stroke(255,0,0, 70);
    }

    // drow horizontals
    for (var y = 0; y <= this.gRows; y++) {
      line(0+this.r(), y * (this.gHeight + this.r()*this.n)/this.gRows + this.r(), this.gWidth + this.r(), y * (this.gHeight + this.r()*this.n)/this.gRows + this.r() );
    }
    // drow verticals
    for (var x = 0; x <= this.gRows; x++) {
      line(x * (this.gWidth + this.r()*this.n)/this.gColumns + this.r(), 0 + this.r(), x * this.gWidth/this.gRows + this.r(), (this.gWidth + this.r()*this.n) +this.r() );
    }
  }

}
