<!DOCTYPE html> 
<html> 
	<head> 
		<meta charset="utf-8"> 
		<title>Processing.js Basics</title> 
        <script type='text/javascript'>
			var applet = false;
			var appletX;
			var appletY;
			function touchStart(evt){
				e = evt.touches.item(0);
				mousePressed(e.clientX - appletX, e.clientY - appletY); 
				e.preventDefault(); 
				return false;
			}
			function touchMove(evt){
				e = evt.touches.item(0);
				mouseDragged(e.clientX - appletX, e.clientY - appletY); 
				evt.preventDefault(); 
				return false;
			}
			function touchEnd(evt){
				mouseReleased(); 
				evt.preventDefault();
				return false;
			}
			
			function mouseDown(e){
				applet.onmousemove = mouseMove;
				mousePressed(e.clientX - appletX, e.clientY - appletY); 
				return false;
			}
			
			function mouseUp(e){
				applet.onmousemove = "";
				mouseReleased(); 
				return false;
			}
			function mouseMove(e){
				mouseDragged(e.clientX - appletX, e.clientY - appletY); 
				return false;
			}
		
		</script>
	</head> 
	<body onload="init();" ontouchstart="return touchStart(event);" ontouchend="return touchEnd(event);" ontouchmove="return touchMove(event);"> 
	<!-- @pjs preload="ctx.drawImages/table.png"; -->
    	<script type="text/javascript"> 
// @pjs preload must be used to preload the ctx.drawImage so that it will be available when used in the sketch  



var x1 = [];
var y1 = [];
var x2 = [];
var y2 = [];
var segLength = 28;

//for now this is better if it's set to false :(
var BUFFERING = false;
//refreshes every 50 milliseconds
var FRAMERATE = 50;
var IMAGES = true;
var lightPos = 0;
var curLight = 0;

var angle = 0;
var cCrankX = 200+((370*.7)/2);
var cCrankY = 420;
var crankWidth = 171*.7; 
var crankHeight = 506*.7;

var cTGearX = cCrankX;
var cTGearY = cCrankY;
var tGearWidth =263*.7; 
var tGearHeight =263*.7;

var cBGearX = cCrankX;
var cBGearY = 565;
var bGearWidth =180*.7;
var bGearHeight = 180*.7;

var redX = 600;
var redY = 300;
var redWidth = 206 * .7;
var redHeight = 172 * .7;

var blackX = 600;
var blackY = 600;
var blackWidth = 157 *.7;
var blackHeight = 132*.7;

var ctx;
var WIDTH = 1024;
var HEIGHT = 768;
var imgs = [];

