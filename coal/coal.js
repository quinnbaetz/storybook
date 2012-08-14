define("coal", ["coal/drawing", "extern/canvas.Sprites/canvas.Sprites", "extern/canvas.DrawSprites/canvas.DrawSprites"], 
function(draw, Sprite, DrawSprite) {
    return function(ctx){
        
        var reset = _.bind(function(){
            this.photoShow = false;
            
            this.spinning = false;
            this.part = 0;
            this.heat = 0;
            this.bubbleCount=0;
            this.generatorCount=0;
            this.bubbleSpeed=0;
            this.generatorSpeed=0;
            
            this.needHelp = false;
            this.helpPart = 0;
            this.coalPart = 0;
            this.dragging = false;
            this.dragStart = {x: 0, y:0};
            this.showFire = false;
            this.coalSprite = new DrawSprite(draw.coal, {ctx: ctx, x: -132, y:-146, minX: -132, maxX: 250, maxY: -146, minY: -160 });
        },this);
        
        reset();
        
        
        var bubbleSprite = new Sprite(imgs["bubbles"].img, 60, {x: imgs['bubbles'].x, y: imgs['bubbles'].y, scale: 1, ctx: ctx});
        var magentSprite = new Sprite(imgs["generator"].img, 11, {x : imgs['generator'].x, y: imgs['generator'].y, ctx: ctx});
        var fire = new DrawSprite(draw.fire, {ctx: ctx, x: 327, y:515, scale: .5});
        var photoSprites = new DrawSprite([_.bind(imgs["coalPhotosBuildings"].draw, imgs["coalPhotosBuildings"]),
                                           _.bind(imgs["coalPhotosNight"].draw, imgs["coalPhotosNight"]),
                                           _.bind(imgs["coalPhotosSmokeStacks"].draw, imgs["coalPhotosSmokeStacks"]),
                                           _.bind(imgs["coalPhotosSunset"].draw, imgs["coalPhotosSunset"]) ], {ctx: ctx, x: 0, y:0, callback: function(fun){fun();}});
        
    
        var drawCoal = function(){
            if(photoShow){
                slideShow();
                return;
            }
            
            draw.pipe(ctx, 0, -276, heat);
        	
            imgs["coalPlant"].draw();
            //draw.coal[coalPart](ctx, 0, -276, heat);
        	
            
            coalOpts = {callback: function(func){
                func(ctx, this.origX, this.origY, heat);
            }};
            if(dragging){
                coalOpts.x = Math.min(coalSprite.maxX,(Math.max(coalSprite.minX, coalSprite.origX + (dragX - dragStart.x))));
                coalOpts.y = Math.min(coalSprite.maxY,(Math.max(coalSprite.minY, coalSprite.origY + (dragY - dragStart.y))));
                if(coalOpts.x > 190){
                    dragging = false;
                    helpPart = 2;
                }
            
            }
            coalSprite.draw(coalOpts);

            if(showFire){
                fire.advance();
                fire.draw();
            }
            
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
        	    bubbleSprite.setPos(0);
        	}
        	//ctx.drawImage(imgs["coalWater"], 286, 279);
        	
        	var gHeight = (1030/10);
        	var gWidth = 454;
        	magentSprite.draw();
        	bubbleSprite.draw();
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
        	  
              if(needHelp){
                  if(typeof(helpMsgs[helpPart]) !== "undefined"){
                      helpMsgs[helpPart].draw();
                  }
              }
              
        }
        
        
        var coalMousePressed = function(x, y){
            if(photoShow){
                photoSprites.advance();
                return;
            }
            
            var coalTouch = function(){
                return (varersect(0+(coalSprite.x-coalSprite.origX), 460+(coalSprite.y-coalSprite.origY), 72, 46, x, y));
            };
            var fireTouch = function(){
                return (varersect(295, 506, 145, 76, x, y));
            };
            switch(helpPart){
                case 0:
                case 1:
                    if(coalTouch()){
                        helpPart = 1;
                        dragStart = {x: x-(coalSprite.x-coalSprite.origX), y:y-(coalSprite.y-coalSprite.origY)}
                        dragging = true;
                    }
                break;
                case 2:
                    if(coalTouch()){
                        coalSprite.advance();
                        if(coalSprite.getPos() == 2){
                            helpPart = 3;
                        }
                    }
                break;
                case 3:
                    if(fireTouch()){
                        showFire = true;
                        spinning = true;
                        helpPart = 4;
                    }
                break;
                case 4:
                    if(fireTouch()){
                        showFire = false;
                        spinning = false;
                        helpPart = 3;
                    }
                break;
            }
        
            needHelp = false;
        };
        var coalMouseReleased = function(){
            dragging = false;
        }
        
        var helpMsgs = [imgs["coalTapHelp"],imgs["coalDragHelp"],imgs["coalBeakHelp"],imgs["coalFireHelp"]]
        var helpMsg = function(){
            needHelp = true;
        };
        
        var slideShow = function(){
            console.log("drawing photospritses");
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
            mousePressed: coalMousePressed,
            mouseReleased: coalMouseReleased,
            draw: drawCoal,
            helpMsg: helpMsg,
            cameraMsg: cameraMsg,
            reset: reset
        }
    }
});