import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js';
const canvas=document.getElementById('earthScene');
const fallback=document.getElementById('earthFallback');
if(canvas){
 let renderer;try{renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'low-power'});}catch(e){console.warn('3D WebGL unavailable; using animated Earth fallback',e);canvas.style.display='none';throw e;}
 renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75));renderer.outputColorSpace=THREE.SRGBColorSpace;
 const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(42,1,.1,100);camera.position.set(0,0,9);
 const earthGroup=new THREE.Group();scene.add(earthGroup);
 const texture=new THREE.TextureLoader().load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg',()=>{if(fallback)fallback.style.opacity='0';},undefined,(e)=>console.warn('Earth image could not load; showing fallback',e));texture.colorSpace=THREE.SRGBColorSpace;
 const globe=new THREE.Mesh(new THREE.SphereGeometry(2.05,96,64),new THREE.MeshPhongMaterial({map:texture,shininess:18,specular:0x263a5d}));earthGroup.add(globe);
 const clouds=new THREE.TextureLoader().load('https://threejs.org/examples/textures/planets/earth_clouds_2048.png');
 const cloudSphere=new THREE.Mesh(new THREE.SphereGeometry(2.071,64,48),new THREE.MeshPhongMaterial({map:clouds,transparent:true,opacity:.21,depthWrite:false}));earthGroup.add(cloudSphere);
 const atm=new THREE.Mesh(new THREE.SphereGeometry(2.16,64,48),new THREE.ShaderMaterial({transparent:true,side:THREE.BackSide,depthWrite:false,uniforms:{glowColor:{value:new THREE.Color('#4bb9ff')}},vertexShader:`varying vec3 vNormal;varying vec3 vWorld;void main(){vNormal=normalize(normalMatrix*normal);vec4 p=modelViewMatrix*vec4(position,1.);vWorld=p.xyz;gl_Position=projectionMatrix*p;}`,fragmentShader:`uniform vec3 glowColor;varying vec3 vNormal;varying vec3 vWorld;void main(){float intensity=pow(0.72-dot(normalize(vNormal),normalize(-vWorld)),3.);gl_FragColor=vec4(glowColor,intensity*.55);}` }));earthGroup.add(atm);
 scene.add(new THREE.AmbientLight(0x9ab9d7,.42));const sun=new THREE.DirectionalLight(0xffffff,2.1);sun.position.set(-3,2,6);scene.add(sun);
 const starGeo=new THREE.BufferGeometry(),points=[];for(let i=0;i<650;i++){const a=Math.random()*Math.PI*2,b=(Math.random()-.5)*Math.PI,r=22;points.push(r*Math.cos(b)*Math.cos(a),r*Math.sin(b),r*Math.cos(b)*Math.sin(a))}starGeo.setAttribute('position',new THREE.Float32BufferAttribute(points,3));scene.add(new THREE.Points(starGeo,new THREE.PointsMaterial({color:0xb5d9ff,size:.035,sizeAttenuation:true})));
 const satellites=[];const blue=new THREE.MeshStandardMaterial({color:0x2469bb,metalness:.65,roughness:.25,side:THREE.DoubleSide});const silver=new THREE.MeshStandardMaterial({color:0xd6e8f7,metalness:.8,roughness:.25});
 for(let i=0;i<3;i++){
  const inclination=[.35,-.72,1.04][i],orbitRadius=[3.05,3.48,3.85][i],pivot=new THREE.Group();pivot.rotation.z=inclination;scene.add(pivot);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(orbitRadius,.006,4,200),new THREE.MeshBasicMaterial({color:0x67d8ff,transparent:true,opacity:.28}));ring.rotation.x=Math.PI/2;pivot.add(ring);
  const craft=new THREE.Group();pivot.add(craft);const body=new THREE.Mesh(new THREE.BoxGeometry(.22,.16,.17),silver);craft.add(body);
  for(const side of [-1,1]){const panel=new THREE.Mesh(new THREE.BoxGeometry(.38,.015,.23),blue);panel.position.x=side*.34;craft.add(panel)}
  satellites.push({pivot,craft,radius:orbitRadius,phase:i*2.09,speed:[.23,-.17,.13][i]});
 }
 function resize(){const rect=canvas.getBoundingClientRect();renderer.setSize(rect.width,rect.height,false);camera.aspect=rect.width/Math.max(1,rect.height);camera.position.x=rect.width<720?-1.35:-1.1;camera.position.z=rect.width<720?11:9;camera.updateProjectionMatrix();earthGroup.position.x=rect.width<720?1.8:2.4;for(const s of satellites)s.pivot.position.x=earthGroup.position.x}window.addEventListener('resize',resize);resize();
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const clock=new THREE.Clock();
 function tick(){const t=clock.getElapsedTime();if(!reduce){globe.rotation.y=t*.045+.5;cloudSphere.rotation.y=t*.051+.5}for(const s of satellites){const a=s.phase+(reduce?0:t*s.speed);s.craft.position.set(s.radius*Math.cos(a),0,s.radius*Math.sin(a));s.craft.rotation.y=-a}renderer.render(scene,camera);if(!reduce)requestAnimationFrame(tick)}tick();
}
