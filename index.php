<!DOCTYPE html> 
<html> 
    <head> 
        <meta charset="utf-8"> 
        <meta name="viewport" content="user-scalable=no" /> 
        <script type='text/javascript'>
            var applet = false;
            var appletX;
            var appletY;
            var offsetY;
            
            <?php
               
               $events = array("touchStart" => "mousePressed",
                               "touchMove" => "mouseDragged",
                         "touchEnd" => "mouseReleased",
                         "mouseDown" => "mousePressed",
                         "mouseUp" => "mouseReleased",
                         "mouseMove" => "mouseDragged");
        
                         
          foreach ($events as $i => $val) {
            ?>
            function <?= $i ?>(e){
              offsetY = document.body.scrollTop + document.documentElement.scrollTop;
              if(e.touches){ //if we are a touch event?>
                e.preventDefault();
                e = e.touches.item(0);
              }
            <?php if($i == 'mouseDown'){ //if we are a touch event?>
              applet.onmousemove = mouseMove;
            <?php } ?>
            <?php if($i == 'mouseUp'){ //if we are a touch event?>
              applet.onmousemove = "";
            <?php } ?>
            
              <?= $val?>(e.clientX - appletX, e.clientY - appletY+offsetY);
              return false;
            }
            <?php
            }
          
       ?>
       
        
        </script>
    </head> 
    <body style="padding: 0px; margin: 0px;" ontouchstart="return touchStart(event);" ontouchend="return touchEnd(event);" ontouchmove="return touchMove(event);"> 
        <script type="text/javascript">
            //for now this is better if it's set to false :(
            var BUFFERING = false;
            //refreshes every 50 milliseconds
            var FRAMERATE = 50;
            var DEBUG = false;
            
            var ctx;
            var WIDTH = 1024;
            var HEIGHT = 768;
            var VOLUME = 0;
            var acceleration = {};
            var imgs = [];
            var audio = [];
            var scene;
            var DRAGGING = false;
                                        
            var redBuffer;
            var blackBuffer;
            var bigBuffer;
            var title,wind,damInside, nuclear, map, damTop, coal, house, solar;  //used to store amd modulees
            var CImage;
          var current;
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

