<!DOCTYPE html> 
<html> 
	<head> 
		<meta charset="utf-8"> 
        <meta name="viewport" content="user-scalable=no;" /> 
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
				e = evt.touches.item(0);
				mouseReleased(e.clientX - appletX, e.clientY - appletY); 
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
				mouseReleased(e.clientX - appletX, e.clientY - appletY); 
				return false;
			}
			function mouseMove(e){
				mouseDragged(e.clientX - appletX, e.clientY - appletY); 
				return false;
			}
		
		</script>
	</head> 
	<body style="padding: 0px; margin: 0px;" ontouchstart="return touchStart(event);" ontouchend="return touchEnd(event);" ontouchmove="return touchMove(event);"> 
		<script type="text/javascript">
			//for now this is better if it's set to false :(
			var BUFFERING = false;
			//refreshes every 50 milliseconds
			var FRAMERATE = 50;
			var DEBUG = true;
			
			var ctx;
			var WIDTH = 1024;
			var HEIGHT = 768;
			var VOLUME = 0;
			var acceleration = {};
			var imgs = [];
			var scene;
			if(DEBUG){
				scene = "damInside";
			}else{
				scene = "title";	
			}
			var DRAGGING = false;
										
			var redBuffer;
			var blackBuffer;
			var bigBuffer;
			var title,wind,damInside;  //used to store amd modulees
			var CImage;
		</script>
        
        
        <script src='drawings.js' type="text/javascript"></script>
        
		<script src='map/map.js' type='text/javascript'></script>
        
		<script src='house/house.js' type='text/javascript'></script>
        <script src='house/drawing.js' type='text/javascript'></script>
        
        <script src='crank/crank.js' type='text/javascript'></script>
        <script src='crank/drawing.js' type='text/javascript'></script>
        
        <script src='coal/coal.js' type='text/javascript'></script>
        <script src='coal/drawing.js' type='text/javascript'></script>
        
        <script src='damTop/damTop.js' type='text/javascript'></script>
        <!--<script src='damInside/damInside.js' type='text/javascript'></script>-->
        
        <script src='nuclear/nuclear.js' type='text/javascript'></script>
        
		<script data-main="main" src="require.js"></script>
        
    	<script type="text/javascript"> 
// @pjs preload must be used to preload the ctx.drawImage so that it will be available when used in the sketch  


function setVolume(v){
	//alert(v*100);
	VOLUME = v;	
}

function setAcceleration(x, y, z){
	//alert(v*100);
	acceleration = {x:x,y:y,z:z};	
}
function init() {
  CImage = require('canvas.Image');
  console.log("init");
  applet = document.getElementById('2d');
  appletX = parseInt(applet.offsetLeft);
  appletY = parseInt(applet.offsetTop);	

  initHouse();
  
  ctx = document.getElementById('2d').getContext('2d');
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  
  var images = document.getElementsByTagName('img');
  for(var i in images){
    imgs[images[i].id] = new CImage(images[i], {ctx: ctx, }); 
    if(images[i].x){
      imgs[images[i].id].x = images[i].x;
    }
    if(images[i].y){
      imgs[images[i].id].x = images[i].y;
    }
  }
  
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
	title = require('title');
	wind = require('wind');
	damInside = require('damInside')();
	draw(BUFFERING);
	
}

function drawTitleBG(width, height){
  ctx.beginPath();
  ctx.moveTo(width, height);
  ctx.lineTo(0.0, height);
  ctx.lineTo(0.0, 0.0);
  ctx.lineTo(width, 0.0);
  ctx.lineTo(width, height);
  ctx.closePath();
  ctx.fillStyle = "rgb(121, 237, 255)";
  ctx.fill();	
	
}


