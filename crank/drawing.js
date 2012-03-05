  function crankBox(ctx, x, y) {
	
	  
      var alpha = ctx.globalAlpha;

      // crankBox/Path
      ctx.save();
	  
	  ctx.translate(x, y);
	  
      ctx.globalAlpha = alpha * 0.75;
      ctx.beginPath();
      ctx.moveTo(180.3, 154.1);
      ctx.bezierCurveTo(177.7, 100.0, 170.5, 53.1, 156.2, 24.1);
      ctx.bezierCurveTo(148.7, 8.9, 124.8, 0.0, 92.9, 0.0);
      ctx.bezierCurveTo(59.8, 0.0, 34.3, 8.3, 26.2, 24.1);
      ctx.bezierCurveTo(-32.8, 138.8, 26.2, 540.1, 26.2, 540.1);
      ctx.lineTo(153.2, 540.1);
      ctx.lineTo(156.2, 540.1);
      ctx.lineTo(570.2, 540.1);
      ctx.lineTo(570.2, 154.1);
      ctx.lineTo(180.3, 154.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(235, 27, 35)";
      ctx.fill();

      // crankBox/Path
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(195.2, 377.1);
      ctx.lineTo(138.2, 377.1);
      ctx.lineTo(138.2, 371.1);
      ctx.lineTo(195.2, 371.1);
      ctx.lineTo(195.2, 377.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // crankBox/Path
      ctx.beginPath();
      ctx.moveTo(58.2, 163.1);
      ctx.lineTo(0.2, 163.1);
      ctx.lineTo(0.2, 144.1);
      ctx.lineTo(58.2, 144.1);
      ctx.lineTo(58.2, 163.1);
      ctx.closePath();
      ctx.fill();

      // crankBox/Path
      ctx.beginPath();
      ctx.moveTo(172.2, 162.1);
      ctx.lineTo(114.2, 162.1);
      ctx.lineTo(114.2, 143.1);
      ctx.lineTo(172.2, 143.1);
      ctx.lineTo(172.2, 162.1);
      ctx.closePath();
      ctx.fill();

      // crankBox/Path
      ctx.beginPath();
      ctx.moveTo(550.2, 361.1);
      ctx.lineTo(504.2, 361.1);
      ctx.lineTo(504.2, 323.1);
      ctx.lineTo(550.2, 323.1);
      ctx.lineTo(550.2, 361.1);
      ctx.closePath();
      ctx.fill();

      // crankBox/Path
      ctx.beginPath();
      ctx.moveTo(570.2, 378.1);
      ctx.lineTo(550.2, 378.1);
      ctx.lineTo(550.2, 307.1);
      ctx.lineTo(570.2, 307.1);
      ctx.lineTo(570.2, 378.1);
      ctx.closePath();
      ctx.fill();

      // crankBox/Path
      ctx.beginPath();
      ctx.moveTo(359.8, 322.1);
      ctx.lineTo(312.2, 322.1);
      ctx.lineTo(247.2, 322.1);
      ctx.lineTo(199.6, 322.1);
      ctx.bezierCurveTo(199.6, 322.1, 195.2, 351.3, 195.2, 379.1);
      ctx.bezierCurveTo(195.2, 404.2, 198.8, 428.1, 198.8, 428.1);
      ctx.lineTo(247.2, 428.1);
      ctx.lineTo(312.2, 428.1);
      ctx.lineTo(360.7, 428.1);
      ctx.bezierCurveTo(360.7, 428.1, 364.2, 404.2, 364.2, 379.1);
      ctx.bezierCurveTo(364.2, 351.3, 359.8, 322.1, 359.8, 322.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(101, 101, 101)";
      ctx.fill();
      ctx.restore();
    }
	
	function wires(ctx, x, y, glowing, alpha){
	 ctx.save();
	  ctx.translate(x, y);
      ctx.beginPath();
      ctx.moveTo(0.2, 23.0);
      ctx.bezierCurveTo(27.1, 22.0, 66.6, 2.0, 80.9, 28.0);
      ctx.bezierCurveTo(90.3, 42.0, 65.0, 67.0, 110.9, 66.0);
      ctx.bezierCurveTo(155.2, 65.0, 125.1, 44.0, 122.0, 31.0);
      ctx.bezierCurveTo(115.6, 13.0, 144.1, 13.0, 166.2, 13.0);
      if(glowing){
		  ctx.lineWidth = 10;
		  ctx.strokeStyle = "rgba(255, 2550, 200, "+alpha+")";
	  }else{
		ctx.lineWidth = 3.8;
      	ctx.strokeStyle = "rgb(0, 0, 0)";
	  }
	  ctx.stroke();

      // layer4/Path
      ctx.beginPath();
      ctx.moveTo(0.2, 83.0);
      ctx.bezierCurveTo(20.5, 80.6, 49.3, 67.1, 59.2, 55.7);
      ctx.bezierCurveTo(67.1, 46.8, 73.0, 15.3, 40.1, 24.2);
      ctx.bezierCurveTo(32.7, 34.1, 33.7, 51.9, 48.0, 59.2);
      ctx.bezierCurveTo(69.0, 69.9, 76.9, 56.0, 79.5, 44.8);
      ctx.bezierCurveTo(83.2, 29.3, 82.9, 18.7, 107.4, 11.2);
      ctx.bezierCurveTo(125.0, 5.9, 144.6, 1.3, 165.2, 2.0);
      if(!glowing){
      	ctx.strokeStyle = "rgb(255, 0, 0)";
	  }
	  ctx.stroke();
      ctx.restore();	
	}
	
	
	
