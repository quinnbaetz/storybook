
var handleY = 40;
var turning = false;
var distTurned = 1;
var currY = 0;
var currX = 0;
var first = true;
var goingDown = true;
function drawCrank(){
	if(!turning && !first){
		return;
	}
	first = false;
	
	imgs["tableInside"].draw();
	crankBox(ctx, 250, 100);
	 
	
	if(turning){
		wires(ctx, 600, 430, true, distTurned%300/600);
	}
	wires(ctx, 600, 430);
	
	if(turning){
		var delta = dist(currX, currY, dragX, dragY)/2;
		currX = dragX;
		currY = dragY;
		if(goingDown){
			handleY += delta;
			if(handleY >= 510){
				goingDown = false;
				handleY = 510;	
			}
		}else{
			handleY -= delta;
			if(handleY <= 40){
				goingDown = true;	
				handleY = 40;
			}
		}
		//handleY = (handleY+40)%550
		//handleY = Math.min(Math.max(40, dragY), 510);
		distTurned += Math.abs(delta);
		//currY = handleY;
	}
	if(Math.floor(((handleY-40)/30)%2)===1){
	    imgs["gears"].draw();
	}else{
	    imgs["gears2"].draw();
	}
	
	
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(140, handleY);
	ctx.lineTo(210, handleY);
	ctx.lineWidth = 50;
	ctx.stroke();
	
	
	
	ctx.fillStyle = "rgb(236, 28, 36)";
	if(handleY>255){
		ctx.fillRect(210, 315-80, 40, handleY+120-330);
	}else{
		ctx.fillRect(210, handleY-25, 40, 315-10-handleY);
	}
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