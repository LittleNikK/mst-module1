'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      <img
        src="/assets/hero/1.png"
        alt="cursor"
        className="w-6 h-6 -translate-x-1/2 -translate-y-1/2 "
        style={{ transform: 'translate(-50% , -50%) rotate(-20deg)' }}
      />
    </div>
  );
}