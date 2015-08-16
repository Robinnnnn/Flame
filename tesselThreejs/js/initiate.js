var scene, camera, controls, renderer;

// Create scene, camera, renderer, orbital controls
function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	controls = new THREE.OrbitControls(camera);
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
}

function positionCamera(x, y, z) {
	camera.position.x = x || 0;
	camera.position.y = y || 0;
	camera.position.z = z || 0;
}

// Ajax request
function getParentCoordinates() {
	$.get("/getParentCoordinates", function(coordinateData) {
		coordinateData.forEach(function(array) {
			coordinates.push(new THREE.Vector3(array[0], array[1], array[2]));
		})
		generateSpline();
	});
}

var render = function() {
	requestAnimationFrame(render);
	controls.update();
	rotateSpline(3);
	renderer.render(scene, camera);
};