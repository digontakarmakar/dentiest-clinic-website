import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  onLoaded?: () => void;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ onLoaded }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // -------------------------------------------------------------------------
    // 1. Scene & Camera Setup
    // -------------------------------------------------------------------------
    const scene = new THREE.Scene();

    let width = container.clientWidth || 540;
    let height = container.clientHeight || 540;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // -------------------------------------------------------------------------
    // 2. Sculptural Dental Art Object & Architectural Elements
    // -------------------------------------------------------------------------
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Master Sculptural Form (Organic Molar / Architectural Crown Geometry)
    // We compose a multifaceted parametric form with smooth bevels representing biomimetic ceramic
    const toothGroup = new THREE.Group();
    mainGroup.add(toothGroup);

    // Base Crown Geometry: Subdivided rounded polyhedron
    const crownGeo = new THREE.IcosahedronGeometry(1.9, 4);

    // Deform vertices slightly to give organic sculptural dental crown anatomy
    const posAttr = crownGeo.attributes.position;
    const vertex = new THREE.Vector3();
    for (let i = 0; i < posAttr.count; i++) {
      vertex.fromBufferAttribute(posAttr, i);
      // Top cusps elevation and side indentation
      const y = vertex.y;
      if (y > 0.8) {
        vertex.y += Math.sin(vertex.x * 3) * 0.15 + Math.cos(vertex.z * 3) * 0.15;
      }
      if (y < -0.5) {
        // Taper roots inward
        vertex.x *= 0.85;
        vertex.z *= 0.85;
      }
      posAttr.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    crownGeo.computeVertexNormals();

    // Ultra-Luxury Frosted Ceramic & Enamel Material
    const crownMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xF9F8F5),
      emissive: new THREE.Color(0x12343B),
      emissiveIntensity: 0.05,
      roughness: 0.12,
      metalness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transmission: 0.82, // Translucent ceramic glass effect
      ior: 1.54,          // Dental ceramic index of refraction
      thickness: 2.2,
      specularColor: new THREE.Color(0xCDBB91),
      specularIntensity: 1.2
    });

    const crownMesh = new THREE.Mesh(crownGeo, crownMaterial);
    crownMesh.castShadow = true;
    crownMesh.receiveShadow = true;
    toothGroup.add(crownMesh);

    // Delicate Architectural Gold Precision Wireframe / Ribbons
    const wireframeGeo = new THREE.IcosahedronGeometry(1.93, 2);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0xCDBB91,
      wireframe: true,
      transparent: true,
      opacity: 0.16
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    toothGroup.add(wireframeMesh);

    // Orbiting Champagne Luxury Orbital Rings
    const ringGroup = new THREE.Group();
    mainGroup.add(ringGroup);

    const outerRingGeo = new THREE.TorusGeometry(3.2, 0.018, 16, 120);
    const goldRingMat = new THREE.MeshStandardMaterial({
      color: 0xCDBB91,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0xCDBB91,
      emissiveIntensity: 0.25
    });
    const outerRing = new THREE.Mesh(outerRingGeo, goldRingMat);
    outerRing.rotation.x = Math.PI / 2.8;
    outerRing.rotation.y = Math.PI / 8;
    ringGroup.add(outerRing);

    const innerRingGeo = new THREE.TorusGeometry(2.6, 0.012, 16, 100);
    const tealRingMat = new THREE.MeshStandardMaterial({
      color: 0x5D9D96,
      metalness: 0.8,
      roughness: 0.3,
      transparent: true,
      opacity: 0.6
    });
    const innerRing = new THREE.Mesh(innerRingGeo, tealRingMat);
    innerRing.rotation.x = -Math.PI / 3;
    ringGroup.add(innerRing);

    // Subtle Architectural Pedestal Shadow Disc
    const discGeo = new THREE.CircleGeometry(2.8, 48);
    const discMat = new THREE.MeshBasicMaterial({
      color: 0x12343B,
      transparent: true,
      opacity: 0.06
    });
    const shadowDisc = new THREE.Mesh(discGeo, discMat);
    shadowDisc.rotation.x = -Math.PI / 2;
    shadowDisc.position.y = -2.6;
    mainGroup.add(shadowDisc);

    // Floating Ambient Prismatic Micro-Particles
    const particleCount = 65;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8.5;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6.5;
      scales[i] = Math.random() * 0.08 + 0.02;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xCDBB91,
      size: 0.07,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // -------------------------------------------------------------------------
    // 3. Dynamic Luxury Studio Lighting (Sweeping Key & Rim Lights)
    // -------------------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.4);
    scene.add(ambientLight);

    // Moving Key Light (Simulates studio light gliding across porcelain enamel)
    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 3.2);
    keyLight.position.set(4, 5, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Champagne Warm Rim Light
    const goldRimLight = new THREE.PointLight(0xCDBB91, 4.5, 12);
    goldRimLight.position.set(-4.5, -2, 2.5);
    scene.add(goldRimLight);

    // Muted Teal Fill Light
    const tealFillLight = new THREE.PointLight(0x5D9D96, 2.8, 10);
    tealFillLight.position.set(3, -4, -2);
    scene.add(tealFillLight);

    // -------------------------------------------------------------------------
    // 4. Smooth Interaction Physics & Scroll Parallax
    // -------------------------------------------------------------------------
    let targetRotationX = 0;
    let targetRotationY = 0;
    let targetScale = 0.88;
    let currentScale = 0.88;
    let scrollOffset = 0;

    // Entrance Animation Scaling Lerp
    setTimeout(() => {
      targetScale = 1.0;
      if (onLoaded) onLoaded();
    }, 150);

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = mouseX * 0.55;
      targetRotationX = mouseY * 0.35;
    };

    const onScroll = () => {
      scrollOffset = window.scrollY || window.pageYOffset;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    // -------------------------------------------------------------------------
    // 5. Cinematic Render Loop
    // -------------------------------------------------------------------------
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Emergence Scale Lerp
      currentScale += (targetScale - currentScale) * 0.04;
      mainGroup.scale.set(currentScale, currentScale, currentScale);

      // Smooth Organic Breathing Floating Loop
      const floatY = Math.sin(elapsed * 0.7) * 0.12;
      toothGroup.position.y = floatY;
      shadowDisc.scale.setScalar(1 + floatY * 0.5);

      // Continuous Refined Rotation
      toothGroup.rotation.y = elapsed * 0.2;
      outerRing.rotation.z = elapsed * 0.12;
      innerRing.rotation.y = -elapsed * 0.15;
      particles.rotation.y = elapsed * 0.05;

      // Dynamic Studio Light Sweep (Gliding subtle light reflection)
      keyLight.position.x = Math.cos(elapsed * 0.5) * 5 + 1;
      keyLight.position.y = Math.sin(elapsed * 0.4) * 3 + 4;

      // Scroll Parallax Response (Subtle tilt and vertical shift)
      const scrollProgress = Math.min(scrollOffset / (window.innerHeight || 800), 1.5);
      const scrollTiltX = scrollProgress * 0.4;
      const scrollShiftY = -scrollProgress * 0.8;

      // Mouse Parallax Damped Lerp
      mainGroup.rotation.x += (targetRotationX + scrollTiltX - mainGroup.rotation.x) * 0.05;
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.position.y += (scrollShiftY - mainGroup.position.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      crownGeo.dispose();
      crownMaterial.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      outerRingGeo.dispose();
      innerRingGeo.dispose();
      goldRingMat.dispose();
      tealRingMat.dispose();
      discGeo.dispose();
      discMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [onLoaded]);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        inset: 0,
        zIndex: 5,
        cursor: 'grab'
      }}
      aria-label="3D Sculptural Dental Form — Luxury Product Presentation (Interactive Three.js)"
    />
  );
};