window.drawTitleBG=function(width, height){
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

function init() {
  CImage = require('canvas.Image');
  CAudio = require('canvas.Audio');
  console.log(CAudio)
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
      if(images[i].attributes[prop].name === 'x'){
        imgs[images[i].id].origX = images[i].attributes[prop].value;
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
  
  imgs['help'].y = HEIGHT-imgs['help'].img.naturalHeight-15;
  
  imgs['camera'].x = WIDTH-imgs['camera'].img.naturalWidth-15;
  imgs['camera'].y = HEIGHT-imgs['camera'].img.naturalHeight-15;
  
   var audios = document.getElementsByTagName('audio');
   console.log(audios);
   for(var i in audios){
      if(typeof(audios[i].id) !== "undefined"){
        audio[audios[i].id.substring(1)] = new CAudio(audios[i]);
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
    wind = require('wind')();
    damInside = require('damInside')();
    nuclear = require('nuclear')();
    map = require('map')();
    damTop = require('damTop')(ctx);
    coal = require('coal')(ctx);
    house = require('house')();
    solar = require('solar')();
    if(DEBUG){
      scene = "map";
      current = map;
    }else{
      scene = "title";
      current = title;  
    }
    
  console.log("end init about to draw");
    
    draw(BUFFERING);
    
}


function endDraw(res){
    if(scene !== "map" && scene !== "title"){
        imgs["backToMap"].draw();

    }
    if(typeof(current.helpMsg) === "function"){
      var skip = false;
      if (typeof(res) === "object" && res.showHelp === false){
         console.log("HERE HERE ----", res);
          skip = true;
      }
      if(skip !== true){
        imgs['help'].draw();
      }
    }
    if(typeof(current.cameraMsg) === "function"){
    imgs['camera'].draw();
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
    var res;
    if(scene === "crank"){
       drawCrank();
    }else{
      if(typeof(current.draw) === "function"){
        res = current.draw(ctx);
      } 
    }
    setTimeout(draw, FRAMERATE); 
     //ctx.restore();
     endDraw(res);

     return;    
}


function mouseReleased(touchX, touchY) {
    var x;
    var y;
    if(touchX){
        x = touchX;
        y = touchY;    
    }
    
    DRAGGING = false;
    if(typeof(current) !== "undefined" && typeof(current.mouseReleased) === "function"){
      current.mouseReleased(x, y);
      return;
    }
    
    //console.log("ERROR: MOUSE PRESSED NOT FIRED PROPERLY");
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

function switchScene(newScene){
    if(typeof(current) !== "undefined" && typeof(current.reset) === "function"){
       current.reset();
    }
    scene = newScene;
    current = this[scene];
  
}

function mousePressed(touchX, touchY) {
    var x;
    var y;
    DRAGGING = true;
    if(DEBUG){
      
      console.log(touchX, touchY);
    }
    if(touchX){
        x = touchX;
        y = touchY;    
        dragX = touchX;
        dragY = touchY;     
    }
    if(x<100&&y<100){
      switchScene("map");
        audio["damBG"].pause();
        audio["windBG"].pause();
        audio['boiling'].pause();
        resetCrank();
        return;    
    }
    if(x<imgs['help'].width&&y>imgs['help'].y){
       if(typeof(current.helpMsg) === "function"){
           current.helpMsg();
           return;
       }
    }
    
    if(x>imgs['camera'].x&&y>imgs['camera'].y){
     if(typeof(current.cameraMsg) === "function"){
         current.cameraMsg();
         return;
     }
  }
      
    if(typeof(current) !== "undefined" && typeof(current.mousePressed) === "function"){
         var ret = current.mousePressed(x, y);
       if(scene === "map"){
          switchScene(ret);
       }
       return;
  }
    
    
    if(scene === "crank"){
        crankMousePressed(x, y);    
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
     <?php 
      $width = 1018;
      $height = 763;
          //used for the house
          $crankPos = array("x" => 0, "y" => 0);
        
      
      $cCrankX = $crankPos['x']+200+((370*.7)/2);
      $cCrankY = $crankPos['y']+420;
      $crankWidth = 171*.7; 
      $crankHeight = 506*.7;
      
      $cTGearX = $cCrankX-50;
      $cTGearY = $cCrankY+30;
      $tGearWidth =263*.6; 
      $tGearHeight =263*.6;
      
      $cBGearX = $cCrankX-50;
      $cBGearY = $crankPos['y']+600;
      $bGearWidth =180;
      $bGearHeight = 180;
      
     ?>
      <canvas onmousedown="return mouseDown(event);" onmouseup="return mouseUp(event);" id="2d" width="<?= $width ?>" height="<?= $height ?>"></canvas> 
    
     <?php
         $titleImageLoc = "title/images/";
         $solarImageLoc = "solar/images/";
         $houseImageLoc = "house/images/";
         $mapImageLoc = "map/images/";
         $crankImageLoc = "crank/images/";
         $windImageLoc = "wind/images/";
         $damTopImageLoc = "damTop/images/";
         $damInsideImageLoc = "damInside/images/";
         $coalImageLoc = "coal/images/";
         $nuclearImageLoc = "nuclear/images/";
         $images = array("title" => array("src" => $titleImageLoc."title.png", "x" => 200, "y"=>50), 
                                "craft" => array("src" => $titleImageLoc."craft.png", "x" => 372, "y"=>137),
                               "prop" => array("src" => $titleImageLoc."propellor.png"),
                               "solarBG" => array("src" => $solarImageLoc."house.jpg"),
                                "container" => array("src" => $houseImageLoc."case.png"),
                                "crank"=> array("src" => $houseImageLoc."crank.png", "x" => $cCrankX, "y" => $cCrankY, "width"=>$crankWidth, "height"=>$crankHeight),
                               "crankCrank"=> array("src" => $houseImageLoc."crank.png", "x" => 352, "y" => 0),
                 "tGear"=> array("src" => $houseImageLoc."topGear.png", "x" => $cTGearX, "y"=>$cTGearY, "width"=>$tGearWidth, "height"=>$tGearHeight), 
                               "bGear"=> array("src" => $houseImageLoc."bottomGear.png", "x" => $cBGearX, "y"=>$cBGearY, "width"=>$bGearWidth, "height" =>$bGearHeight), 
                               "black"=> array("src" => $houseImageLoc."blackClip.png", "x"=> 450, "y" => 600),
                               "red"=> array("src" => $houseImageLoc."redClip.png", "x"=> 750, "y" => 600),
                               "sensor"=> array("src" => $houseImageLoc."sensor.png"), 
                               "glowDot"=> array("src" => $houseImageLoc."glowDot.png"),
                               "bg" => array("src" => $houseImageLoc."table.png"),
                               "houseHelp1" => array("src" => $houseImageLoc."helpMsg1.png", "x"=>380, "y"=>600),
                 "houseHelp2" => array("src" => $houseImageLoc."helpMsg2.png", "x"=>395.6, "y"=>176),
                 "houseHelp3" => array("src" => $houseImageLoc."helpMsg3.png", "x"=>705.6, "y"=>300.8),
                 "houseHelp4" => array("src" => $houseImageLoc."helpMsg4.png", "x"=>428.6, "y"=>44.8),
                         "voltMeter" => array("src" => $houseImageLoc."voltMeter.png"),
                               "map" => array("src" => $mapImageLoc."map-horizontal-roads.png"),
                                "introMsg" => array("src" => $mapImageLoc."helpMsg.png"),
                 "waterSprite" => array("src" => $mapImageLoc."water_sprite.png", "x"=>266, "y"=>66, "scale" => 1),
                 "house" => array("src" => $mapImageLoc."house.png"),
                               "nuclear" => array("src" => $mapImageLoc."nuclear.png"),
                               "dam" => array("src" => $mapImageLoc."dam.png"),
                               "bgBlue" => array("src" => $mapImageLoc."bgBlue.png"),
                               "smokeCoal" => array("src" => $mapImageLoc."smokeCoal.png"),
                               "smokeNuclear" => array("src" => $mapImageLoc."smokeNuclear.png"),
                               //TODO: turn this into a sprite
                               "gears" => array("src" => $crankImageLoc."gears.png", "x"=>308, "y"=>150),
                               "gears2" => array("src" => $crankImageLoc."gears2.png",  "x"=>308, "y"=>150),
                 "crankInsides" => array("src" => $crankImageLoc."crankInsides.png",  "x"=>250, "y"=>50),
                               "tableInside" => array("src" => $crankImageLoc."tableInside.png"),
                               "gearsWind" => array("src" => $windImageLoc."gears.png"),
                               "gears2Wind" => array("src" => $windImageLoc."gears2.png"),
                               "gearsWindAnim" => array("src" => $windImageLoc."gearsAnim.png", "x" => 538, "y" => 300),
                               "bgWind" => array("src" => $windImageLoc."bgWind.png"),
                                "windPost" => array("src" => $windImageLoc."wind.png", "x" => 3, "y" => 270),
                                "windMagnet" => array("src" => $windImageLoc."windMagnet.png", "x"=>690, "y"=>498),
                                   
                    "windPhotosBackView" => array("src" => $windImageLoc."photos/backView.jpg", "x"=>0, "y"=>0),
                    "windPhotosFarmhouse" => array("src" => $windImageLoc."photos/farmhouse.jpg", "x"=>0, "y"=>0),
                    "windPhotosLandscape1" => array("src" => $windImageLoc."photos/landscape1.jpg", "x"=>0, "y"=>0),
                    "windPhotosLandscape2" => array("src" => $windImageLoc."photos/landscape2.jpg", "x"=>0, "y"=>0),
                    
                                "backToMap" => array("src" => "images/mapIcon.png"),
                                "help"     => array("src" => "images/helpIcon.png", "x"=>5),
                                "camera"  => array("src" => "images/cameraIcon.png"),
                                  "damTop" =>  array("src" => $damTopImageLoc."dam.png"),
                                  "damTopText" =>  array("src" => $damTopImageLoc."damText.png", "x" => 110, "y" => 24),
                                  
                                      "damTopPhotosRoad" => array("src" => $damTopImageLoc."photos/road.jpg", "x"=>0, "y"=>0),
                    
                                  "damInsideBg" =>  array("src" => $damInsideImageLoc."bgDam.png", "y" => 100),
                                  "damInside" =>  array("src" => $damInsideImageLoc."dam.png", "x" => 0, "y"=>146),
                                  "damInsideGate" =>  array("src" => $damInsideImageLoc."gate.png", "x"=>60, "y"=>408, "width"=>35, "height"=>94, "scale"=>1.6),
                                  "damInsideWater" =>  array("src" => $damInsideImageLoc."watertop.png", "width"=>71, "height"=>33, "scale"=>1.8),
                                  "damInsideArrows" =>  array("src" => $damInsideImageLoc."damArrows.png", "x"=>69, "y"=> 406, "scale" => 1.85),
                  "damSprite" =>  array("src" => $damInsideImageLoc."damSprite.png", "x"=> 494, "y" => 435, "scale" => 1.85),
                                  "damInsideText" =>  array("src" => $damInsideImageLoc."dam2Text.png", "x"=>200, "y"=>5),
                                  "generator" => array("src" => $coalImageLoc."generator.png", "x"=>520, "y"=>453),
                                  "coalTapHelp" => array("src" => $coalImageLoc."coalHelp.png", "x"=>20, "y"=>393),
                  "coalDragHelp" => array("src" => $coalImageLoc."dragHelp.png", "x"=>305, "y"=>383),
                  "coalBeakHelp" => array("src" => $coalImageLoc."breakHelp.png", "x"=>420, "y"=>383),
                  "coalFireHelp" => array("src" => $coalImageLoc."fireHelp.png", "x"=>300, "y"=>583),
                  "coalWater" => array("src" => $coalImageLoc."water.png"),
                                  "bubbles" => array("src" => $coalImageLoc."bubbles.png", "x"=>285, "y"=>279),
                                  "coalPlant" => array("src" => $coalImageLoc."building.png"),
                                  
                      "coalPhotosBuildings" => array("src" => $coalImageLoc."photos/building.jpg", "x"=>0, "y"=>0),
                      "coalPhotosNight" => array("src" => $coalImageLoc."photos/night.jpg", "x"=>0, "y"=>0),
                      "coalPhotosSmokeStacks" => array("src" => $coalImageLoc."photos/smokestacks.jpg", "x"=>0, "y"=>0),
                      //"coalPhotosSunset" => array("src" => $coalImageLoc."photos/sunset.jpg", "x"=>0, "y"=>0),
                                  
                                  "nuclearBg" => array("src" => $nuclearImageLoc."bg.png"),
                                    "nuclearPhotosBuildings" => array("src" => $nuclearImageLoc."photos/buildings.jpg", "x"=>0, "y"=>0),
                                    "nuclearPhotosFull" => array("src" => $nuclearImageLoc."photos/full.jpg", "x"=>0, "y"=>0),
                                    "nuclearPhotosTowers" => array("src" => $nuclearImageLoc."photos/towers.jpg", "x"=>0, "y"=>0)
                  
                                  );
                               
            foreach($images as $id => $image){
        ?>
             <img alt="Layer 3" id="<?=$id?>" style="display: none" 
            <?php foreach($image as $prop => $val){ ?>
                <?=$prop?>='<?=$val?>' 
            <?php } ?>
          />
        <?php } 
        $audios = array(
          "SdamBG" => array("src" => "audio/dam", "attr" => 'loop'),
          "SwindBG" => array("src" => "audio/windmill", "attr" => 'loop'),
          "Sclicks" => array("src" => "audio/clicks", "attr" => 'loop'),
          "Sgenerator" => array("src" => "audio/generator", "attr" => 'loop'),
          "Sboiling" => array("src" => "audio/boiling", "attr" => 'loop'),
          "Scrunch1" => array("src" => "audio/crunch1", "attr" => ''),
          "Scrunch2" => array("src" => "audio/crunch2", "attr" => ''),
          "SclipAttach" => array("src" => "audio/click", "attr" => ''),
          "SclipRelease" => array("src" => "audio/click2", "attr" => ''),
          "Sding" => array("src" => "audio/ding", "attr" => '')
        );
        foreach($audios as $id => $audio){
        ?>
         <audio id="<?=$id?>" preload <?=$audio['attr']?>>
          <source src="<?=$audio['src']?>.ogg">
          <source src="<?=$audio['src']?>.wav">
          <source src="<?=$audio['src']?>.mp3">
      </audio>
      <?php } ?>
   </body> 
</html>


