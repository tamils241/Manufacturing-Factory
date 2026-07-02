document.addEventListener("DOMContentLoaded", () => {
  if (!window.THREE || !document.getElementById("factoryCanvas")) return;

  const canvas = document.getElementById("factoryCanvas");
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x08111f);

  const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  camera.position.set(10, 8, 13);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

  const ambient = new THREE.AmbientLight(0xffffff, 0.72);
  const sun = new THREE.DirectionalLight(0xffffff, 1.4);
  sun.position.set(8, 12, 6);
  scene.add(ambient, sun);

  const campus = new THREE.Group();
  scene.add(campus);

  const mat = {
    ground: new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.8 }),
    road: new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.6 }),
    wall: new THREE.MeshStandardMaterial({ color: 0xdbeafe, roughness: 0.45 }),
    roof: new THREE.MeshStandardMaterial({ color: 0x0b3d91, metalness: 0.25, roughness: 0.35 }),
    solar: new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.55, roughness: 0.2 }),
    orange: new THREE.MeshStandardMaterial({ color: 0xf39c12, roughness: 0.35 }),
    truck: new THREE.MeshStandardMaterial({ color: 0x22c55e, roughness: 0.45 }),
    smoke: new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.32 })
  };

  function box(name, size, position, material) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
    mesh.name = name;
    mesh.position.set(...position);
    campus.add(mesh);
    return mesh;
  }

  box("ground", [18, 0.22, 12], [0, -0.12, 0], mat.ground);
  box("road-main", [18, 0.04, 1.2], [0, 0.04, 4.2], mat.road);
  box("road-side", [1.1, 0.05, 11], [-6.3, 0.05, -0.4], mat.road);

  const factory = box("factory", [5.8, 2.5, 3.4], [-1.7, 1.25, -1.2], mat.wall);
  box("warehouse", [4.2, 2, 2.8], [4.1, 1, -1.5], mat.wall);
  box("roof", [6.2, 0.35, 3.8], [-1.7, 2.7, -1.2], mat.roof);
  box("warehouse-roof", [4.6, 0.28, 3.2], [4.1, 2.15, -1.5], mat.roof);

  for (let i = 0; i < 4; i++) {
    box("solar", [1, 0.08, 1.6], [-3.8 + i * 1.35, 2.94, -1.2], mat.solar);
  }

  for (let i = 0; i < 3; i++) {
    const chimney = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 2.2, 18), mat.orange);
    chimney.position.set(-4 + i * 1.1, 3.65, -3);
    campus.add(chimney);
    const smoke = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 16), mat.smoke);
    smoke.position.set(chimney.position.x, 4.9, chimney.position.z);
    campus.add(smoke);
  }

  for (let i = 0; i < 7; i++) {
    box("parking", [0.64, 0.08, 1], [-4.8 + i * 0.85, 0.12, 2.2], mat.wall);
  }

  const truck = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.75, 0.7), mat.truck);
  const cab = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.65, 0.7), mat.orange);
  cab.position.x = 1.1;
  truck.add(body, cab);
  truck.position.set(-7, 0.55, 4.2);
  campus.add(truck);

  const conveyor = box("conveyor", [3.6, 0.18, 0.5], [-1.8, 0.55, 0.85], mat.orange);
  const machine = box("machine-arm", [0.25, 1.3, 0.25], [0.1, 1.2, 0.85], mat.solar);

  const lights = [];
  for (let i = 0; i < 12; i++) {
    const light = new THREE.PointLight(0xf39c12, 0.45, 4);
    light.position.set(-5 + i, 2.6, 0.7);
    lights.push(light);
    campus.add(light);
  }

  let night = false;
  document.getElementById("dayNightToggle").addEventListener("click", event => {
    night = !night;
    ambient.intensity = night ? 0.25 : 0.72;
    sun.intensity = night ? 0.35 : 1.4;
    scene.background = new THREE.Color(night ? 0x020617 : 0x08111f);
    event.currentTarget.innerHTML = night ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  });

  function resize() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  window.addEventListener("resize", resize);
  resize();

  function animate(time) {
    const t = time * 0.001;
    campus.rotation.y = Math.sin(t * 0.18) * 0.18;
    truck.position.x = ((t * 1.6) % 15) - 7.5;
    conveyor.position.x = -1.8 + Math.sin(t * 2) * 0.15;
    machine.rotation.z = Math.sin(t * 3) * 0.28;
    lights.forEach((light, index) => light.intensity = night ? 0.55 + Math.sin(t * 2 + index) * 0.18 : 0.12);
    camera.lookAt(0, 1, 0);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
