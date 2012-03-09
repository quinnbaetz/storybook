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
				scene = "map";
			}else{
				scene = "title";	
			}
			var DRAGGING = false;
										
			var redBuffer;
			var blackBuffer;
			var bigBuffer;
			var title,wind,damInside, nuclear, map, damTop, coal, house;  //used to store amd modulees
			var CImage;
		</script>
        
        
        <script src='drawings.js' type="text/javascript"></script>
        
		<!--<script src='map/map.js' type='text/javascript'></script>-->
        
		    <!--<script src='house/house.js' type='text/javascript'></script>
        <script src='house/drawing.js' type='text/javascript'></script>-->
        
        <script src='crank/crank.js' type='text/javascript'></script>
        <script src='crank/drawing.js' type='text/javascript'></script>
        
        <!--<script src='coal/coal.js' type='text/javascript'></script>
        <script src='coal/drawing.js' type='text/javascript'></script>-->
        
        <!--<script src='damTop/damTop.js' type='text/javascript'></script>-->
        <!--<script src='damInside/damInside.js' type='text/javascript'></script>-->
        
        <!--<script src='nuclear/nuclear.js' type='text/javascript'></script>-->
        
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
  
  ctx = document.getElementById('2d').getContext('2d');
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  
  var images = document.getElementsByTagName('img');
  for(var i in images){
    imgs[images[i].id] = new CImage(images[i], {ctx: ctx}); 
    for(var prop in images[i].attributes){
      imgs[images[i].id][images[i].attributes[prop].name] = images[i].attributes[prop].value;
      if(images[i].attributes[prop].name === 'y'){
        imgs[images[i].id].origY = images[i].attributes[prop].value;
      } 
    }
    /*if(images[i].attributes.x){
      imgs[images[i].id].x = images[i].x;
    }
    if(images[i].y){
      console.log(i);
      imgs[images[i].id].y = images[i].y;sdfg=
    }asdfsaf
    if(images[i].width){
      imgs[images[i].id].width = images[i].width;
    }
    if(images[i].height){
      imgs[images[i].id].height = images[i].height;
    }
    if(images[i].scale){
      imgs[images[i].id].scale = images[i].y;
    }*/
  }
  console.log(imgs['help'].img.naturalHeight);
  console.log(imgs['help'].y)
  imgs['help'].y = HEIGHT-imgs['help'].img.naturalHeight-15;
  console.log(imgs['help'].y)
  
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
	wind = require('wind')();
	damInside = require('damInside')();
	nuclear = require('nuclear')();
	map = require('map')();
	damTop = require('damTop')(ctx);
	coal = require('coal')();
	house = require('house')();
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
		imgs['help'].draw();
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
	 map.draw(buffer);
	 setTimeout(draw, FRAMERATE);  
	 endDraw();
  	 return;
  }
  //ctx.clearRect(0, 0, WIDTH, HEIGHT);
  if(scene === "house"){
	  // ctx.save();
	 //ctx.translate(WIDTH, 0);
	 //ctx.rotate(90*Math.PI/180);
	 //should probably put calcPos in draw
	 house.calcPos();
	 house.draw();
	 //ctx.restore();
 	  setTimeout(draw, FRAMERATE); 
	  endDraw();
	 

	 return;
  }
   if(scene === "coal"){
		
	// ctx.save();
	 //ctx.translate(WIDTH, 0);
	 //ctx.rotate(90*Math.PI/180);
	  coal.draw();
	  setTimeout(draw, FRAMERATE); 
	 //ctx.restore();
 	 endDraw();

	 return;
  }
  
   if(scene === "damTop"){
	// ctx.save();
	 //ctx.translate(WIDTH, 0);
	 //ctx.rotate(90*Math.PI/180);
	  damTop.draw(ctx);
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
	 nuclear.draw();
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
		house.mouseReleased(x, y);
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
		house.mousePressed(x,y);
		return;	
	}
	if(scene === "map"){
		scene = map.mousePressed(x, y);
		return;	
	}
	
	if(scene === "crank"){
		crankMousePressed(x, y);	
	}
	
	if(scene === "damTop"){
		damTop.mousePressed(x, y);	
	}
	
	
	if(scene === "coal"){
		coal.mousePressed(x, y);	
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
							   "gearsWindAnim" => array("src" => $windImageLoc."gearsAnim.png", "x" => 538, "y" => 300),
							   "bgWind" => array("src" => $windImageLoc."bgWind.png"),
							    "windPost" => array("src" => $windImageLoc."wind.png", "x" => 3, "y" => 270),
							    "windMagnet" => array("src" => $windImageLoc."windMagnet.png", "x"=>690, "y"=>498),
							    "backToMap" => array("src" => "images/mapIcon.png"),
							    "help"     => array("src" => "images/helpIcon.png", "x"=>5),
								"damTop" =>  array("src" => $damTopImageLoc."dam.png"),
								"damTopText" =>  array("src" => $damTopImageLoc."damText.png", "x" => 110, "y" => 24),
								"damInsideBg" =>  array("src" => $damInsideImageLoc."bgDam.png", "y" => 100),
								"damInside" =>  array("src" => $damInsideImageLoc."dam.png", "x" => 0, "y"=>146),
								"damInsideGate" =>  array("src" => $damInsideImageLoc."gate.png", "x"=>60, "y"=>408, "width"=>35, "height"=>94, "scale"=>1.6),
								"damInsideWater" =>  array("src" => $damInsideImageLoc."watertop.png", "width"=>71, "height"=>33, "scale"=>1.8),
								"damSprite" =>  array("src" => $damInsideImageLoc."damSprite.png", "x"=> 494, "y" => 435, "scale" => 1.85),
								"damInsideText" =>  array("src" => $damInsideImageLoc."dam2Text.png", "x"=>200, "y"=>5),
								"generator" => array("src" => $coalImageLoc."generator.png", "x"=>520, "y"=>453),
								"coalWater" => array("src" => $coalImageLoc."water.png"),
								"bubbles" => array("src" => $coalImageLoc."bubbles.png", "x"=>286, "y"=>279),
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


