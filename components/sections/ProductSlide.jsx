'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

const highlightsByTitle = {
  'MST CORE ENGINE': ['Deterministic execution', 'Throughput optimized'],
  'MST DATA LAYER': ['Fast validation', 'Secure availability'],
  'MST SDK TOOLKIT': ['Dev-first primitives', 'Modular integrations']
};

function MobilePhoneCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f5f5f6');

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0.05, 6.2);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const phoneGroup = new THREE.Group();
    phoneGroup.rotation.x = -0.2;
    phoneGroup.rotation.y = -0.35;
    scene.add(phoneGroup);

    const ambient = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(4, 4, 5);
    scene.add(keyLight);

    const accentLight = new THREE.DirectionalLight(0xff2d2d, 0.8);
    accentLight.position.set(-4, 1, 4);
    scene.add(accentLight);

    const bodyGeometry = new THREE.BoxGeometry(2.25, 4.25, 0.28);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: '#101114', roughness: 0.45, metalness: 0.5 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    phoneGroup.add(body);

    const screenGeometry = new THREE.BoxGeometry(1.92, 3.78, 0.05);
    const screenMaterial = new THREE.MeshStandardMaterial({ color: '#f8f8f8', roughness: 0.9, metalness: 0.02 });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.z = 0.16;
    phoneGroup.add(screen);

    const glassGeometry = new THREE.BoxGeometry(1.86, 3.72, 0.02);
    const glassMaterial = new THREE.MeshStandardMaterial({ color: '#ffffff', transparent: true, opacity: 0.08, roughness: 0.1, metalness: 0.02 });
    const glass = new THREE.Mesh(glassGeometry, glassMaterial);
    glass.position.z = 0.2;
    phoneGroup.add(glass);

    const notchGeometry = new THREE.BoxGeometry(0.72, 0.12, 0.02);
    const notchMaterial = new THREE.MeshStandardMaterial({ color: '#0b0c0f', roughness: 0.7, metalness: 0.1 });
    const notch = new THREE.Mesh(notchGeometry, notchMaterial);
    notch.position.set(0, 1.75, 0.21);
    phoneGroup.add(notch);

    const cameraDotGeometry = new THREE.SphereGeometry(0.045, 16, 16);
    const cameraDotMaterial = new THREE.MeshStandardMaterial({ color: '#bcc1cb', roughness: 0.35, metalness: 0.8 });
    const cameraDot = new THREE.Mesh(cameraDotGeometry, cameraDotMaterial);
    cameraDot.position.set(-0.42, 1.77, 0.22);
    phoneGroup.add(cameraDot);

    const homeBarGeometry = new THREE.BoxGeometry(0.92, 0.06, 0.02);
    const homeBarMaterial = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.9, metalness: 0.02 });
    const homeBar = new THREE.Mesh(homeBarGeometry, homeBarMaterial);
    homeBar.position.set(0, -1.8, 0.22);
    phoneGroup.add(homeBar);

    const accentGeometry = new THREE.TorusGeometry(1.05, 0.03, 10, 64);
    const accentMaterial = new THREE.MeshStandardMaterial({ color: '#ff2d2d', emissive: '#ff2d2d', emissiveIntensity: 0.18 });
    const accent = new THREE.Mesh(accentGeometry, accentMaterial);
    accent.rotation.x = Math.PI / 2;
    accent.position.z = 0.07;
    phoneGroup.add(accent);

    const flipTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: canvas,
        start: 'top top',
        end: '+=1500',
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });

    flipTimeline.to(phoneGroup.rotation, { y: Math.PI, x: 0.15, ease: 'none' }, 0);
    flipTimeline.to(phoneGroup.position, { y: 0.3, ease: 'none' }, 0);
    flipTimeline.to(phoneGroup.scale, { x: 1.2, y: 1.2, z: 1.2, ease: 'none' }, 0);

    let frameId = 0;

    const render = () => {
      frameId = window.requestAnimationFrame(render);
      accent.rotation.z += 0.008;
      renderer.render(scene, camera);
    };

    const onResize = () => {
      const width = canvas.clientWidth || 300;
      const height = canvas.clientHeight || 300;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    onResize();
    render();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.cancelAnimationFrame(frameId);
      flipTimeline.scrollTrigger?.kill();
      flipTimeline.kill();
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
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="block h-full w-full" />;
}

export default function ProductSlide({ product, variant = 'text', index = 1, total = 3 }) {
  const highlights = highlightsByTitle[product.title] ?? [];

  if (variant === 'card') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f6]">
          <MobilePhoneCanvas />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,45,45,0.12),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.28),transparent_30%,transparent_70%,rgba(0,0,0,0.03))]" />
        </div>

        <div className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">Scroll to explore variations</p>
            <span className="rounded-full border border-black/15 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-black/55">
              {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>

          <h3 className="font-[var(--font-space-grotesk)] text-2xl font-bold tracking-[-0.02em] text-black">{product.title}</h3>
          <div className="h-px w-full bg-black/10" />

          <p className="text-sm leading-relaxed text-black/65">{product.description}</p>

          <div className="flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-black/15 bg-[#f8f8f8] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/60">
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 42 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.5, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-xl rounded-[1.4rem] border border-black/10 bg-white/70 p-7 backdrop-blur"
    >
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/45">Scroll to explore variations</p>
        <span className="rounded-full border border-black/15 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-black/55">
          {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-5 font-[var(--font-space-grotesk)] text-4xl font-extrabold tracking-[-0.03em] text-black xl:text-5xl">{product.title}</h3>
      <div className="mt-5 h-px w-full bg-black/10" />

      <p className="mt-5 text-base leading-relaxed text-black/65 xl:text-lg">{product.description}</p>
    </motion.div>
  );
}
