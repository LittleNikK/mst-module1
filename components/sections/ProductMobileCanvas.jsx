'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductMobileCanvas({ products = [] }) {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const phoneRef = useRef(null);
  const rafRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!canvasRef.current || products.length === 0) return undefined;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f5f5f3');

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0.15, 6.2);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(canvas.clientWidth || 300, canvas.clientHeight || 480, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const ambient = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(3, 5, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xff2d2d, 0.8);
    fillLight.position.set(-4, 1, 4);
    scene.add(fillLight);

    const phoneGroup = new THREE.Group();
    phoneRef.current = phoneGroup;
    phoneGroup.rotation.x = -0.16;
    phoneGroup.rotation.y = -0.34;
    scene.add(phoneGroup);

    const bodyGeometry = new THREE.BoxGeometry(2.2, 4.2, 0.28);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: '#101114',
      roughness: 0.52,
      metalness: 0.55
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    phoneGroup.add(body);

    const screenGeometry = new THREE.BoxGeometry(1.88, 3.72, 0.06);
    const screenMaterial = new THREE.MeshStandardMaterial({
      color: '#f3f4f6',
      roughness: 0.88,
      metalness: 0.02,
      emissive: new THREE.Color('#ffffff'),
      emissiveIntensity: 0.14
    });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.z = 0.16;
    phoneGroup.add(screen);

    const glassGeometry = new THREE.BoxGeometry(1.82, 3.64, 0.02);
    const glassMaterial = new THREE.MeshStandardMaterial({
      color: '#ffffff',
      transparent: true,
      opacity: 0.08,
      roughness: 0.2,
      metalness: 0.1
    });
    const glass = new THREE.Mesh(glassGeometry, glassMaterial);
    glass.position.z = 0.205;
    phoneGroup.add(glass);

    const notchGeometry = new THREE.BoxGeometry(0.72, 0.13, 0.03);
    const notchMaterial = new THREE.MeshStandardMaterial({ color: '#0b0c0f', roughness: 0.7, metalness: 0.1 });
    const notch = new THREE.Mesh(notchGeometry, notchMaterial);
    notch.position.set(0, 1.76, 0.21);
    phoneGroup.add(notch);

    const cameraDotGeometry = new THREE.SphereGeometry(0.045, 16, 16);
    const cameraDotMaterial = new THREE.MeshStandardMaterial({ color: '#b9bec8', roughness: 0.35, metalness: 0.8 });
    const cameraDot = new THREE.Mesh(cameraDotGeometry, cameraDotMaterial);
    cameraDot.position.set(-0.42, 1.78, 0.22);
    phoneGroup.add(cameraDot);

    const homeBarGeometry = new THREE.BoxGeometry(0.9, 0.06, 0.02);
    const homeBarMaterial = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.9, metalness: 0.02 });
    const homeBar = new THREE.Mesh(homeBarGeometry, homeBarMaterial);
    homeBar.position.set(0, -1.8, 0.22);
    phoneGroup.add(homeBar);

    const accentGeometry = new THREE.TorusGeometry(1.02, 0.03, 10, 64);
    const accentMaterial = new THREE.MeshStandardMaterial({ color: '#ff2d2d', emissive: '#ff2d2d', emissiveIntensity: 0.2 });
    const accent = new THREE.Mesh(accentGeometry, accentMaterial);
    accent.rotation.x = Math.PI / 2;
    accent.position.z = 0.06;
    phoneGroup.add(accent);

    const ringGeometry = new THREE.TorusGeometry(1.42, 0.02, 10, 80);
    const ringMaterial = new THREE.MeshStandardMaterial({ color: '#d3d7de', roughness: 0.6, metalness: 0.6 });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.05;
    phoneGroup.add(ring);

    const tick = () => {
      phoneGroup.rotation.z = Math.sin(window.scrollY * 0.0015) * 0.03;
      renderer.render(scene, camera);
      rafRef.current = window.requestAnimationFrame(tick);
    };

    tick();

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.1,
        onUpdate: (self) => {
          const progress = self.progress;
          const nextIndex = Math.min(products.length - 1, Math.floor(progress * products.length));
          setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
        }
      }
    });

    scrollTriggerRef.current = scrollTimeline;
    scrollTimeline.to(phoneGroup.rotation, { y: Math.PI * 1.85, x: -0.06, ease: 'none' }, 0);
    scrollTimeline.to(phoneGroup.position, { y: 0.14, ease: 'none' }, 0);
    scrollTimeline.to(accent.rotation, { z: Math.PI * 1.4, ease: 'none' }, 0);
    scrollTimeline.to(ring.rotation, { y: Math.PI * 0.65, ease: 'none' }, 0);

    const onResize = () => {
      const width = canvas.clientWidth || 300;
      const height = canvas.clientHeight || 480;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      if (scrollTriggerRef.current) scrollTriggerRef.current.kill();
      bodyGeometry.dispose();
      bodyMaterial.dispose();
      screenGeometry.dispose();
      screenMaterial.dispose();
      glassGeometry.dispose();
      glassMaterial.dispose();
      notchGeometry.dispose();
      notchMaterial.dispose();
      cameraDotGeometry.dispose();
      cameraDotMaterial.dispose();
      homeBarGeometry.dispose();
      homeBarMaterial.dispose();
      accentGeometry.dispose();
      accentMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      renderer.dispose();
    };
  }, [products]);

  const activeProduct = products[activeIndex] ?? products[0];

  return (
    <div ref={wrapperRef} className="relative h-[220vh]">
      <div className="sticky top-24 flex h-[calc(100vh-6rem)] flex-col items-center justify-center gap-6 pb-8">
        <div className="relative w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 p-3 shadow-[0_20px_45px_rgba(0,0,0,0.1)] backdrop-blur">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,45,45,0.16),transparent_55%)]" />
          <canvas ref={canvasRef} className="block aspect-[9/14] w-full rounded-[1.5rem] bg-transparent" />
          <div className="pointer-events-none absolute bottom-4 left-1/2 w-[72%] -translate-x-1/2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-black/55 shadow-sm backdrop-blur">
            Scroll to flip the mobile view
          </div>
        </div>

        <div className="w-full max-w-[22rem] rounded-[1.6rem] border border-black/10 bg-white p-5 shadow-[0_16px_35px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">Product showcase</p>
            <span className="rounded-full border border-black/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-black/55">
              {String(activeIndex + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
            </span>
          </div>

          <h3 className="mt-4 font-[var(--font-space-grotesk)] text-2xl font-extrabold tracking-[-0.03em] text-black">
            {activeProduct.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-black/68">{activeProduct.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {activeIndex === 0 && (
              <>
                <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/60">Deterministic execution</span>
                <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/60">Throughput optimized</span>
              </>
            )}
            {activeIndex === 1 && (
              <>
                <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/60">Fast validation</span>
                <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/60">Secure availability</span>
              </>
            )}
            {activeIndex === 2 && (
              <>
                <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/60">Dev-first primitives</span>
                <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/60">Modular integrations</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
