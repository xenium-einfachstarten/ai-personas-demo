'use client';

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // CSS Custom Property Registrierung für performante Animationen
    if (typeof window !== 'undefined' && window.CSS && CSS.registerProperty) {
      try {
        CSS.registerProperty({
          name: '--turn',
          syntax: '<angle>',
          inherits: false,
          initialValue: '0deg'
        });
      } catch (e) {
        // Property already registered or not supported
      }
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade-out animation
    }, 4000); // Show for 4 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 overflow-hidden font-sans ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: 'radial-gradient(circle at center, #1e3a5f, #0a1525 80%)',
      }}
    >
      {/* Floating Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="scene">
        <div className="rubiks-cube">
          {/* UNTEN (y=1) */}
          <div className="cubie" style={{'--x': -1, '--y': 1, '--z': -1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': 1, '--z': -1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': 1, '--z': -1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x': -1, '--y': 1, '--z':  0} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': 1, '--z':  0} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': 1, '--z':  0} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x': -1, '--y': 1, '--z':  1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': 1, '--z':  1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': 1, '--z':  1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>

          {/* MITTE (y=0) */}
          <div className="cubie" style={{'--x': -1, '--y': 0, '--z': -1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': 0, '--z': -1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': 0, '--z': -1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x': -1, '--y': 0, '--z':  0} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': 0, '--z':  0} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': 0, '--z':  0} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x': -1, '--y': 0, '--z':  1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': 0, '--z':  1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': 0, '--z':  1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>

          {/* OBEN (y=-1) */}
          <div className="cubie" style={{'--x': -1, '--y': -1, '--z': -1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': -1, '--z': -1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': -1, '--z': -1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x': -1, '--y': -1, '--z':  0} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': -1, '--z':  0} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': -1, '--z':  0} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x': -1, '--y': -1, '--z':  1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': -1, '--z':  1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': -1, '--z':  1} as any}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
        </div>
        
        <div className="loading-text">System wird geladen</div>
      </div>

      <style jsx>{`
        /* Palette Configuration */
        .scene {
          --x-navy: #1e3a5f;
          --x-teal: #008b8b;
          --x-purple: #8b7ab8;
          --x-mint: #a8e6cf;
          --x-lime: #d4ff00;
          --x-dark: #0f1e33;

          --size: 45px;
          --gap: 2px;
          --duration: 2.5s;

          --neon-top:    var(--x-lime);
          --neon-front:  var(--x-purple);
          --neon-right:  var(--x-teal);
          --neon-back:   var(--x-teal);
          --neon-left:   var(--x-mint);
          --neon-bottom: var(--x-navy);
        }

        /* Orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          opacity: 0.15;
          z-index: -1;
          filter: blur(40px);
          animation: floatOrb 15s ease-in-out infinite alternate;
        }
        
        .orb-1 {
          width: 400px; height: 400px;
          background: #008b8b; /* Teal */
          top: -10%; left: -10%;
        }
        
        .orb-2 {
          width: 500px; height: 500px;
          background: #8b7ab8; /* Purple */
          bottom: -10%; right: -10%;
          animation-delay: -5s;
        }

        @keyframes floatOrb {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 50px); }
        }

        /* Scene & Cube */
        .scene {
          position: relative;
          width: calc(var(--size) * 4);
          height: calc(var(--size) * 4);
          perspective: 1200px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .rubiks-cube {
          position: relative;
          width: var(--size);
          height: var(--size);
          transform-style: preserve-3d;
          animation: presentCube 8s infinite linear;
        }

        .cubie {
          position: absolute;
          width: var(--size);
          height: var(--size);
          top: 0; left: 0;
          transform-style: preserve-3d;
          transform: 
            rotateY(var(--turn, 0deg))
            translate3d(
              calc(var(--x) * (var(--size) + var(--gap))), 
              calc(var(--y) * (var(--size) + var(--gap))), 
              calc(var(--z) * (var(--size) + var(--gap)))
            );
        }

        /* Faces */
        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          backface-visibility: hidden;
          border-radius: 3px;
          background-color: #0f1e33;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .face::after {
          content: '';
          position: absolute;
          top: 4px; left: 4px; right: 4px; bottom: 4px;
          border-radius: 2px;
          background-color: var(--neon-color);
          box-shadow: 0 0 8px var(--neon-color);
          opacity: 0.9;
        }

        /* Face Assignments */
        .face.front  { transform: translateZ(calc(var(--size) / 2)); --neon-color: var(--neon-front); }
        .face.back   { transform: rotateY(180deg) translateZ(calc(var(--size) / 2)); --neon-color: var(--neon-back); }
        .face.right  { transform: rotateY(90deg) translateZ(calc(var(--size) / 2)); --neon-color: var(--neon-right); }
        .face.left   { transform: rotateY(-90deg) translateZ(calc(var(--size) / 2)); --neon-color: var(--neon-left); }
        .face.top    { transform: rotateX(90deg) translateZ(calc(var(--size) / 2)); --neon-color: var(--neon-top); }
        .face.bottom { transform: rotateX(-90deg) translateZ(calc(var(--size) / 2)); --neon-color: var(--neon-bottom); }

        /* Animation Selectors via Attribute */
        :global(.cubie[style*="--y: -1"]) {
          animation: turnLayerTop var(--duration) infinite ease-in-out;
        }
        :global(.cubie[style*="--y: 1"]) {
          animation: turnLayerBottom var(--duration) infinite ease-in-out;
        }

        @keyframes turnLayerTop {
          0%, 15% { --turn: 0deg; }
          40%, 60% { --turn: 90deg; }
          85%, 100% { --turn: 0deg; }
        }
        @keyframes turnLayerBottom {
          0%, 15% { --turn: 0deg; }
          40%, 60% { --turn: -90deg; }
          85%, 100% { --turn: 0deg; }
        }
        @keyframes presentCube {
          0% { transform: rotateX(-25deg) rotateY(0deg); }
          100% { transform: rotateX(-25deg) rotateY(360deg); }
        }

        /* Text */
        .loading-text {
          position: absolute;
          bottom: -100px;
          color: #a8e6cf; /* Mint */
          font-family: 'Segoe UI', sans-serif;
          font-weight: 400;
          font-size: 1rem;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
        
        .loading-text::after {
          content: '...';
          animation: dots 2s infinite;
        }
        
        @keyframes dots {
          0%, 20% { content: '.'; }
          40% { content: '..'; }
          60%, 100% { content: '...'; }
        }
      `}</style>
    </div>
  );
}

