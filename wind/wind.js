define("wind", ["wind/drawing",  "extern/canvas.Sprites/canvas.Sprites"], function(draw, Sprite) {
	return function(){
        var rot = -400;
    	var Hblades = [-300, -130, 90];
    	var frame = 0;
    	var gearHeight = 282;
    	var gearWidth = 60;
    	
    	var gearsSprite = new Sprite(imgs["gearsWindAnim"].img, 5, {x: imgs["gearsWindAnim"].x, y: imgs["gearsWindAnim"].y, scale: imgs["gearsWindAnim"].scale, ctx: ctx});
    	var magentSprite = new Sprite(imgs["windMagnet"].img, 18, {x: imgs["windMagnet"].x, y: imgs["windMagnet"].y, scale: imgs["windMagnet"].scale, ctx: ctx});
        
    	
    	function drawWind(){
    		frame++;
    		
    		imgs["bgWind"].draw();
    		
    		for(var i in Hblades){
    			if(Hblades[i]<-150){
    				draw.blade(ctx, -560, Hblades[i]);
    			}
    		}
    	
    		imgs["windPost"].draw();
    		
    		
    		
    		
    		if(frame%3===0){
    		    gearsSprite.advance();
    		    magentSprite.advance();
    		}
    		
    		gearsSprite.draw();
    		magentSprite.draw();
    		
    		for(var i in Hblades){
    			if(Hblades[i]>=-150){
    				draw.blade(ctx, -560, -150 - Math.abs(-150-Hblades[i]));
    			}
    			Hblades[i]++;
    			if(Hblades[i] >= 100){
    				Hblades[i] = -400;	
    			}
    		}
    		
    		
    	}
    	return {
    		draw: drawWind
    	}
	}
});