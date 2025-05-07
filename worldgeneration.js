import * as THREE from 'three';

const canvas = document.getElementById('worldgeneration');

const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setSize(canvas.width, canvas.height);
const fov = 75; 
const aspect = canvas.width / canvas.height; 
const near = 0.1; 
const far = 10; 
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2; 

const scene = new THREE.Scene();

const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshBasicMaterial({
    color: 0xccff
});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera); 
}

animate();
