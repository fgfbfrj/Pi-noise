// noprotect 
//PI noise
var x = 1200; 
var y = 1200; 
var seed = Math.floor(Math.random()*10000); 
var i = -0.000006;
var ifchance = Math.random()*-1.5;
var minus = ifchance / 2
function setup() 
{ 
 createCanvas(x,y); 
 background(0,0,0);
} 
function draw() {
  noLoop(); 
  for (var x2 = 0; x2 < x ;x2++){ 
    for (var y2 = 0; y2 < y ;y2++){ 
      var xnoise = x2 / 5; 
      var xnoise2 = y2 / i; 
      var xnoise3 = Math.cos(seed); 
      var ynoise = y2 / i; 
      var ynoise2 = x2 / i; 
      var ynoise3 = Math.cos(seed); 
      var noise = Math.cos(xnoise * xnoise2 / xnoise3 + ynoise *  ynoise2 / ynoise3);  
        point(x2,y2); 
        stroke(noise*255,noise*255,noise*255);    
    } 
  } 
  print(seed);
} 
//i already tried it for LUAu >:3 https://www.roblox.com/games/6522861991/PI-noise-Simulation?refPageId=01bff919-b91c-497d-a744-f091f4008a30
