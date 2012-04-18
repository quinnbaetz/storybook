define("title", ["title/drawing"], function(draw) {
	
	var titleClouds = Array({type:1, x:383.0,  y:179.6},
						{type:2, x:964.9, y:185.0},
						{type:3, x:398.7, y:586.6},
						{type:4, x:940.9, y:589.5});
	var cloudTypes;
	var frame = 0;
	var cloudSpeed = 2;
	var volSum = 0;
	var volCount = 0;
	var driftDist = 60;
	var propSpeed = 1;
	var lastVol = 0;
	var currentA = 0;
	var rotX = 510;  //used for determining center of rotation for button 
	var rotY = 490;
	var float = false;
	var trans = false;
	var transPos = 0;
	var deltaY = 0;
	function drawTitle(){
		draw.titleBG(WIDTH, HEIGHT);
		if(trans){
			ctx.save();	
			ctx.translate(0, transPos-=16);
			if(transPos < -HEIGHT){
			    switchScene("map");	
			}
		}
		frame++;
		drawClouds();
		if(!float){
			//move up and down
			deltaY = frame%driftDist;
			if(deltaY>driftDist/2){
				deltaY = driftDist - deltaY;	
			}
		}else{
			deltaY-=16;
			if(deltaY < -700){
				trans = true;
			}
		}
		
		ctx.save();
			var angle = findTurnAngle();
			var perc = 100*(angle / (Math.PI*2));
			ctx.translate(0, deltaY);
			
			drawLight(ctx, 0, 0, perc);
			imgs["craft"].draw();
			var parts = 17;
			var part = Math.floor(frame/propSpeed)%parts;
			
			var propHeight = 1042;
			var pieceHeight = propHeight/parts;
			var propWidth = 214;
			ctx.drawImage(imgs["prop"].img, 0, part*pieceHeight, propWidth, pieceHeight, 403, 650, propWidth, pieceHeight);
			
			draw.topGear(ctx, 0, 0, angle);
			draw.bottomGear(ctx, 0, 0, angle*2);
			
			titleButton(angle, deltaY);
			
		ctx.restore();
		imgs["title"].draw();
		if(trans){
			ctx.restore();
		}
	}
	
	function drawClouds(){
		if(typeof(cloudTypes) === "undefined"){
			cloudTypes = Array(draw.cloud1, draw.cloud2, draw.cloud3, draw.cloud4);	
		}
		if(Math.floor(Math.max(Math.random()*(400))) === 0){
			titleClouds.push({type:Math.floor(Math.random()*4)+1, x:-20, y:Math.random()*HEIGHT});	
		}
		toDelete = Array();
		calculateCloudSpeed();
		for(var i in titleClouds){
			cloudTypes[titleClouds[i].type-1](ctx, titleClouds[i].x+=cloudSpeed, titleClouds[i].y);	
			if(titleClouds[i].x>WIDTH*1.4){
				toDelete.push(i);	
			}
		}
		
		for(var i in toDelete){
			titleClouds.splice(toDelete[i], 1);	
		}	
	}
	
	
	var first = true;
	function findTurnAngle(){
		var delta = .2;
		var cw = false;
		var ccw = false;
		var turning = false;
		if(first){
			dragX = WIDTH/2;
			dragY = 0;
			first = false;   
		}
	   var angle = 0;
	   if(DRAGGING){
	       turning = true;
		   var x = dragX;
		   var y = dragY;
		   if(typeof(x) !== "undefined" || typeof(y) !== "undefined"){
				 angle = Math.atan(Math.abs(x-rotX)/Math.abs(y-rotY));
				 if(y>rotY){
					angle = (Math.PI-angle);
				}
				if(x<rotX){
					angle = (2*Math.PI-angle);	
				}
		   }
	   }else{
		   if(typeof(acceleration.y)==="undefined"){
		       audio['clicks'].pause();
			   return currentA;
		   }
		   angle = currentA;
		   
		   delta = .1*((Math.abs(acceleration.y)-.3)/.7);
		   if(acceleration.y<-.3&&currentA<(Math.PI*2-delta)){
			   cw = true;
		   }
		   if(acceleration.y>.3&&currentA>delta){
			   ccw = true;
		   }
		   
	   }
	   if(Math.abs(currentA-angle) < Math.PI){
		   if(Math.abs(currentA-angle) > delta || cw || ccw){
		       turning = true;
			   if(currentA<angle || cw){
					currentA += delta;
			   }else if(currentA>angle || ccw){
					currentA -= delta;
			   }
		   }
	   }else{
		   if((currentA>angle || cw) && currentA > 24*(Math.PI*2/32)){
				 currentA = Math.min(Math.PI*2-.01, currentA + delta);  
		   }else if((currentA<angle || ccw) && currentA < 8*(Math.PI*2/32)){
				 currentA = Math.max(.01, currentA - delta);  
		   }
	   }
	   if(currentA > 31*(Math.PI*2/32)){
            audio['ding'].play();
            audio['clicks'].pause();
            turning = false;
			float = true;   
	   }
	   console.log(turning);
	   if(turning){
	       audio['clicks'].play();
	   }else{
           audio['clicks'].pause();
	   }
	   return currentA;
	}
	function titleButton(angle, deltaY){
	  
	   ctx.save();
	   //angle+=.1;
	   
	   ctx.translate(rotX, rotY);
	   ctx.rotate(angle-Math.PI/16);
	   ctx.translate(-rotX, -rotY);
	   //ctx.drawImage(crank, 200+((370*.7)/2)-((171*.7)/2), 130, 171*.7, 812*.7);
	   draw.button(ctx, 0, 0, (deltaY%(driftDist/2)/(driftDist)));
	   
	   ctx.restore();	
	}
	
	function calculateCloudSpeed(){
		var delta = 0;
		volCount++;
		volSum += VOLUME
		if(VOLUME>1.1*(volSum/volCount)){
			delta = .1;	
		}else{
			if(VOLUME<.9*(volSum/volCount)){
				delta = -.1;	
			}else{
				if(cloudSpeed<2){
					delta = .05;	
				}else{
					delta = -.05;
				}
			}
		}
		cloudSpeed = Math.min(3, Math.max(.5, cloudSpeed+delta));
	}
	
	return {
		draw: drawTitle
	}
});