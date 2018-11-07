

loadScript("./js/one.js").then(function(script1) {
	loadScript("./js/two.js").then(function(script2) {
		loadScript("./js/three.js").then(function(script3) {
			// this function has access to variables script1, script2 and script3
			one();
			two();
			three();
		});
	});
});

