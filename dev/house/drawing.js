function voltMeter(voltMeter){
	ctx.save();
	ctx.translate(voltMeter.x, voltMeter.y);
	ctx.rotate(voltMeter.rot);
	ctx.scale(voltMeter.scale, voltMeter.scale);
	ctx.translate(-voltMeter.x, -voltMeter.y);
	//voltMeter.x+300*voltMeter.scale, voltMeter.y+100*voltMeter.scale
	var lightPos = {x: voltMeter.x-335, y:voltMeter.y+32};
	ctx.save();
	ctx.translate(lightPos.x, lightPos.y);
	ctx.scale(1.2, 1.2);
	drawLight(ctx, 0, 0, voltMeter.perc);
	ctx.translate(-lightPos.x, -lightPos.y);
	ctx.restore();
	ctx.drawImage(imgs["voltMeter"], voltMeter.x, voltMeter.y, voltMeter.width, voltMeter.height);
	ctx.restore();
}

function sensorMeter(sensorPos){
	 ctx.save();
	 ctx.translate(sensorPos.x, sensorPos.y);
	 ctx.rotate(sensorPos.rot);
	 ctx.scale(sensorPos.scale, sensorPos.scale);
	 ctx.translate(-sensorPos.x, -sensorPos.y);
	 ctx.drawImage(imgs["sensor"], sensorPos.x, sensorPos.y, sensorPos.width, sensorPos.height);	
	 ctx.restore();
}

function red(redPos) {
	 ctx.save();
	 ctx.translate(redPos.x, redPos.y);
	 ctx.rotate(redPos.rot);
	 ctx.scale(redPos.scale, redPos.scale);
	 ctx.translate(-redPos.x, -redPos.y);
	 ctx.drawImage(imgs["red"], redPos.x, redPos.y, redPos.width, redPos.height);	
	 ctx.restore();
}

function black(blackPos) {
	 ctx.save();
	 ctx.translate(blackPos.x, blackPos.y);
	 ctx.rotate(blackPos.rot);
	 ctx.scale(blackPos.scale, blackPos.scale);
	 ctx.translate(-blackPos.x, -blackPos.y);
	 ctx.drawImage(imgs["black"], blackPos.x, blackPos.y, blackPos.width, blackPos.height);	
	 ctx.restore();
}

function glowDot(glowDot) {
	 ctx.save();
	 ctx.translate(glowDot.x, glowDot.y);
	 ctx.rotate(glowDot.rot);
	 ctx.scale(glowDot.scale, glowDot.scale);
	 ctx.translate(-glowDot.x, -glowDot.y);
	 ctx.drawImage(imgs["glowDot"], glowDot.x, glowDot.y, glowDot.width, glowDot.height);	
	 ctx.restore();
}
