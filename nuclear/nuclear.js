define("nuclear", ["extern/canvas.Sprites/canvas.Sprites", "extern/canvas.DrawSprites/canvas.DrawSprites"], function(Sprite, DrawSprite) {
    return function(){
       
        var magentSprite = new Sprite(imgs["generator"].img, 11, {x: 400, y: 480, scale: .47, ctx: ctx});
        
        var photoSprites = new DrawSprite([_.bind(imgs["nuclearPhotosBuildings"].draw, imgs["nuclearPhotosBuildings"]),
                                           _.bind(imgs["nuclearPhotosFull"].draw, imgs["nuclearPhotosFull"]),
                                           _.bind(imgs["nuclearPhotosTowers"].draw, imgs["nuclearPhotosTowers"])], {ctx: ctx, x: 0, y:0, callback: function(fun){fun();}});
      
        var smokePos = [];
        var reset = _.bind(function(){
            this.photoShow = false;
        }, this);
        
        reset();
        
        var drawNuclear = function(){
        	if(photoShow){
                slideShow();
                return {showHelp: false};
            }
        	
            imgs["nuclearBg"].draw();
        	magentSprite.advance();
        	magentSprite.draw();
        	
        	// layer2/nuclearTextrasterizenuclearText
              ctx.font = "23.0px 'Myriad Pro'";
              ctx.fillStyle = "rgb(0, 0, 0)";
        	  var textX = 150;
              ctx.fillText("In nuclear power plants, nuclear fission heats water to make steam.", textX, 35.2);
              ctx.fillText("The force of the steam pushes the blades of the turbine causing them to ", textX, 59.2);
              ctx.fillText("turn.  These blades turn the magnet to make the electricity that travels ", textX, 83.2);
              ctx.fillText("over wires to houses, schools, and other buildings.", textX, 107.2);
              ctx.fillText("Nuclear fission does not produce the greenhouse gas, carbon dioxide, ", textX-110, 155.2);
              ctx.fillText("but there are other concerns about the safe use of nuclear fuel. ", textX-110, 179.2);
              ctx.restore();
        	
            smokeDraw();
            
        };
        
        var slideShow = function(){
            photoSprites.draw();
        };
        
        var cameraMsg = function(){
            photoShow = !photoShow;
        };
        
        var smokeDraw = function(){
            var deletes = 0;
            var maxDist = 180;
            for(var i = 0; i<smokePos.length; i++){
                var dist = ++smokePos[i].dist;
                imgs["smokeNuclear"].draw({x: 750+dist, y: -dist, alpha: 1-dist/maxDist, scale: 2.5});
                if(smokePos[i].dist>=maxDist){
                    deletes++;
                }
            }
            //delete clouds that are invisible
            for(var i = 0; i<deletes; i++){
                smokePos.shift();
            }
        }
        var addCloud = function(){
            smokePos.push({dist: 0});
        }
        var mousePressed = function(x, y){
            if(photoShow){
                photoSprites.advance();
            }else{
                if(varersect(652, 103, 350, 400, x, y) /*|| varersect(0, 250, 250, 200, x, y)*/){
                    addCloud();
                }
            }
        }
        
        return {
            draw: drawNuclear,
            cameraMsg: cameraMsg,
            mousePressed: mousePressed,
            reset: reset
        }
    };
});