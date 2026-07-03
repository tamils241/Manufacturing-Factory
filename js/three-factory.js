import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

const canvas = document.getElementById("factoryCanvas");
if (!canvas) return;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x08111f);

const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
camera.position.set(0, 3, 8);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 2);
scene.add(hemi);

const ambient = new THREE.AmbientLight(0xffffff, 0.7);
const sun = new THREE.DirectionalLight(0xffffff, 2);
sun.position.set(5, 10, 7);
scene.add(ambient, sun);

let model;

const loader = new FBXLoader();
loader.load(
  "model/model.fbx",
  object => {
    model = object;
    model.scale.set(0.015, 0.015, 0.015);
    model.position.set(0, -0.3, 0);
    scene.add(model);
  },
  undefined,
  error => console.error("FBX error:", error)
);

let night = false;
const toggle = document.getElementById("dayNightToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    night = !night;
    ambient.intensity = night ? 0.2 : 0.7;
    sun.intensity = night ? 0.3 : 2;
    scene.background = new THREE.Color(night ? 0x020617 : 0x08111f);
    toggle.innerHTML = night ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  });
}

function animate(time) {
  requestAnimationFrame(animate);
  if (model) {
    model.rotation.y = time * 0.001 * 0.4;
  }
  camera.lookAt(0, 0.5, 0);
  renderer.render(scene, camera);
}

animate();

function resize() {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

window.addEventListener("resize", resize);
resize();
