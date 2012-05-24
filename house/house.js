define('house', ['house/drawing'], function(draw){
   return function(){
        var x1 = [];
        var y1 = [];
        var x2 = [];
        var y2 = [];
        var segLength = 28;
        var sensorType = "sensor";
        var IMAGES = true;
        var lightPos = 0;
        var curLight = 0;
        
        var crankPos = {x:-50, y:50};
        
        var angle = 0;
        
        var cCrankX = crankPos.x+200+((370*.7)/2);
        var cCrankY = crankPos.y+420;
        var crankWidth = 171*.7; 
        var crankHeight = 506*.7;
        
        var cTGearX = cCrankX;
        var cTGearY = cCrankY;
        var tGearWidth =263*.7; 
        var tGearHeight =263*.7;
        
        var cBGearX = cCrankX;
        var cBGearY = crankPos.y+565;
        var bGearWidth =180*.7;
        var bGearHeight = 180*.7;
        
        var redPos;
        var blackPos;
        
        var voltDir = 1;
        var voltBuildup = 0;
        var voltsStart = 1.5;
        var voltsEnd = 6.3;
        var volts = [];
        
        var sensorPos;
        var voltMeterPos;
        
        var cranking = false;
        var redMove = false;
        var blackMove = false;
        var redDone;
        var blackDone;
        var startX = 0;
        var startY = 0;
        
        var helpPos = 0;
        
        if(sensorType === "sensor"){
        	setSensorTypePos();
        }else{
        	setVoltMeterTypePos();
        }
        resetClips();
        
      x1.length = 8;
      for(var i=0; i < x1.length; i++) {
         x1[i] = cCrankX;
         y1[i]= cCrankY;
      }
      x2.length = 15;
      for(var i=0; i < x2.length; i++) {
      	x2[i] = cCrankX;
        y2[i]= cCrankY;
      }
    	
        
        function setSensorTypePos(){
        	sensorPos = {width: 420, height: 91, scale: 1, rot: 0};
        	//sensorPos.x = 800-sensorPos.width/2;
        	//sensorPos.y = 100-sensorPos.height/2;
        	sensorPos.x = 700-sensorPos.width/2;
        	sensorPos.y = 450-sensorPos.height/2;
        	
        	voltMeterPos = {width: 557, height: 558, scale: .4, rot: 0, x: 770, y: 10, perc:0};	
        	
        }
        
        function setVoltMeterTypePos(){
        	sensorPos = {width: 420, height: 91, scale: .8, rot: 0};
        	//sensorPos.x = 800-sensorPos.width/2;
        	//sensorPos.y = 100-sensorPos.height/2;
        	sensorPos.x = 900-sensorPos.width/2;
        	sensorPos.y = 10;
        	
        	voltMeterPos = {width: 557, height: 558, scale: .7, rot: 0, x: 570, y: 110, perc:0};	
        }
        
        function resetClips(){
        	redPos = {width: 206*.7, height:172 * .7, scale: 1, rot: 0};
        	redPos.x = 450 - redPos.width/2;
        	redPos.y = 550 - redPos.height/2;
        	redDone = false;
        	
        	blackPos = {width: 157 *.7, height:132*.7, scale: 1, rot: 0};
        	blackPos.x = 800 - blackPos.width/2;
        	blackPos.y = 550 - blackPos.height/2;
        	blackDone = false;
        }
        
        function switchSensorType(){
        	if(sensorType === "sensor"){
        		sensorType = "voltMeter";
        		setVoltMeterTypePos();
        	}else{
        		sensorType = "sensor";
        		setSensorTypePos();
        	}
        	resetClips();
        	
        }
        
        function drawLights(){
        	var dist = 60;
        	var glowDotPos = {y:sensorPos.y+25, width:95, height:100, scale:sensorPos.scale*.47};
        	glowDotPos.x = sensorPos.x+curLight*dist*glowDotPos.scale+50*sensorPos.scale;
        	var numDots = 6;
        	var litDots = 11;
        	for(var i = curLight; i<litDots; i+=3){
        		draw.glowDot(glowDotPos);
        		glowDotPos.x += (dist*glowDotPos.scale)*3;
        	}
        }
        
        function drawText(){
        	ctx.font = "23.0px 'Myriad Pro'";
        	ctx.fillStyle = "rgb(0, 0, 0)";
        	var textX = 110;
        	var textY = -5;
        	ctx.fillText("In 1831, scientist Michael Faraday", textX, 39.2+textY);
        	ctx.fillText("discovered that when a magnet is", textX, 59.2+textY);
        	ctx.fillText("moved inside a coil of wire,", textX, 79.2+textY);
        	ctx.fillText("electrical current flows in the", textX, 99.2+textY);
        	textY -= 8;
        	ctx.fillText("wire. Connect the clips on the leads", textX, 127.2+textY);
        	ctx.fillText("to the light stick and turn the", textX, 147.2+textY);
        	ctx.fillText("crank to see the lights move.  Look", textX, 167.2+textY);
        	ctx.fillText("inside to see the magnets and wire", textX, 187.2+textY);
        	ctx.fillText("coils.", textX, 207.2+textY);	
        }
        function drawBlackWire(){
        	drawWire(blackPos.x + (90*blackPos.scale), blackPos.y + (90*blackPos.scale), x2, y2);	
        }
        function drawRedWire(){
        	drawWire(redPos.x, redPos.y+(90*redPos.scale), x1, y1);	
        }
        
        function drawWire(startX, startY, x, y){
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          //From clamp inward
          dragSegment(0, startX, startY, x, y);
          
          for(var missing = dist(x[x.length-2], y[y.length-2], cCrankX, cCrankY);missing>=segLength;missing-=segLength){
        	 x.push(cCrankX);
        	 y.push(cCrankY);
          }
          
          for(var i=0; i < x.length-1; i++) {
            dragSegment(i+1, x[i], y[i], x, y);
          }
         
          
        }
        
        function drawHouse(){
        	  calcPos();
        	  imgs["bg"].draw();
        	  largeGear(angle);
        	  smallGear(angle);
        	  
        	  draw.sensorMeter(sensorPos);
        	  draw.voltMeter(voltMeterPos);
        	  
        	  
        	  
        	  if(sensorType === "voltMeter"){
        	      var poppable = false;
        	      var shiftable = false;
        	      for(var i=0; i < volts.length; i++) {
        	          console.log(voltDir);
        	          if(voltDir === -1 && volts[i] === voltsStart){
                          volts[i] = voltsEnd;
                      }
        	          
        	          volts[i]+=(.1*voltDir);
        	          
        	          
        	          if(volts[i]>voltsEnd){
        	              shiftable = true;
        	          }
        	          if(volts[i]<voltsStart){
        	              poppable = true;
                      }
        	          
        	          draw.volt({x: 783, y: 325, angle: volts[i] })
        	       }
        	      if(shiftable){
        	          volts.shift();
        	      }
        	      if(poppable){
        	          volts.pop();
        	      }
        	      
        	  }
        	  if(DRAGGING){
        	  	voltMeterPos.perc=Math.max(0, voltMeterPos.perc-1);
        	  }else{
        		voltMeterPos.perc=Math.max(0, voltMeterPos.perc-10);
        	  }
        	  if(blackDone && redDone){
        		  if(sensorType === "sensor"){
        		  	drawLights();
        		  }else{
        			ctx.save();
        			ctx.fillStyle = "#00FF00";
        			ctx.strokeStyle = "#00FF00"; 
        			ctx.textAlign = "center";
        			ctx.fillText(Math.floor(120*(voltMeterPos.perc/100)), 760, 478);  
        			ctx.restore();
        		  }
        	  }
        	 
        	  container(crankPos.x, crankPos.y);
        	  
        	  drawRedWire();
        	  ctx.stroke();
        	
        	 drawBlackWire();
        	 ctx.stroke();
        	 
        	 if(cranking || redDone || blackDone){ 
                 draw.red(redPos);
                 draw.black(blackPos);
             }
          
        	 
           ctx.save();
           ctx.translate(cCrankX, cCrankY);
           ctx.rotate(angle);
           ctx.translate(-cCrankX, -cCrankY);
           //ctx.drawImage(crank, 200+((370*.7)/2)-((171*.7)/2), 130, 171*.7, 812*.7);
           crank();
           
           ctx.restore();
           
           if(!cranking){ 
               if(!redDone){
                   draw.red(redPos);
               }
               if(!blackDone){
               draw.black(blackPos);
               }
           }
        
        	  drawText();
        	  
        	  if(helpPos<5 && typeof(imgs['houseHelp'+helpPos]) === "object" && typeof(imgs['houseHelp'+helpPos].draw) === "function"){
        	      //evenutally we'll want to make this guy dance
        	      imgs['houseHelp'+helpPos].draw();
        	  }
        	  
        	  
              ctx.restore();
        }
        
        
        function dragSegment(i, xin, yin, x, y) {
           var dx = xin - x[i];
          var dy = yin - y[i];
          var angle = Math.atan2(dy, dx);  
          x[i] = xin - Math.cos(angle) * segLength;
          y[i] = yin - Math.sin(angle) * segLength;	
          ctx.save();
          ctx.lineTo(x[i], y[i]);
          ctx.restore();
        }
        
        function houseMouseRelease(x, y){
            cranking = false; 
            if(helpPos<5){
                helpPos++;
                return;
            }

            audio['generator'].pause()

        	if(x>=730 && y>=590){
        	    switchScene("crank");	
        		return;
        	}
        	if(x>=730 && y<=200){
        		switchSensorType();
        		return;
        	}
        	var temp;
        	if(sensorType === "sensor"){
        		temp = {x: sensorPos.x, y:sensorPos.y, width: sensorPos.width, height: sensorPos.height}
        	}else{
        		temp = {x: 596, y:390, width: 350, height: 120}
        	}
        		
        		
        	if(redMove){
                audio['clipRelease'].play()

        		if(varersect(temp.x-redPos.width, temp.y-redPos.height, 
        					temp.width+redPos.width, temp.height+redPos.height, 
        					redPos.x, redPos.y)){
        			if(sensorType === "sensor"){
        				redPos.x = sensorPos.x-48;
        				redPos.y = sensorPos.y+10;
        				//redPos.rot = 0.34906585;
        				redPos.scale = .6;
        				
        			}else{
        				redPos.x = voltMeterPos.x-10;
        				redPos.y = voltMeterPos.y+350;
        				//redPos.rot = 0.34906585;
        				redPos.scale = .8;
        			}
        			redDone = true;
        		}
        	}
        	if(blackMove){
        	    audio['clipRelease'].play()

        		if(varersect(temp.x-blackPos.width, temp.y-blackPos.height, 
        					temp.width+blackPos.width, temp.height+blackPos.height, 
        					blackPos.x, blackPos.y)){
        			if(sensorType === "sensor"){
        				blackPos.x = sensorPos.x+sensorPos.scale*(sensorPos.width-20);
        				blackPos.y = sensorPos.y+sensorPos.scale*(sensorPos.height-50);
        				//blackPos.rot = Math.PI;
        				blackPos.scale = .75;
        				
        			}else{
        				blackPos.x = voltMeterPos.x+300;
        				blackPos.y = voltMeterPos.y+330;
        				//blackPos.rot = Math.PI;
        				blackPos.scale = .9;
        			}
        			blackDone = true;
        		}
        	}
        	
        	calcPos();	
        }
        
        
        function houseMousePressed(x, y){
        	if(helpPos<5){
        	    //incremeted on release
        	    return;
        	}
        	audio['generator'].play()
        	audio['generator'].volue = .5;
        	
        	startX = x;
        	startY = y;
        	
        	cranking = false;
        	redMove = false;
        	blackMove = false;
        	
        	if(!redDone && varersect(redPos.x, redPos.y, redPos.width, redPos.height, x, y)){
        	    redMove = true;	
                audio['clipAttach'].play()
        	}else{
        		if(!blackDone && varersect(blackPos.x, blackPos.y, blackPos.width, blackPos.height, x, y)){
        		    blackMove = true;	
        		    audio['clipAttach'].play()
        		}else{
        			if(dist(cCrankX, cCrankY, x, y)<(812*.7)/2){
        				lightPos = 0;
        				cranking = true;
        			}
        		}
        	}
        }
        
        function calcPos(){
        	var x = dragX;
        	var y = dragY;
        	if(redMove){
        		redPos.x += (x-startX);
        		redPos.y += (y-startY);	
        	}
        	if(blackMove){
        		blackPos.x += (x-startX);
        		blackPos.y += (y-startY);	
        	}
        	if(blackMove || redMove){
        		startX = x;
        		startY = y;	
        	}
        	if(cranking){
        		oldAngle = angle;
        		angle = Math.atan(Math.abs(x-cCrankX)/Math.abs(y-cCrankY));
        		
        		if(y>cCrankY){
        			angle = (Math.PI-angle);
        		}
        		if(x<cCrankX){
        			angle = (2*Math.PI-angle);	
        		}
        		
        		var delta = (oldAngle-angle);
        		
        		console.log(Math.abs(delta)/5);
        		
        		audio['generator'].playbackRate = Math.abs(delta)/5;
        		
        		if(Math.abs(delta)<=1){
        			if(blackDone && redDone){
        			    if(sensorType === "sensor"){
        					lightPos -= delta;
        					
        					if(lightPos>1){
        						lightPos-=1;
        						curLight=(curLight+1)%3;	
        					}
        					if(lightPos<-1){
        						lightPos+=1;
        						curLight=(curLight-1);	
        						if(curLight<0){
        							curLight = 2;	
        						}
        					}
        				}else{
        					voltMeterPos.perc=Math.min(100, voltMeterPos.perc+Math.abs(delta)*6);
        					voltBuildup -= delta;
        					if(voltBuildup > 5){
        					    voltDir = 1
        					    volts.push(voltsStart);
        					    voltBuildup = 0;
        					}
        					
        					if(voltBuildup < -5){
        					    voltDir = -1
                                volts.unshift(voltsStart);
                                voltBuildup = 0;
        					}
        					
        					
        				}
        			}
        		}
        	}
        	
        }
        return {
         draw: drawHouse,
         mousePressed: houseMousePressed,
         mouseReleased: houseMouseRelease,
         calcPos: calcPos
         
        }
    };
});
    
    
