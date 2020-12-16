var me,wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24;
var gameState=0;
var meIMG,coinIMG;
function preload(){
    meIMG = loadImage("download20.png");
    coinIMG = loadImage("download22.png");
      
}
function setup(){
   createCanvas(50,50);
   me = createSprite(48,30,6,6);
   me.shapeColor="white";
   me.addImage(meIMG);
   me.scale=0.036;
   wall1=createSprite(90,20,20,1);
   wall2=createSprite(90,40,20,1);
   wall3=createSprite(100,15,1,10);
   wall4=createSprite(130,10,60,1);
   wall5=createSprite(160,28,1,35);
   wall6=createSprite(100,50,1,20);
   wall7=createSprite(171,60,60,1);
   wall8=createSprite(111,60,23,1);
   wall9=createSprite(122,65,1,10);
   wall10=createSprite(173,60,30,1);
   wall11=createSprite(170,96,60,1);
   wall12=createSprite(112,70,20,1);
   wall13=createSprite(140,103,1,15);
   wall14=createSprite(123,103,1,15);
   wall15=createSprite(109,95,30,1);
   wall16=createSprite(120,110,5,1);
   wall17=createSprite(118,125,1,30);
   wall18=createSprite(148,140,60,1);
   wall19=createSprite(178,125,1,30);
   wall20=createSprite(159,110,38,1);
   wall21=createSprite(200,78,1,36);
   wall22 = createSprite(105,83,1,25); 
   wall23 = createSprite(190,40,1,40);
   wall24 = createSprite(175,20,30,1);

   Gold = createSprite(164,124,2,2);
   //Gold.shapeColor="gold";
    Gold.addImage(coinIMG);
    Gold.scale=0.022;
   
   wall1.shapeColor="red";
   wall2.shapeColor="red";
   wall3.shapeColor="red";
   wall4.shapeColor="red";
   wall5.shapeColor="red";
   wall6.shapeColor="red";
   wall7.shapeColor="red";
   wall8.shapeColor="red"; 
   wall9.shapeColor="red";
   wall10.shapeColor="red";
   wall11.shapeColor="red";
   wall12.shapeColor="red";
   wall13.shapeColor="red";
   wall14.shapeColor="red";
   wall15.shapeColor="red";
   wall16.shapeColor="red";
   wall17.shapeColor="red";
   wall18.shapeColor="red";
   wall19.shapeColor="red";
   wall20.shapeColor="red";
   wall21.shapeColor="red";
   wall22.shapeColor="red";
   wall23.shapeColor="red";
   wall24.shapeColor="red";

  

   
}
function draw(){
  background(255);
 
  if (gameState===0){
    fill("blue")
          textSize(3);
          text("You Have To Enter a Tunnel",10,20);
          text("Press Space",20,26);
          if (keyDown("SPACE")){
            gameState=1;
            
          }
    }
    if (gameState===1){
      textSize(3);
      fill("black");
      text("You Need To Find The Hidden Treasure",0,20);
      text("Press ' t '",1,26);
      if (keyCode===116){
              gameState=2
      }
  }
    if (gameState===2){
      fill(random(0,255),random(0,255),random(0,255));
      textSize(3);
      text("Move To Your Right",20,22);
      text("Press 1",20,26);
     
      
      }
        if (keyCode===49){
          gameState=3;
    }
   
    if (gameState===3){
     
      cameraPosition();
        textSize(5);
        fill("black");
        text("Pre-Historic Temple",50,33);
        me.bounceOff(wall1);
        me.bounceOff(wall2);
        me.bounceOff(wall3);
        me.bounceOff(wall4);
        me.bounceOff(wall5);
        me.bounceOff(wall6);
        me.bounceOff(wall7);
        me.bounceOff(wall8);
        me.bounceOff(wall9);
        me.bounceOff(wall10);
        me.bounceOff(wall11);
        me.bounceOff(wall12);
        me.bounceOff(wall13);
        me.bounceOff(wall14);
        me.bounceOff(wall15);
        me.bounceOff(wall16);
        me.bounceOff(wall17);
        me.bounceOff(wall18);
        me.bounceOff(wall19);
        me.bounceOff(wall20);
        me.bounceOff(wall21);
        me.bounceOff(wall22);
        me.bounceOff(wall23);
        me.bounceOff(wall24);
      
        if (me.x<0){
          me.x=20;
        }
        if (me.y<0){
           me.y=50;
        }
        
        if (keyIsDown(UP_ARROW)){
           me.y=me.y-1;
        }
        if (keyIsDown(DOWN_ARROW)){
            me.y=me.y+1;
        }
        if (keyIsDown(LEFT_ARROW)){
            me.x=me.x-1;
        }
        if (keyIsDown(RIGHT_ARROW)){
            me.x=me.x+1;
        }
        
       
       // console.log(me.x);
       // console.log(me.y);
        if (frameCount%35===0){
        var rand=Math.round(random(1,9));
        switch(rand){
            case 1:Gold.y=23.5;Gold.x=163.5;
            break;
            case 2:Gold.y=13.5;Gold.x=140.5;
            break;
            case 3:Gold.y=96.5;Gold.x=111.5;
            break;
            case 4:Gold.y=56.5;Gold.x=104.5;
            break;
            case 5:Gold.y=64.5;Gold.x=196.5;
            break;
            case 6:Gold.y=73.5;Gold.x=108.5;
            break;
            case 7:Gold.y=92.5;Gold.x=196.5;
            break;
            case 8:Gold.y=136.5;Gold.x=174.5;
            break;
            case 9:Gold.y=113.5;Gold.x=174.5;
            default:break;
            
        }
        
      }
      if (me.isTouching(Gold)){
        gameState=4
            

      }
    }
      if (gameState===4){
        //win();
        fill("pink");
      textSize(3);
      text("You Found The Treasure",me.x-15,me.y);
      text("Refresh The Tab ",me.x-15,me.y+5);
      me.destroy();
      Gold.destroy();
      
      
      }
       
  
  
      
    
  
  drawSprites();
}
function cameraPosition(){
    camera.x=me.x;
    camera.y=me.y;
}
function win(){
  
      me.x=30;
      me.y=30;
     
}