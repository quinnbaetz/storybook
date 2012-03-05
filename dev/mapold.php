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




//for now this is better if it's set to false :(
var BUFFERING = false;
//refreshes every 50 milliseconds
var FRAMERATE = 50;
var IMAGES = true;

var ctx;
var HEIGHT = 1024;
var WIDTH = 768;
var imgs = [];

function init() {
  applet = document.getElementById('2d');
  appletX = parseInt(applet.offsetLeft);
  appletY = parseInt(applet.offsetTop);	
 
  var images = document.getElementsByTagName('img');
  for(var i in images){
	 imgs[images[i].id] = images[i]    
  }
  
  ctx = document.getElementById('2d').getContext('2d');
  ctx.lineWidth = 10;
  ctx.lineCap = "round"
  draw(BUFFERING); 
}

  var windmills = new Array({"x":630,"y":160, "scale":.08, "rot": 0, "speed": .1},
							{"x":580,"y":170, "scale":.12, "rot": .3, "speed": .05},
							{"x":650,"y":150, "scale":.2, "rot": .5, "speed": .07}
  							);
							
function draw(buffer) {
  if(typeof buffer == "undefined"){
	  buffer = false;
  }
  
  //ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.drawImage(imgs["map"], 0, 0);
  
  var w = 205;
  var h = 218;
  for(var i in windmills){
	  windmills[i].rot +=  windmills[i].speed;
	  
	  windmill(windmills[i].x, windmills[i].y, windmills[i].scale);
	  ctx.save();
		  ctx.translate(windmills[i].x+w*windmills[i].scale, windmills[i].y+h*windmills[i].scale);
		  ctx.rotate(windmills[i].rot);
		  ctx.translate(-(windmills[i].x+w*windmills[i].scale), -(windmills[i].y+h*windmills[i].scale));
		  blades(windmills[i].x, windmills[i].y, windmills[i].scale);
	  ctx.restore();
  }
  
  
  dam(-100, 250, 1);
  
  ctx.save();
  ctx.translate(300,500);
  ctx.scale(.4,.4);	
  ctx.drawImage(imgs["house"], 0, 0);
  ctx.restore();
  
  ctx.drawImage(imgs["nuclear"], 0, 700);
  
  
  setTimeout(draw, FRAMERATE);
  
}

function mouseReleased(){
	
}


function mousePressed(touchX, touchY) {

	if(touchX){
		x = touchX;
		y = touchY;	
		dragX = touchX;
		dragY = touchY;	 
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

}  

		</script> 
         <script src='drawings.js' type="text/javascript"></script>
		<canvas onmousedown="return mouseDown(event);" onmouseup="return mouseUp(event);" id="2d" width="768" height="1024"></canvas> 
		 <?php $images = array("map" => "map.png",
		 					   "house" => "house.png",
							   "nuclear" => "nuclear.png"
							   );
							   
			foreach($images as $id => $image){
		?>
         	<img alt="Layer 3" id="<?=$id?>" style="display: none" src="images/<?=$image?>" />
        <?php } ?>
    </body> 
</html>


