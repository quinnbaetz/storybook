
var handleY = 40;
var turning = false;
var distTurned = 1;
var currY = 0;
var currX = 0;
var first = true;
var goingDown = true;

var crankPos = {x:-40, y:-170};
var angle = 0;
function drawCrank(){
	if(!turning && !first){
		return;
	}
	first = false;
	
	imgs["tableInside"].draw();
	imgs["crankInsides"].draw(); 
	
	ctx.save();
	ctx.scale(1.35, 1.35);
	container(crankPos.x, crankPos.y);
	ctx.restore();
	if(turning){
		wires(ctx, 238, -70, true, distTurned%300/600);
		
	}
	wires(ctx, 238, -70);
	
	if(turning){
		var delta = dist(currX, currY, dragX, dragY)/2;
		currX = dragX;
		currY = dragY;
		angle = (angle+.1)%360
		//handleY = (handleY+40)%550
		//handleY = Math.min(Math.max(40, dragY), 510);
		distTurned += Math.abs(delta);
		//currY = handleY;
	}
	var cCrankX = Math.floor(imgs['crankCrank'].x) + imgs['crankCrank'].width/2;
	var cCrankY = imgs['crankCrank'].y + (imgs['crankCrank'].height)-70;
	console.log(cCrankX, cCrankY);
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