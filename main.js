require(['domReady', "title/title", "wind/wind", "damInside/damInside"], function(domReady) {
	domReady(function () {
    	console.log("ready");
		init();
	});
});