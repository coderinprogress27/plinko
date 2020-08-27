var division1
var division2
var division3
var division4
var division5
var division6
var ground
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  for(var j = 40; j <=width; j=j+50){
    plinko.push(new Plinko(j,75))
      }
  for(var j = 15; j <=width-10; j=j+50){
    plinko.push(new Plinko(j,175))
      }
      for(var j = 15; j <=width; j=j+50){
        plinko.push(new Plinko(j,175))
          }
      for(var j = 15; j <=width-10; j=j+50){
        plinko.push(new Plinko(j,175))
          }


          division1 = new Division(0,400,100,20)
          division2 = new Division(80,400,100,20)
          division3 = new Division(160,400,100,20)
          division4 = new Division(240,400,100,20)
          division5 = new Division(320,400,100,20)
          division6 = new Division(400,400,100,20)
          ground = new Ground(400,400,800,20)
        
        if(frameCount%60===0){
          particles.push(new Particle(random(width/2-10, width/2+10), 10,10))
        }
        
        }