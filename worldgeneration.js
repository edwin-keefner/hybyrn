import * as THREE from 'three';

const canvas = document.getElementById('worldgeneration');

const renderer = new THREE.WebGLRenderer({ antialias: true});
const w = canvas.style.width;
const h = canvas.style.height;
renderer.setSize(w, h);
canvas.appendChild(renderer.domElement);
const fov = 75; 
const aspect = w / h; 
const near = 0.1; 
const far = 10; 
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2; 

const scene = new THREE.Scene();

const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshBasicMaterial({
    color: 0xccff
})
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

renderer.render(scene, camera); 