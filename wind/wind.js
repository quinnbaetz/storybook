define("wind", ["wind/drawing",  "extern/canvas.Sprites/canvas.Sprites", "extern/canvas.DrawSprites/canvas.DrawSprites"], function(draw, Sprite, DrawSprite) {
	return function(){
        var reset = _.bind(function(){
             this.photoShow = false;
             
             this.rot = -400;
             this.Hblades = [-300, -130, 90];
             this.frame = 0;
             this.gearHeight = 282;
             this.gearWidth = 60;
         }, this);
         
       reset();
       
       var gearsSprite = new Sprite(imgs["gearsWindAnim"].img, 5, {x: imgs["gearsWindAnim"].x, y: imgs["gearsWindAnim"].y, scale: imgs["gearsWindAnim"].scale, ctx: ctx});
       var magentSprite = new Sprite(imgs["windMagnet"].img, 18, {x: imgs["windMagnet"].x, y: imgs["windMagnet"].y, scale: imgs["windMagnet"].scale, ctx: ctx});
       
        var photoSprites = new DrawSprite([_.bind(imgs["windPhotosBackView"].draw, imgs["windPhotosBackView"]),
                                           _.bind(imgs["windPhotosFarmhouse"].draw, imgs["windPhotosFarmhouse"]),
                                           _.bind(imgs["windPhotosLandscape2"].draw, imgs["windPhotosLandscape2"]),
                                           _.bind(imgs["windPhotosLandscape1"].draw, imgs["windPhotosLandscape1"])], {ctx: ctx, x: 0, y:0, callback: function(fun){fun();}});
      
           
    	function drawWind(){
    	    
            if(photoShow){
                slideShow();
                return;
            }
            
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
    	
    	
    	 var slideShow = function(){
             photoSprites.draw();
         }
         var cameraMsg = function(){
             photoShow = !photoShow;
         }
         var mousePressed = function(){
             if(photoShow){
                 photoSprites.advance();
             }
         }
         
    	return {
    		draw: drawWind,
    		cameraMsg: cameraMsg,
            mousePressed: mousePressed,
            reset: reset
    	}
	}
});