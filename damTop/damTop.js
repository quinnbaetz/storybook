define("damTop", ["extern/canvas.DrawSprites/canvas.DrawSprites", "extern/underscore/underscore.js"], function(DrawSprite) {
    return function(ctx){
        var reset = _.bind(function(){
            this.photoShow = false;
        
            this.totalPoints = 7; //Total # of Peaks & Valleys. Should be an odd number to account for the middle point.
            this.ampMultiplier = .8; //Amplitude of the waves. Further multipled by totalPoints.
            this.framerate = 30; //framerate in ms (1000/30 = 33.33 fps)
            this.cWidth = 900; //Canvas Width will be changed to the width of the viewport
            this.cHeight = 20; //Canvas Height
            this.waterLevel = 360; //The y value of the surface of the water
            this.spreadAccelleration = 1.01; //Acceleration for point spread
            this.spreadSpeed = 15; //Fixed speed for point spread
            
            //Global Static Variables
            this.dur = (totalPoints-3)*9; //Duration. Calculation is Total points, minus mid and end points
            this.midPointIndex = Math.floor(totalPoints/2); //The index of the midpoint within the Points array
            this.midPointX; //X position of cursor
            this.canvas; //The canvas element
            this.ctx; //The Canvas Context
            this.animation; //Interval that runs drawing script
            this.animationActive = false; //true when an animation is occuring, used to control the frequency of the animation
            this.C = Math.PI/180; //Constant used in the sine function
            this.points; //An array container that holds each point
            this.point; //Holds the current point
            this.counter; //The counter that we'll increment to control each frame of the animation
            this.first = true;
        
        },this);
        
        reset();
        
        var photoSprites = new DrawSprite([_.bind(imgs["damTopPhotosRoad"].draw, imgs["damTopPhotosRoad"])], {ctx: ctx, x: 0, y:0, callback: function(fun){fun();}});
      
        //damTopPhotosRoad
        
        var drawDamTop = function(){
                if(photoShow){
                    slideShow();
                    return {showHelp: false};
                }
                
        		this.ctx = ctx;
                ctx.save();
        		ctx.fillStyle = "#00A651";
        		//ctx.fillRect(0, 290, WIDTH, 100);
        		ctx.fillRect(0, 0, WIDTH, HEIGHT);
        		
        		 ctx.fillStyle = "rgb(189,204,212)";
        		//every time animation starts{
        	   if(animationActive){
        		   drawShape();
        	   }else{
        		   ctx.fillRect(0,waterLevel,cWidth,HEIGHT-waterLevel);  
        	   }
        			
        	   imgs["damTop"].draw();
        	   imgs["damTopText"].draw();
        	  
        	  ctx.restore();
        			
        }
        
        var damTopMousePressed = function(x, y){
            if(photoShow){
                photoSprites.advance();
                return;
            }
           if(varersect(970, 159, 50, 50, x, y) || varersect(270, 621, 160, 120, x, y)){
        		switchScene("damInside");
        		return;   
           }
          if (!animationActive){
        	cHeight = HEIGHT;
        	midPointIndex = Math.floor(totalPoints / 2);
        	midPointX = x;
        	point = 1; //Start counting at 1 since we're setting points[0] at the get go
        	counter = 0;
        	points = new Array();
        	points[0] = new Array(spreadSpeed,0);//The outer points ground out the mid point
        	animationActive = true;
          }
        };
        
        function drawShape(){
         
            midPointY = Math.sin(counter*10*C)*((dur-counter)*ampMultiplier); //Calculates the y value of the midpoint
         
            if (counter <= dur){
              points[midPointIndex] = new Array(0,midPointY);
         
              //Check if counter has reached 90deg or 270deg, if so, time to spawn another point
              if (counter%9 == 0 && counter%2 == 1){
                points[point] = Array(-1,midPointY);
                point++;
              }
            }
         
           
            ctx.beginPath();
            ctx.moveTo(0, waterLevel); //Start on the left side
         	
            //Will contain the previous point to help each point set its bezier curve
            var lastPoint = new Array(0,waterLevel);
         
            //Loop through the array of points
            //Calculates the proper x and y values of each point
            //Does the actual drawing
        	 	
            for (var pt = 0; pt < totalPoints; pt++){
              if (points[pt]){
                if (pt < midPointIndex){
                  points[pt][0] = (points[pt][0]*spreadAccelleration)-spreadSpeed; //Move points away from the center point
                  points[(midPointIndex-pt)+midPointIndex] = new Array(-points[pt][0],points[pt][1]); //Create an opposite point
                }
         	
                var x = points[pt][0]+midPointX;
                var y = points[pt][1]+waterLevel;
        		
        		//if(x+5 > cWidth ||x-5 < 0){
        		//	continue;
        		//}
         		var bezHandle1 = ((x-lastPoint[0])/2)+lastPoint[0];
                var bezHandle2 = x-((x-lastPoint[0])/2);
                ctx.bezierCurveTo(bezHandle1, lastPoint[1], bezHandle2, y, x, y);
         
                lastPoint[0] = x;
                lastPoint[1] = y;
              }
            };
         
           	ctx.lineTo(cWidth, waterLevel);
          	ctx.lineTo(cWidth, cHeight);
          	ctx.lineTo(0,cHeight);
          	ctx.closePath();
          
            ctx.closePath();
         
            ctx.fill();
         
            counter++;
            //if ( counter == dur) animationActive = false;
            if (counter >= (dur*2)){
        		animationActive = false;    
        	}
          }
        
        var slideShow = function(){
            photoSprites.draw();
        }
        var cameraMsg = function(){
            photoShow = !photoShow;
            if(photoShow){
                reset();
                photoShow = true;
            }
        }
          return {
              draw: drawDamTop,
              mousePressed: damTopMousePressed,
              cameraMsg: cameraMsg,
              reset: reset
              
          };
    }
});
