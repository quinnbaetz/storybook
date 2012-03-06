require(['domReady', 'extern/canvas.Image/canvas.Image', "title/title", "wind/wind", "damInside/damInside"], function(domReady, Img) {
	domReady(function () {
	    console.log(Img);
    	console.log("ready");
		init();
	});
});