var redBuffer;
var blackBuffer;
var bigBuffer;
function init() {
  applet = document.getElementById('2d');
  appletX = parseInt(applet.offsetLeft);
  appletY = parseInt(applet.offsetTop);	
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
  var images = document.getElementsByTagName('img');
  for(var i in images){
	 imgs[images[i].id] = images[i]    
  }
  
  ctx = document.getElementById('2d').getContext('2d');
  ctx.lineWidth = 10;
  ctx.lineCap = "round"
  
    var buffer;
	if(BUFFERING){
		buffer = document.createElement('canvas');
		buffer.width = WIDTH;
		buffer.height = HEIGHT;
		redBuffer = buffer.getContext('2d');
		redBuffer.lineWidth = 10;
		redBuffer.lineCap = "round"
		buffer = document.createElement('canvas');
		buffer.width = WIDTH;
		buffer.height = HEIGHT;
		blackBuffer= buffer.getContext('2d');
		blackBuffer.lineWidth = 10;
		blackBuffer.lineCap = "round"
		buffer = document.createElement('canvas');
		buffer.width = WIDTH;
		buffer.height = HEIGHT;
		bigBuffer = buffer.getContext('2d');
	}
		
    draw(BUFFERING);

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

function draw(buffer) {
  if(typeof buffer == "undefined"){
	  buffer = false;
  }
  
  //ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.drawImage(imgs["bg"], 0, 0);
  largeGear();
  

  //ctx.drawImage(imgs["tGear"], cTGearX-tGearWidth/2, cTGearY-tGearHeight/2, tGearWidth, tGearHeight);
  //smallGear();
  //ctx.restore();
  
  smallGear();
  ctx.drawImage(imgs["sensor"], 800-420/2, 100-91/2, 420, 91);
  //lights
  
  if(blackDone && redDone){
	  ctx.save();
	  ctx.fillStyle="#FFBBBB";
	  ctx.beginPath();
	  ctx.arc(800-146+curLight*63, 100, 15, 0,Math.PI*2);
	  ctx.closePath();
	   ctx.fill();
	  ctx.beginPath();
	  ctx.arc(800-146+(curLight+3)*63, 100, 15, 0,Math.PI*2);
	  ctx.closePath();
	  ctx.fill();
	  ctx.restore();
  }
 
  container();
 
  
  if(buffer){
	  var temp = ctx;
	  ctx = redBuffer;
	  ctx.clearRect(0, 0, WIDTH, HEIGHT);
	  drawWire(redX-70, redY+50, x1, y1);
  	  ctx.stroke();
	  ctx = blackBuffer;
	  ctx.clearRect(0, 0, WIDTH, HEIGHT);
	  drawWire(blackX + 45, blackY + 45, x2, y2);
  	  ctx.stroke();
	  bigBuffer.clearRect(0, 0, WIDTH, HEIGHT);
	  bigBuffer.drawImage(redBuffer.canvas, 0, 0);
	  bigBuffer.drawImage(blackBuffer.canvas, 0, 0);
	  ctx = temp;
  }
  
 if(!blackMove && !redMove && BUFFERING==true){
	ctx.drawImage(bigBuffer.canvas, 0, 0);  
 }else{
	  if(redMove || BUFFERING==false){
		  drawWire(redX-70, redY+50, x1, y1);
		  ctx.stroke();
	  }else{
		  ctx.drawImage(redBuffer.canvas, 0, 0);  
	  }
	
	  if(blackMove || BUFFERING==false){
		  drawWire(blackX + 45, blackY + 45, x2, y2);
		  ctx.stroke();
	  }else{
		  ctx.drawImage(blackBuffer.canvas, 0, 0);  
	  }
 }
 
  

   ctx.save();
   //angle+=.1;
   ctx.translate(cCrankX, cCrankY);
   ctx.rotate(angle);
   ctx.translate(-cCrankX, -cCrankY);
   //ctx.drawImage(crank, 200+((370*.7)/2)-((171*.7)/2), 130, 171*.7, 812*.7);
   crank();
   
   ctx.restore();
   
	if(redDone){
		ctx.save();
		ctx.translate(redX, redY);
		ctx.rotate(0.34906585);
		ctx.scale(.6, .6);
		ctx.translate(-30, 60);
		ctx.translate(-redX, -redY);
		red();
		ctx.restore();
	}else{
		red();
	}
	if(blackDone){
		ctx.save();
		ctx.translate(blackX, blackY);
		ctx.rotate(2.0943951);
		ctx.scale(.75, .75);
		ctx.translate(-30, -120);
		ctx.translate(-blackX, -blackY);	
		ctx.drawImage(imgs["black"], blackX-blackWidth/2, blackY-blackHeight/2, blackWidth, blackHeight);
		ctx.restore();
	}else{
		ctx.drawImage(imgs["black"], blackX-blackWidth/2, blackY-blackHeight/2, blackWidth, blackHeight);
	}
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

var cranking = false;
var redMove = false;
var blackMove = false;
var redDone = false;
var blackDone = false;
var startX = 0;
var startY = 0;

function mouseReleased(){
	if(redMove){
		if(redX>500 && redY<150){
			redX = 590;
  			redY = 70;
			redDone = true;
		}
	}
	if(blackMove){
		if(blackX>500 && blackY<150){
			blackX = 480; 
			blackY=  100;
			blackDone = true;
		}
	}
	if(drawTimer != null){
		clearTimeout(drawTimer);
		drawTimer = null;	
		calcPos(BUFFERING);
	}
}

var drawTimer = null;
function mousePressed(touchX, touchY) {
	cranking = false;
	redMove = false;
	blackMove = false;
	
	var x;
	var y;
	
	if(touchX){
		x = touchX;
		y = touchY;	
		dragX = touchX;
		dragY = touchY;	 
	}
	startX = x;
	startY = y;
	
	if(!redDone && varersect(redX-redWidth/2, redY-redHeight/2, redWidth, redHeight, x, y)){
		redMove = true;	
	}else{
		if(!blackDone && varersect(blackX-blackWidth/2, blackY-blackHeight/2, blackWidth, blackHeight, x, y)){
			blackMove = true;	
		}else{
			if(dist(cCrankX, cCrankY, x, y)<(812*.7)/2){
				lightPos = 0;
				cranking = true;
			}
		}
	}
	
	
	
	if(redMove || blackMove || cranking){
		drawTimer = setTimeout(calcPos, FRAMERATE);	
	}	
}

function varersect(x1, y1, width, height, x2, y2){
	return (x2>x1 && x2<x1+width && y2>y1 && y2<y1+height);
}

function dist(x1, y1, x2, y2){
	return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
}

var dragX = 0;
var dragY = 0;


function calcPos(buffer){
	var x = dragX;
	var y = dragY;
	if(redMove){
		redX += (x-startX);
		redY += (y-startY);	
	}
	if(blackMove){
		blackX += (x-startX);
		blackY += (y-startY);	
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
		if(Math.abs(delta)<=1){
			if(blackDone && redDone){
				lightPos += (angle-oldAngle);
				
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
			}
		}
	}
	draw(buffer);
	drawTimer = setTimeout(calcPos, FRAMERATE);	
}

function mouseDragged(touchX, touchY) {
	if(touchX){
		dragX = touchX;
		dragY = touchY;	
	} 

}  

		</script> 
        <script src='drawings.js' type="text/javascript"></script>
		<canvas onmousedown="return mouseDown(event);" onmouseup="return mouseUp(event);" id="2d" width="1024" height="768"></canvas> 
		 <?php $images = array("container" => "case.png", 
		 					   "crank"=> "crank.png", 
							   "tGear"=> "topGear.png", 
							   "bGear"=> "bottomGear.png", 
							   "black"=> "blackClip.png", 
							   "red"=> "redClip.png", 
							   "sensor"=> "sensor.png", 
							   "bg" => "table.png"
							   );
							   
			foreach($images as $id => $image){
		?>
         	<img alt="Layer 3" id="<?=$id?>" style="display: none" src="images/<?=$image?>" />
        <?php } ?>
    </body> 
</html>


