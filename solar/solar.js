define("solar", ["extern/canvas.Sprites/canvas.Sprites", "extern/canvas.DrawSprites/canvas.DrawSprites"], function(Sprite, DrawSprite) {
    return function(){
       
          var reset = _.bind(function(){
              lampOn = false;
          }, this);
        
          reset();
          var lampOn = false;
          var storyShow = false;
          var photoSprites = new DrawSprite([_.bind(imgs["stacks"].draw, imgs["stacks"]),
                                             _.bind(imgs["panels"].draw, imgs["panels"])], {ctx: ctx, x: 0, y:0, callback: function(fun){fun();}});
          
          var storySprites = new DrawSprite([_.bind(imgs["page1"].draw, imgs["page1"]),
                                             _.bind(imgs["page2"].draw, imgs["page2"]),
                                             _.bind(imgs["page3"].draw, imgs["page3"]),
                                             _.bind(imgs["page4"].draw, imgs["page4"]),
                                             _.bind(imgs["page5"].draw, imgs["page5"])], {ctx: ctx, x: 0, y:0, callback: function(fun){fun();}});
        
          
          
        var drawSolar = function(){
            
            
            if(photoShow){
                slideShow();
                return {showHelp: false};
            }
            
            if(storyShow){
                storyPages();
                return {showHelp: false};
            }
            
            
            
            imgs["solarBG"].draw();
            if(lampOn){
                imgs["lampOn"].draw();
            }
        };
        
        var slideShow = function(){
            photoSprites.draw();
        }
        var storyPages = function(){
            storySprites.draw();
        }
        var cameraMsg = function(){
            if(storyShow){
                storyShow = false;
                return;
            }
            photoShow = !photoShow;
        }
        var mousePressed = function(x, y){
            if(photoShow){
                photoSprites.advance();
                return;
            }
            if(storyShow){
                storySprites.advance();
                return;
            }
          //house
            if(varersect(450, 17, 75, 300, x, y) /*|| varersect(0, 250, 250, 200, x, y)*/){
                lampOn = !lampOn;
            }
            
            if(varersect(575, 360, 90, 110, x, y) /*|| varersect(0, 250, 250, 200, x, y)*/){
                storySprites.setPos(0);
                storyShow = true;
            }
        }     
        
        var isPhotoshow = function(){
            return (photoShow || storyShow);
        }
        
        
     return {
            draw: drawSolar,
            reset: reset,
            cameraMsg: cameraMsg,
            mousePressed: mousePressed,
            isPhotoshow: isPhotoshow
        }
    };
});