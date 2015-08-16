var line;
var coordinates = [];
var colors = [0xfff000, 0xff00ff, 0xffff00, 0x00ff00, 0x00f0ff]

// functions defined initiate.js
init();
positionCamera(1.5, 0, 1.5);
getParentCoordinates();

function chooseColor() {
	return Math.floor(Math.random() * colors.length)
}

function generateSpline() {
	var spline = new THREE.SplineCurve3(coordinates);
	var index = chooseColor();
	var material = new THREE.MeshBasicMaterial({
		color: colors[index]
	});
	var geometry = new THREE.Geometry();

	// smooth curve over 5000 points
	var splinePoints = spline.getPoints(5000);
	for (var i in splinePoints) {
		geometry.vertices.push(splinePoints[i]);
	}

	line = new THREE.Line(geometry, material);
	scene.add(line);
}

function rotateSpline(rotationStrength) {
	if (line) line.rotation.y += rotationStrength / 1000;
}

render();