function endDraw(){
	if(scene !== "map" && scene !== "title"){
		imgs["backToMap"].draw();
		
		ctx.drawImage(imgs['help'], 5, HEIGHT-imgs['help'].naturalHeight-15);
	}
	if(DEBUG){
		/*ctx.fillStyle = "#000000";
		ctx.strokeStyle = "#000000"; 
		ctx.fillText("Volume: "+VOLUME, 110, 10);
		ctx.fillText("accelx: "+acceleration.x, 110, 30);
		ctx.fillText("accely: "+acceleration.y, 110, 50);
		ctx.fillText("accelz: "+acceleration.z, 110, 70);
		ctx.fillText("accelz: "+DRAGGING, 110, 100);*/
	}
}
function draw(buffer) {
  if(typeof buffer == "undefined"){
	  buffer = false;
  }
  if(scene === "title"){
	 title.draw(buffer);
	 setTimeout(draw, FRAMERATE);  
	 endDraw();
  	 return;
  }
  
  if(scene === "map"){
	 drawMap(buffer);
	 setTimeout(draw, FRAMERATE);  
	 endDraw();
  	 return;
  }
  //ctx.clearRect(0, 0, WIDTH, HEIGHT);
  if(scene === "house"){
	  // ctx.save();
	 //ctx.translate(WIDTH, 0);
	 //ctx.rotate(90*Math.PI/180);
	 calcPos();
	 drawHouse();
	 //ctx.restore();
 	  setTimeout(draw, FRAMERATE); 
	  endDraw();
	 

	 return;
  }
   if(scene === "coal"){
		
	// ctx.save();
	 //ctx.translate(WIDTH, 0);
	 //ctx.rotate(90*Math.PI/180);
	  drawCoal();
	  setTimeout(draw, FRAMERATE); 
	 //ctx.restore();
 	 endDraw();

	 return;
  }
  
   if(scene === "damTop"){
	// ctx.save();
	 //ctx.translate(WIDTH, 0);
	 //ctx.rotate(90*Math.PI/180);
	  drawDamTop();
	  setTimeout(draw, FRAMERATE); 
	 //ctx.restore();
 	 endDraw();

	 return;
  }
     if(scene === "damInside"){
       damInside.draw();
	// ctx.save();
	 //ctx.translate(WIDTH, 0);
	 //ctx.rotate(90*Math.PI/180);
	  setTimeout(draw, FRAMERATE); 
	 //ctx.restore();
 	 endDraw();

	 return;
  }
    if(scene === "crank"){
	// ctx.save();
	 //ctx.translate(WIDTH, 0);
	 //ctx.rotate(90*Math.PI/180);
	 drawCrank();
	  setTimeout(draw, FRAMERATE); 
	 //ctx.restore();
 	 endDraw();

	 return;
  }
  if(scene == "wind"){
	// ctx.save();
	 //ctx.translate(WIDTH, 0);
	 //ctx.rotate(90*Math.PI/180);
	 wind.draw();
	  setTimeout(draw, FRAMERATE); 
	 //ctx.restore();
 	 endDraw();

	 return;
  }
  if(scene == "nuclear"){
	// ctx.save();
	 //ctx.translate(WIDTH, 0);
	 //ctx.rotate(90*Math.PI/180);
	 drawNuclear();
	 setTimeout(draw, FRAMERATE); 
	 //ctx.restore();
 	 endDraw();

	 return;
  }
}


function mouseReleased(touchX, touchY) {
	var x;
	var y;
	if(touchX){
		x = touchX;
		y = touchY;	
	}
	
	DRAGGING = false;
	if(scene === "house"){
		houseMouseRelease(x, y);
		return;	
	}
	if(scene === "crank"){
		crankMouseRelease();
		return;	
	}
	 if(scene === "damInside"){
	   damInside.mouseReleased(x, y);
		return; 
	 }
}


