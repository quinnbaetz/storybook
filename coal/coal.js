define("coal", ["coal/drawing", "extern/canvas.Sprites/canvas.Sprites"], function(draw, Sprite) {
    return function(){
        var spinning = false;
        var part = 0;
        var heat = 0;
        var bubbleCount=0;
        var generatorCount=0;
        var bubbleSpeed=0;
        var generatorSpeed=0;
        
        var bubbleSprite = new Sprite(imgs["bubbles"].img, 60, {x: imgs['bubbles'].x, y: imgs['bubbles'].y, scale: .47, ctx: ctx});
        var magentSprite = new Sprite(imgs["generator"].img, 10, {x : imgs['generator'].x, y: imgs['generator'].y, ctx: ctx});
        
        var drawCoal = function(){
            
        	imgs["coalPlant"].draw();
        	draw.pipe(ctx, 0, -276, heat);
        	draw.coal(ctx, 0, -276, heat);
        	
        	if(spinning && heat<200){
        		heat++;	
        	}
        	
        	if(!spinning && heat>0){
        		heat--;	
        	}
        	
        	
        	
        	if(spinning||heat>0){
        		bubbleCount++;
        		generatorCount++;
        		bubbleSpeed=(1/heat)*400;
        		generatorSpeed=(1/heat)*400  - .01*heat;
        		if(bubbleCount >= bubbleSpeed){
        		    bubbleSprite.advance();
        			if(bubbleSprite.getPos() >= 40){
        				bubbleSprite.setPos(20);
        			}
        			bubbleCount=0;
        		}
        		if(generatorCount >= generatorSpeed){
        		        magentSprite.advance();
        				generatorCount=0;
        		}
        		
        	}else{
        		bubbleSprite.advance();
        	}
        	//ctx.drawImage(imgs["coalWater"], 286, 279);
        	
        	var gHeight = (1030/10);
        	var gWidth = 454;
        	magentSprite.draw();
        	//ctx.drawImage(imgs["generator"], 0, part*(1733/15), 194, 1733/15, 770, 458, 194, 1733/15);
        	
        	
        	  var textDX = -80;
        	  var textDY = -285;
        	  ctx.font = "21.0px 'Myriad Pro'";
              ctx.fillStyle = "rgb(0, 0, 0)";
              ctx.fillText("Most of our electricity is produced when a magnet turns inside a coil of wire.  Coal is ", 321.0+textDX, 313.8+textDY);
              ctx.fillText("burned to heat water to make steam.  The force of the steam pushes the blades of ", 321.0+textDX, 337.8+textDY);
              ctx.fillText("the turbine causing them to turn.  These blades turn the magnet to make the ", 321.0+textDX, 361.8+textDY);
              ctx.fillText("electricity that travels over wires to houses, schools, and other buildings.", 321.0+textDX, 385.8+textDY);
        
        		textDX = -10;
              // layer3/Coal is one example of a fossil fuel  Burning coal releases carbon dioxide into the atmosphereO
              ctx.fillText("Coal is one example of a fossil fuel.  ", 717.0+textDX, 457.3+textDY);
              ctx.fillText("Burning coal releases carbon ", 717.0+textDX, 481.3+textDY);
              ctx.fillText("dioxide into the atmosphere.", 717.0+textDX, 505.3+textDY);
              ctx.fillText("Tap on the coal to heat it,", 717.0+textDX, 553.3+textDY);
              ctx.fillText("and watch the coal generator", 717.0+textDX, 577.3+textDY);
              ctx.fillText("produce electricity.", 717.0+textDX, 601.3+textDY);
              ctx.restore();
        	  
        }
        
        
        var coalMousePressed = function(x, y){
        	spinning = !spinning;
        }
        return {
            mousePressed: coalMousePressed,
            draw: drawCoal
        }
    }
});