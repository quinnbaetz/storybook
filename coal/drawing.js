  function pipe(ctx, x, y, color) {

      // pipe/Path
	 
      ctx.save();
	  ctx.translate(x, y);
      ctx.beginPath();
	  
	    var insideX = [426.7, 418.9, 414.2, 398.0, 398.0, 351.3, 351.7, 336.0, 336.0, 321.0, 321.0, 499.1, 513.0, 637.0, 637.0];
	  var insideY = [566.8, 566.2, 650.2, 648.5, 574.2, 574.2, 655.9, 657.2, 568.2, 556.2, 515.3,  509.2, 677.6, 692.2, 713.2];
	 
	  var outsideX = [421.6, 390.6, 390.7, 356.7, 357.0, 328.0, 328.0, 314.0, 314.0, 321.0, 512.6, 522.5, 647.0, 647.0];
	  var outsideY = [655.5, 654.4, 580.2, 578.5, 661.2, 661.2, 574.2, 558.6, 503.2, 504.2, 497.7,  669.7, 687.0, 713.2];
	  ctx.moveTo(insideX[insideX.length-1], insideY[insideX.length-1]);
      
	  for(var i = insideX.length-2; i>=0; i--){
		ctx.lineTo(insideX[i], insideY[i]);  
	  }
	 
     
	  for(var i = 0; i<outsideX.length; i++){
		ctx.lineTo(outsideX[i], outsideY[i]);  
	  }
	  
	  ctx.closePath();
      ctx.fillStyle = "rgb("+(70+color)+", 70, 75)";
      ctx.fill();
      ctx.restore();
    }

    function coal(ctx, x, y, color) {

      // coal/Path
      ctx.save();
	  ctx.translate(x, y);
      ctx.beginPath();
      ctx.moveTo(356.5, 773.6);
      ctx.lineTo(349.9, 766.2);
      ctx.lineTo(353.4, 760.2);
      ctx.lineTo(359.0, 760.2);
      ctx.lineTo(359.0, 756.2);
      ctx.lineTo(366.0, 750.2);
      ctx.lineTo(371.0, 750.2);
      ctx.lineTo(376.7, 745.1);
      ctx.lineTo(382.7, 750.9);
      ctx.lineTo(392.0, 749.5);
      ctx.lineTo(396.0, 754.2);
      ctx.lineTo(396.0, 759.2);
      ctx.lineTo(404.0, 762.9);
      ctx.lineTo(405.0, 768.7);
      ctx.lineTo(399.2, 773.6);
      ctx.lineTo(356.5, 773.6);
      ctx.closePath();
      ctx.fillStyle = "rgb("+(19+color)+", 19, 19)";
      ctx.fill();

      // coal/Path
      ctx.beginPath();
      ctx.moveTo(362.3, 761.0);
      ctx.lineTo(366.0, 761.2);
      ctx.lineTo(367.2, 764.0);
      ctx.lineTo(365.0, 762.0);
      ctx.lineTo(362.3, 761.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(167, 167, 167)";
      ctx.fill();

      // coal/Path
      ctx.beginPath();
      ctx.moveTo(385.0, 755.0);
      ctx.lineTo(386.5, 758.1);
      ctx.lineTo(389.8, 758.8);
      ctx.lineTo(386.1, 759.1);
      ctx.lineTo(385.0, 755.0);
      ctx.closePath();
      ctx.fill();

      // coal/Path
      ctx.beginPath();
      ctx.moveTo(379.1, 768.3);
      ctx.lineTo(381.0, 766.4);
      ctx.lineTo(383.3, 766.8);
      ctx.lineTo(381.0, 767.2);
      ctx.lineTo(379.1, 768.3);
      ctx.closePath();
      ctx.fill();

      // coal/Path
      ctx.beginPath();
      ctx.moveTo(375.0, 752.7);
      ctx.lineTo(377.5, 754.0);
      ctx.lineTo(378.9, 752.7);
      ctx.lineTo(377.0, 753.4);
      ctx.lineTo(375.0, 752.7);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }