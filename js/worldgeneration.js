import * as THREE from 'three';
import {ImprovedNoise} from 'https://unpkg.com/three/examples/jsm/math/ImprovedNoise.js';

const canvas = document.getElementById('worldgeneration');
const scene = new THREE.Scene();
scene.background = new THREE.Color('white');

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
const far = 10; 
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 3, 0); 
camera.lookAt(0, 0, 0);
camera.aspect = canvas.clientHeight / canvas.clientHeight;

const geo = new THREE.IcosahedronGeometry(2, 1);
const mat = new THREE.MeshBasicMaterial({
    wireframe: true
});
const mesh = new THREE.Mesh(geo, mat);
mesh.material.color = 0xffffff;
scene.add(mesh);

//loop animation
function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x -= 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;
    renderer.render(scene, camera); 
}

/*window.addEventListener('resize', () => {
    camera.aspect = canvas.width / canvas.height;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.width, canvas.height);
  }); */

animate();
