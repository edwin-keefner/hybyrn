import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const dark_mode_button = document.getElementById('darkmode');
const canvas = document.getElementById('worldgeneration');
const scene = new THREE.Scene();
scene.background = new THREE.Color('black');

//create renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas
});
renderer.setSize(canvas.clientHeight, canvas.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

//camera
const fov = 100; 
const aspect = canvas.clientHeight / canvas.clientHeight; 
const near = 0.1; 
const far = 25; 
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 3, 0); 
camera.lookAt(0, 0, 0);
camera.aspect = canvas.clientHeight / canvas.clientHeight;

const geo = new THREE.IcosahedronGeometry(2, 1);
const mat = new THREE.MeshBasicMaterial({
    wireframe: true
});
const mesh = new THREE.Mesh(geo, mat);
mesh.material.color = 0x000000;

scene.add(mesh);

//loop animation
function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x -= 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;
    renderer.render(scene, camera); 
}

animate();

//orbit function
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true; 
controls.dampingFactor = 0.2;
controls.enableZoom = true;
controls.enablePan = false;

canvas.addEventListener( 'mousedown', () => {
    canvas.style.cursor = 'grabbing';
});

canvas.addEventListener( 'mouseup', () => {
    canvas.style.cursor = 'grab';
});

//dark mode support
dark_mode_button.addEventListener('click', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        mesh.material.color = new THREE.Color( '#26095a' );
        scene.background = new THREE.Color( '#FD98C5' );
    } else {
        mesh.material.color = new THREE.Color( 'white' );
        scene.background = new THREE.Color( 'black' );
    }
    mesh.updateMatrix;
});







