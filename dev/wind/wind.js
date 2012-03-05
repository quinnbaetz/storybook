define("wind", ["wind/drawing"], function(draw) {
	var rot = -400;
	var Hblades = [-300, -130, 90];
	var frame = 0;
	var part = 0;
	var numParts = 5;
	var gearHeight = 282;
	var gearWidth = 60;
	var magnetPart = 0;
	var magnetParts = 18;
	var magnetPos = {x:690, y:498, width: 131, height:1509/magnetParts};
	function drawWind(){
		frame++;
		ctx.drawImage(imgs["bgWind"], 0, 0);
		
		for(var i in Hblades){
			if(Hblades[i]<-150){
				draw.blade(ctx, -560, Hblades[i]);
			}
		}
	
			ctx.drawImage(imgs["windPost"], 3, 270);
		
		if(frame%3===0){
			part = (part+1)%numParts
		}
		ctx.drawImage(imgs["gearsWindAnim"], 0, part*gearHeight, gearWidth, gearHeight, 538, 300,  gearWidth, gearHeight)
		if(frame%3===0){
			magnetPart = (magnetPart+1)%magnetParts
		}
		ctx.drawImage(imgs["windMagnet"], 0, magnetPart*magnetPos.height, magnetPos.width, magnetPos.height, magnetPos.x, magnetPos.y, magnetPos.width, magnetPos.height)
		
		for(var i in Hblades){
			if(Hblades[i]>=-150){
				draw.blade(ctx, -560, -150 - Math.abs(-150-Hblades[i]));
			}
			Hblades[i]++;
			if(Hblades[i] >= 100){
				Hblades[i] = -400;	
			}
		}
		
		
	}
	return {
		draw: drawWind
	}
});