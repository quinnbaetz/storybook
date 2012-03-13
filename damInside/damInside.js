define("damInside", ["extern/canvas.Sprites/canvas.Sprites", "extern/canvas.DrawSprites/canvas.DrawSprites", "damInside/drawing"], function(Sprite, DrawSprites, draw) {
    return function(){
        var part = 0;
        var rot = 0;
        var gateDrag = false;
        var gateStartY = 0;
        var waterlevel = 185; //400
        var minWater = 185;
        var maxWater = 400;
        var expectedWaterLevel = 185;
        var frame = 0;
        var alpha = 0;
        var propellorSprite = new Sprite(imgs["damSprite"].img, 6, {x: imgs["damSprite"].x, y: imgs["damSprite"].y, scale: imgs["damSprite"].scale, ctx: ctx});
        //fix for bad sprite sheet
        propellorSprite.addOption("segHeightToDraw", propellorSprite.getSegHeight()-2);
        
        var waterFallSprite = new DrawSprites(draw.waterFallSprites, {x: 729, y: 405, ctx: ctx, scale: 1.85});
        
        function drawDamInside(){
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
        
        function damInsideReleased(){
        	gateDrag = false;
        }
        
        function damInsidePressed(x, y){
            if(varersect(imgs["damInsideGate"].x, imgs["damInsideGate"].y, imgs["damInsideGate"].getScaledWidth(), imgs["damInsideGate"].getScaledHeight(), x, y)){
        		gateStartY = y;
        		gateDrag = true;
        		
        	}
        }
        return {
            draw: drawDamInside,
            mousePressed: damInsidePressed,
            mouseReleased: damInsideReleased
        }
    }
});
