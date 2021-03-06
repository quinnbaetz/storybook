define(function(){
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
    	ctx.drawImage(imgs["voltMeter"].img, voltMeter.x, voltMeter.y, voltMeter.width, voltMeter.height);
    	ctx.restore();
    }
    
    function sensorMeter(sensorPos){
    	 ctx.save();
    	 ctx.translate(sensorPos.x, sensorPos.y);
    	 ctx.rotate(sensorPos.rot);
    	 ctx.scale(sensorPos.scale, sensorPos.scale);
    	 ctx.translate(-sensorPos.x, -sensorPos.y);
    	 ctx.drawImage(imgs["sensor"].img, sensorPos.x, sensorPos.y, sensorPos.width, sensorPos.height);	
    	 ctx.restore();
    }
    
    function red(redPos) {
    	 ctx.save();
    	 ctx.translate(redPos.x, redPos.y);
    	 ctx.rotate(redPos.rot);
    	 ctx.scale(redPos.scale, redPos.scale);
    	 ctx.translate(-redPos.x, -redPos.y);
    	 ctx.drawImage(imgs["red"].img, redPos.x, redPos.y, redPos.width, redPos.height);	
    	 ctx.restore();
    }
    
    function black(blackPos) {
    	 ctx.save();
    	 ctx.translate(blackPos.x, blackPos.y);
    	 ctx.rotate(blackPos.rot);
    	 ctx.scale(blackPos.scale, blackPos.scale);
    	 ctx.translate(-blackPos.x, -blackPos.y);
    	 ctx.drawImage(imgs["black"].img, blackPos.x, blackPos.y, blackPos.width, blackPos.height);	
    	 ctx.restore();
    }
    
    function glowDot(glowDot) {
    	 ctx.save();
    	 ctx.translate(glowDot.x, glowDot.y);
    	 ctx.rotate(glowDot.rot);
    	 ctx.scale(glowDot.scale, glowDot.scale);
    	 ctx.translate(-glowDot.x, -glowDot.y);
    	 ctx.drawImage(imgs["glowDot"].img, glowDot.x, glowDot.y, glowDot.width, glowDot.height);	
    	 ctx.restore();
    }
    function volt(voltPos) {
        ctx.save();
        ctx.translate(voltPos.x, voltPos.y);
        
        var dist = 119;
        ctx.translate(100-dist, 100-dist);
        ctx.rotate(voltPos.angle);
        ctx.translate(-(100-dist), -(100-dist));
        // volt/Path
        ctx.beginPath();
        ctx.moveTo(133.2, 90.8);
        ctx.bezierCurveTo(133.2, 101.8, 124.3, 110.8, 113.2, 110.8);
        ctx.bezierCurveTo(102.2, 110.8, 93.2, 101.8, 93.2, 90.8);
        ctx.bezierCurveTo(93.2, 79.7, 102.2, 70.8, 113.2, 70.8);
        ctx.bezierCurveTo(124.3, 70.8, 133.2, 79.7, 133.2, 90.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(236, 213, 0)";
        ctx.fill();

        // volt/Group

        // volt/Group/Path
        ctx.beginPath();
        ctx.moveTo(113.5, 76.5);
        ctx.lineTo(113.5, 105.5);
        ctx.lineWidth = 3.0;
        ctx.stroke();

        // volt/Group/Path
        ctx.beginPath();
        ctx.moveTo(128.0, 91.0);
        ctx.lineTo(99.0, 91.0);
        ctx.stroke();
        ctx.restore();
      }

    return {
        volt: volt,
        voltMeter: voltMeter,
        sensorMeter: sensorMeter,
        red: red,
        black: black,
        glowDot: glowDot
             
    }
});
