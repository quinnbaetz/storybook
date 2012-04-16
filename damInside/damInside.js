define("damInside", ["extern/canvas.Sprites/canvas.Sprites", "extern/canvas.DrawSprites/canvas.DrawSprites", "damInside/drawing"], function(Sprite, DrawSprite, draw) {
    return function(){
        var reset = _.bind(function(){
            this.photoShow = false;
            
            this.part = 0;
            this.rot = 0;
            this.gateDrag = false;
            this.gateStartY = 0;
            this.waterlevel = 185; //400
            this.minWater = 185;
            this.maxWater = 400;
            this.expectedWaterLevel = 185;
            this.frame = 0;
            this.alpha = 0;
        
        },this);
        
        reset();
        
        var propellorSprite = new Sprite(imgs["damSprite"].img, 6, {x: imgs["damSprite"].x, y: imgs["damSprite"].y, scale: imgs["damSprite"].scale, ctx: ctx});
        //fix for bad sprite sheet
        propellorSprite.addOption("segHeightToDraw", propellorSprite.getSegHeight()-2);
        
        var waterFallSprite = new DrawSprite(draw.waterFallSprites, {x: 729, y: 405, ctx: ctx, scale: 1.85});
        
        var photoSprites = new DrawSprite([_.bind(imgs["damTopPhotosRoad"].draw, imgs["damTopPhotosRoad"])], {ctx: ctx, x: 0, y:0, callback: function(fun){fun();}});
        
        
        function drawDamInside(){
            if(photoShow){
                slideShow();
                return;
            }
            
         	frame++;
        	ctx.save();
        		  if(gateDrag){
        			var diff = dragY - gateStartY;
        			gateStartY = dragY;
        			imgs["damInsideGate"].y += diff;
        			imgs["damInsideGate"].y = Math.max(imgs["damInsideGate"].origY-imgs["damInsideGate"].getScaledHeight(), Math.min(imgs["damInsideGate"].y, imgs["damInsideGate"].origY));
        			expectedWaterLevel = (((imgs["damInsideGate"].origY-imgs["damInsideGate"].y)/imgs["damInsideGate"].getScaledHeight())*(maxWater - minWater))+minWater;
        		  }
        		  if(waterlevel<expectedWaterLevel){
        			waterlevel++;  
        		  }
        		  if(waterlevel>expectedWaterLevel){
        			waterlevel--;  
        		  }
        		  
        		  
        		  
        		  
        		var xpos;
        		var ypos;
        		var stretch;
        		var width,height;
        		ctx.save();
        		ctx.fillStyle = "#00A651";
        		
        		ctx.scale(WIDTH, 380);
        		imgs["bgBlue"].draw();
        	 	ctx.restore();
        	 
        		//ctx.drawImage(imgs["damInside"], 0, 0);
        	 	imgs["damInsideBg"].draw();
        	   
        	   
        	   
        	   //draw water
        	   ctx.fillStyle = "rgb(189,204,212)";
        	   ctx.fillRect(0,waterlevel,116,190);  
        	   xpos = 730;
        	   ypos = 600;
        	   imgs["damInsideWater"].y = waterlevel-50;
        	   imgs["damInsideWater"].draw();
               
        	   imgs["damInside"].draw();
        	   
        	   
        	  //draw waterfall bottom
        	  var rotSpeed = (imgs["damInsideGate"].origY-imgs["damInsideGate"].y)/imgs["damInsideGate"].getScaledHeight();
        	  rot=(rot+(rotSpeed*Math.PI/(32)))%(Math.PI*2);
        	  
        	 
        	  
        	  
        	  //draw motor
        	  if(frame%Math.ceil(2/(2*rotSpeed))===0){
        	      propellorSprite.advance();
        	      waterFallSprite.advance();
        	  }
        	  propellorSprite.draw();
        	  
        	  if(rotSpeed < .01){
                  alpha = Math.max(alpha-.03, 0);  
               }else{
                    alpha = Math.min(alpha+.03, 1);  
               }
        	  waterFallSprite.draw({alpha: alpha});
              
        	  
        	  
        	  imgs["damInsideGate"].draw();
        	  
        	  
        	  ctx.restore();
        	  
        	 imgs["damInsideText"].draw();
        			
        }
        
        var slideShow = function(){
            photoSprites.draw();
        }
        var cameraMsg = function(){
            photoShow = !photoShow;
            if(photoShow){
                reset();
            }
        }
        
        function damInsideReleased(){
        	gateDrag = false;
        }
        
        function damInsidePressed(x, y){
            if(photoShow){
                photoSprites.advance();
                return;
            }
            if(varersect(imgs["damInsideGate"].x, imgs["damInsideGate"].y, imgs["damInsideGate"].getScaledWidth(), imgs["damInsideGate"].getScaledHeight(), x, y)){
        		gateStartY = y;
        		gateDrag = true;
        		
        	}
        }
        return {
            draw: drawDamInside,
            mousePressed: damInsidePressed,
            mouseReleased: damInsideReleased,
            cameraMsg: cameraMsg,
            reset: reset
        }
    }
});
