

loadScript('1.js', step1);

function step1(error, script) {
	if (error) {
		handleError(error);
	} else {
		// ...
		loadScript('2.js', step2);
	}
}

function step2(error, script) {
	if (error) {
		handleError(error);
	} else {
		// ...
		loadScript('3.js', step3);
	}
}

function step3(error, script) {
	if (error) {
		handleError(error);
	} else {
		// ...continue after all scripts are loaded (*)
	}
}


