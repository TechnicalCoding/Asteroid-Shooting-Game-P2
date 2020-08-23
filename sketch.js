var ship;
var bullets = [];
var sound;
function setup() 
{
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  sound = loadSound('gun-gunshot-02.mp3');
}

function draw() 
{
  background(0);
  for(var i = bullets.length - 1; i >= 0;i--)
  {
    bullets[i].render();
    bullets[i].update();
    if(bullets[i].offscreen())
    {
      bullets.splice(i,1);
    }
  }
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
}
function keyReleased() 
{
  ship.setRotation(0);
  ship.boosting(false);
}

function keyPressed() 
{
  if(keyCode === 32)
  {
    bullets.push(new Bullet(ship.pos,ship.heading));
    sound.play();
  }
  if (keyCode == RIGHT_ARROW) 
  {
    ship.setRotation(0.1);
  } 
  else if (keyCode == LEFT_ARROW) 
  {
    ship.setRotation(-0.1);
  } 
  else if (keyCode == UP_ARROW) 
  {
    ship.boosting(true);
  }
}
