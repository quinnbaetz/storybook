define("damInside", ["extern/canvas.Sprites/canvas.Sprites", "extern/canvas.DrawSprites/canvas.DrawSprites", "damInside/drawing"], function(Sprite, DrawSprites, draw) {
    return function(){
        var part = 0;
        var rot = 0;
        var gateX = 60;
        var gateY = 408;
        var gateWidth = 35;
        var gateHeight = 94;
        var gateScale = 1.6;
        var gateDrag = false;
        var gateStartY = 0;
        var waterlevel = 185; //400
        var minWater = 185;
        var maxWater = 400;
        var expectedWaterLevel = 185;
        var frame = 0;
        var alpha = 0;
        var propellorSpite = new Sprite(imgs["damSprite"], 6, {x: 494, y:435, scale: 1.85, ctx: ctx});
        //fix for bad sprite sheet
        propellorSpite.addOption("segHeightToDraw", propellorSpite.getSegHeight()-2);
        
        var waterFallSprite = new DrawSprites(draw.waterFallSprites, {x: 729, y: 405, ctx: ctx, scale: 1.85});
        
        function drawDamInside(){
         	frame++;
        	ctx.save();
        	      
        		  if(gateDrag){
        			var diff = dragY - gateStartY;
        			gateStartY = dragY;
        			gateY += diff;
        			gateY = Math.max(408-gateHeight*gateScale, Math.min(gateY, 408));
        			expectedWaterLevel = (((408-gateY)/(gateHeight*gateScale))*(maxWater - minWater))+minWater;
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
        	 	ctx.drawImage(imgs["bgBlue"], 0, 0);
        	 	ctx.restore();
        	 
        		//ctx.drawImage(imgs["damInside"], 0, 0);
        	   ctx.drawImage(imgs["damInsideBg"], 0, 100);
        	   
        	   
        	   
        	   //draw water
        	   ctx.fillStyle = "rgb(189,204,212)";
        	   ctx.fillRect(0,waterlevel,116,190);  
        	   xpos = 730;
        	   ypos = 600;
        	   stretch = 1.8;
        	   width = 71;
        	   height = 33;
        	   ctx.drawImage(imgs["damInsideWater"], 0, 0, width, height, 0, waterlevel-50, width*stretch, height*stretch);
        	   
        	   ctx.drawImage(imgs["damInside"], 0, 146);
        	   
        	   
        	  //draw waterfall bottom
        	  var rotSpeed = (408-gateY)/(gateHeight*gateScale);
        	  rot=(rot+(rotSpeed*Math.PI/(32)))%(Math.PI*2);
        	  
        	 
        	  
        	  
        	  //draw motor
        	  if(frame%Math.ceil(2/(2*rotSpeed))===0){
        	      propellorSpite.advance();
        	      waterFallSprite.advance();
        	  }
        	  propellorSpite.draw();
        	  
        	  if(rotSpeed < .01){
                  alpha = Math.max(alpha-.03, 0);  
               }else{
                    alpha = Math.min(alpha+.03, 1);  
               }
        	  waterFallSprite.draw({alpha: alpha});
              
        	  
        	  
        	  ctx.drawImage(imgs["damInsideGate"], 0, 0, gateWidth, gateHeight, gateX, gateY, gateWidth*gateScale, gateHeight*gateScale)
        	  
        	  
        	  ctx.restore();
        	  
        	  ctx.drawImage(imgs["damInsideText"], 200, 5)
        			
        }
        
        function damInsideReleased(){
        	gateDrag = false;
        }
        
        function damInsidePressed(x, y){
            console.log("here", x, y);
        	if(varersect(gateX, gateY, gateWidth*gateScale, gateHeight*gateScale, x, y)){
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