function mousePressed(touchX, touchY) {
	var x;
	var y;
	DRAGGING = true;
	if(touchX){
		x = touchX;
		y = touchY;	
		dragX = touchX;
		dragY = touchY;	 
	}
	if(x<100&&y<100){
		scene = "map";
		resetCrank();
		return;	
	}
	if(x<imgs['help'])
	
	
	
	if(scene === "house"){
		//x+=WIDTH;
		//houseMousePressed(y, -x+WIDTH);
		houseMousePressed(x,y);
		return;	
	}
	if(scene === "map"){
		mapMousePressed(x, y);
		return;	
	}
	
	if(scene === "crank"){
		crankMousePressed(x, y);	
	}
	
	if(scene === "damTop"){
		damTopMousePressed(x, y);	
	}
	
	
	if(scene === "coal"){
		coalMousePressed(x, y);	
	}
	
	 if(scene === "damInside"){
     damInside.mousePressed(x, y);
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


function mouseDragged(touchX, touchY) {
	if(touchX){
		dragX = touchX;
		dragY = touchY;	
	} 
	
	//This accounts for rotation
	/*if(scene === "house"){
		dragX = touchY;
		dragY = -touchX+WIDTH;
		return;	
	}*/
}  

function drawEllipse(ctx, x, y, w, h) {
  var kappa = .5522848;
      ox = (w / 2) * kappa, // control point offset horizontal
      oy = (h / 2) * kappa, // control point offset vertical
      xe = x + w,           // x-end
      ye = y + h,           // y-end
      xm = x + w / 2,       // x-middle
      ym = y + h / 2;       // y-middle

  ctx.beginPath();
  ctx.moveTo(x, ym);
  ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  ctx.closePath();
  ctx.fill();
}


		</script> 
    
		<canvas onmousedown="return mouseDown(event);" onmouseup="return mouseUp(event);" id="2d" width="1018" height="763"></canvas> 
		 <?php 
		 
		 $titleImageLoc = "title/images/";
		 $houseImageLoc = "house/images/";
		 $mapImageLoc = "map/images/";
		 $crankImageLoc = "crank/images/";
		 $windImageLoc = "wind/images/";
		 $damTopImageLoc = "damTop/images/";
		 $damInsideImageLoc = "damInside/images/";
		 $coalImageLoc = "coal/images/";
		 $nuclearImageLoc = "nuclear/images/";
		 $images = array("title" => array("src" => $titleImageLoc."title.png"), 
		 					   "craft" => array("src" => $titleImageLoc."craft.png"),
							   "prop" => array("src" => $titleImageLoc."propellor.png"),
		 					   "container" => array("src" => $houseImageLoc."case.png"),
		 					   "crank"=> array("src" => $houseImageLoc."crank.png"),
							   "tGear"=> array("src" => $houseImageLoc."topGear.png"), 
							   "bGear"=> array("src" => $houseImageLoc."bottomGear.png"), 
							   "black"=> array("src" => $houseImageLoc."blackClip.png"),
							   "red"=> array("src" => $houseImageLoc."redClip.png"),
							   "sensor"=> array("src" => $houseImageLoc."sensor.png"), 
							   "glowDot"=> array("src" => $houseImageLoc."glowDot.png"),
							   "bg" => array("src" => $houseImageLoc."table.png"),
							   "voltMeter" => array("src" => $houseImageLoc."voltMeter.png"),
							   "map" => array("src" => $mapImageLoc."map-horizontal_construction.png"),
		 					   "house" => array("src" => $mapImageLoc."house.png"),
							   "nuclear" => array("src" => $mapImageLoc."nuclear.png"),
							   "dam" => array("src" => $mapImageLoc."dam.png"),
							   "bgBlue" => array("src" => $mapImageLoc."bgBlue.png"),
							   "smokeCoal" => array("src" => $mapImageLoc."smokeCoal.png"),
							   "smokeNuclear" => array("src" => $mapImageLoc."smokeNuclear.png"),
							   "gears" => array("src" => $crankImageLoc."gears.png"),
							   "gears2" => array("src" => $crankImageLoc."gears2.png"),
							   "tableInside" => array("src" => $crankImageLoc."tableInside.png"),
							   "gearsWind" => array("src" => $windImageLoc."gears.png"),
							   "gears2Wind" => array("src" => $windImageLoc."gears2.png"),
							   "gearsWindAnim" => array("src" => $windImageLoc."gearsAnim.png"),
							   "bgWind" => array("src" => $windImageLoc."bgWind.png"),
							    "windPost" => array("src" => $windImageLoc."wind.png"),
							    "windMagnet" => array("src" => $windImageLoc."windMagnet.png"),
							    "backToMap" => array("src" => "images/mapIcon.png"),
							    "help"     => array("src" => "images/helpIcon.png"),
								"damTop" =>  array("src" => $damTopImageLoc."dam.png"),
								"damTopText" =>  array("src" => $damTopImageLoc."damText.png"),
								"damInsideBg" =>  array("src" => $damInsideImageLoc."bgDam.png"),
								"damInside" =>  array("src" => $damInsideImageLoc."dam.png"),
								"damInsideGate" =>  array("src" => $damInsideImageLoc."gate.png"),
								"damInsideWater" =>  array("src" => $damInsideImageLoc."watertop.png"),
								"damSprite" =>  array("src" => $damInsideImageLoc."damSprite.png"),
								"damInsideText" =>  array("src" => $damInsideImageLoc."dam2Text.png"),
								"generator" => array("src" => $coalImageLoc."generator.png"),
								"coalWater" => array("src" => $coalImageLoc."water.png"),
								"bubbles" => array("src" => $coalImageLoc."bubbles.png"),
								"coalPlant" => array("src" => $coalImageLoc."building.png"),
								"nuclearBg" => array("src" => $nuclearImageLoc."bg.png")
								);
							   
			foreach($images as $id => $image){
		?>
         	<img alt="Layer 3" id="<?=$id?>" style="display: none" 
            <?php foreach($image as $prop => $val){ ?>
                <?=$prop?>='<?=$val?>' 
            <?php } ?>
          />
        <?php } ?>
    </body> 
</html>


