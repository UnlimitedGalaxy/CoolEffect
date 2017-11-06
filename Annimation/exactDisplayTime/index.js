function intervalRAF(callback, ms) {
	var last = Date.now();
	next();
	function next() {
		requestAnimationFrame(function() {
			var now = Date.now();
			var dt = now - last;
			if (dt >= ms) {
				last = now;
				callback();
			}
			next();
		})
	}
}