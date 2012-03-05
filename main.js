require(['domReady', "title/title", "wind/wind"], function(domReady) {
	domReady(function () {
    	console.log("ready");
		init();
	});
});