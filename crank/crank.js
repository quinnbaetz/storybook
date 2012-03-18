
var handleY = 40;
var turning = false;
var distTurned = 1;
var currY = 0;
var currX = 0;
var first = true;
var goingDown = true;
var angle
var crankPos = {x:-40, y:-170};
var angle = 0;
function drawCrank(){
	if(!turning && !first){
		return;
	}
	
	calcPos();
	
	first = false;
	
	imgs["tableInside"].draw();
	
	ctx.save();
	//need to get rid of this
	ctx.translate(0, 30);
    	imgs["crankInsides"].draw(); 
    	
    	
    	if(turning){
    		wires(ctx, 238, -70, true, distTurned%300/600);
    		
    	}
    	wires(ctx, 238, -70);
    	
    	if(turning){
    		var delta = dist(currX, currY, dragX, dragY)/2;
    		currX = dragX;
    		currY = dragY;
    		//handleY = (handleY+40)%550
    		//handleY = Math.min(Math.max(40, dragY), 510);
    		distTurned += Math.abs(delta);
    		//currY = handleY;
    	}
    	
    
        gears3(230, -80, angle*2);
        gears2(230, -80, angle);
        gears1(230, -80, angle);
    	
        
        //draw line
        ctx.save();
        ctx.beginPath();
        ctx.translate(230, -70);
        ctx.moveTo(342.1, 367.0);
        ctx.bezierCurveTo(326.3, 370.9, 155.1, 413.0, 155.1, 413.0);
        ctx.lineTo(155.1, 397.0);
        ctx.bezierCurveTo(155.1, 397.0, 331.1, 353.6, 342.1, 351.0);
        ctx.bezierCurveTo(353.0, 348.4, 357.8, 363.1, 342.1, 367.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(116, 116, 116)";
        ctx.fill();
        ctx.restore();
        
        ctx.save();
        ctx.scale(1.35, 1.35);
        container(crankPos.x, crankPos.y);
        ctx.restore();
    ctx.restore();
	var cCrankX = Math.floor(imgs['crankCrank'].x) + imgs['crankCrank'].width/2;
	var cCrankY = imgs['crankCrank'].y + (imgs['crankCrank'].height)-70;
	ctx.save();
	ctx.scale(.85,.85);
    ctx.translate(cCrankX, cCrankY);
    ctx.rotate(angle);
    ctx.translate(-cCrankX, -cCrankY);
    //ctx.drawImage(crank, 200+((370*.7)/2)-((171*.7)/2), 130, 171*.7, 812*.7);
    imgs['crankCrank'].draw();
    ctx.restore();
	
}


function crankMousePressed(x, y){
	//if(varersect(130, handleY-25, 120, 50, x, y)){
		turning = true;
		currY = y;
		currX = x;
	//}
}

function calcPos(){
    var x = dragX;
    var y = dragY
    var cCrankX = Math.floor(imgs['crankCrank'].x) + imgs['crankCrank'].width/2;
    var cCrankY = imgs['crankCrank'].y + (imgs['crankCrank'].height)-70;
    if(turning){
        oldAngle = angle;
        angle = Math.atan(Math.abs(x-cCrankX)/Math.abs(y-cCrankY));
        
        if(y>cCrankY){
            angle = (Math.PI-angle);
        }
        if(x<cCrankX){
            angle = (2*Math.PI-angle);  
        }
    }
}

function crankMouseRelease(x, y){
	turning = false;	
}

function resetCrank(){
	//handleY = 40;
	turning = false;
	distTurned = 1;
	currY = 0;
	currX = 0;
	first = true;
}