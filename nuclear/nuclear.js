var part = 0;
function drawNuclear(){
	ctx.drawImage(imgs["nuclearBg"], 0, 0);
	
	part = (part+1)%10;
	var gHeight = (1030/10);
	var gWidth = 454;
	var nRatio = .47;
	ctx.drawImage(imgs["generator"], 0, part*gHeight, gWidth, gHeight, 400, 480, gWidth*nRatio, gHeight*nRatio);
	
	// layer2/nuclearTextrasterizenuclearText
      ctx.font = "23.0px 'Myriad Pro'";
      ctx.fillStyle = "rgb(0, 0, 0)";
	  var textX = 150;
      ctx.fillText("In nuclear power plants, nuclear fission heats water to make steam.", textX, 35.2);
      ctx.fillText("The force of the steam pushes the blades of the turbine causing them to ", textX, 59.2);
      ctx.fillText("turn.  These blades turn the magnet to make the electricity that travels ", textX, 83.2);
      ctx.fillText("over wires to houses, schools, and other buildings.", textX, 107.2);
      ctx.fillText("Nuclear fission does not produce the greenhouse gas, carbon dioxide, ", textX-110, 155.2);
      ctx.fillText("but there are other concerns about the safe use of nuclear fuel. ", textX-110, 179.2);
      ctx.restore();
	
	
}