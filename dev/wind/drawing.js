define(function(){
	function blade(ctx, x, y) {
	  if(y>-150){
		return;  
	  }
	  
	  // blade/blade
	  ctx.save();
	  var scale =  (-275-y)/125;
	  if(scale == 0){
		return;  
	  }
	  ctx.scale(1,scale);
	  try{
		ctx.translate(x,((y+670)/scale)-670);
	  }catch(e){
		ctx.translate(x,0);	  
	  }
	  ctx.beginPath();
	  ctx.moveTo(799.9, 445.3);
	  ctx.bezierCurveTo(797.0, 505.9, 751.9, 672.7, 751.9, 672.7);
	  ctx.bezierCurveTo(751.9, 672.7, 681.8, 548.8, 686.7, 447.0);
	  ctx.bezierCurveTo(691.6, 345.2, 751.9, 0.0, 751.9, 0.0);
	  ctx.bezierCurveTo(751.9, 0.0, 805.3, 332.3, 799.9, 445.3);
	  ctx.closePath();
	  ctx.fillStyle = "rgb(188, 203, 211)";
	  ctx.fill();
	  ctx.stroke();
	  ctx.restore();
	}
	return {
		blade: blade
	}
});