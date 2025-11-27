'use client';

import { useEffect, useState, CSSProperties } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

// Helper für Typensicherheit bei Custom CSS Properties
interface CustomStyle extends CSSProperties {
  '--x'?: number;
  '--y'?: number;
  '--z'?: number;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // CSS Houdini API: Registrierung für performante Interpolation der Winkel
    if (typeof window !== 'undefined' && window.CSS && CSS.registerProperty) {
      try {
        CSS.registerProperty({
          name: '--turn-h',
          syntax: '<angle>',
          inherits: false,
          initialValue: '0deg'
        });
        CSS.registerProperty({
          name: '--turn-v',
          syntax: '<angle>',
          inherits: false,
          initialValue: '0deg'
        });
      } catch (e) {
        // Fallback: Property bereits registriert oder nicht unterstützt
      }
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 4000);

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
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="scene">
        <div className="rubiks-cube">
          {/* GENERIERUNG DER 27 CUBIES */}
          {/* Wir nutzen explizite Styles für x, y, z Koordinaten (-1, 0, 1) */}
          
          {/* UNTEN (y=1) */}
          <div className="cubie" style={{'--x': -1, '--y': 1, '--z': -1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': 1, '--z': -1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': 1, '--z': -1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x': -1, '--y': 1, '--z':  0} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': 1, '--z':  0} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': 1, '--z':  0} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x': -1, '--y': 1, '--z':  1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': 1, '--z':  1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': 1, '--z':  1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>

          {/* MITTE (y=0) */}
          <div className="cubie" style={{'--x': -1, '--y': 0, '--z': -1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': 0, '--z': -1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': 0, '--z': -1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x': -1, '--y': 0, '--z':  0} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': 0, '--z':  0} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': 0, '--z':  0} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x': -1, '--y': 0, '--z':  1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': 0, '--z':  1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': 0, '--z':  1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>

          {/* OBEN (y=-1) */}
          <div className="cubie" style={{'--x': -1, '--y': -1, '--z': -1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': -1, '--z': -1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': -1, '--z': -1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x': -1, '--y': -1, '--z':  0} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': -1, '--z':  0} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': -1, '--z':  0} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x': -1, '--y': -1, '--z':  1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  0, '--y': -1, '--z':  1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
          <div className="cubie" style={{'--x':  1, '--y': -1, '--z':  1} as CustomStyle}><div className="face front"></div><div className="face back"></div><div className="face right"></div><div className="face left"></div><div className="face top"></div><div className="face bottom"></div></div>
        </div>
        
        <div className="loading-text">System wird geladen</div>
      </div>

      <style jsx>{`
        /* --- Styles --- */
        .scene {
          --x-navy: #1e3a5f;
          --x-teal: #008b8b;
          --x-purple: #8b7ab8;
          --x-mint: #a8e6cf;
          --x-lime: #d4ff00;
          --x-white: #f0fdf4; /* New Color */
          --x-dark: #0f1e33;

          --size: 45px;
          --gap: 2px;
          --duration: 2.5s;

          /* Color Mapping - Updated */
          --neon-top:    var(--x-lime);
          --neon-front:  var(--x-purple);
          --neon-right:  var(--x-teal);
          --neon-back:   var(--x-white); /* Updated to White */
          --neon-left:   var(--x-mint);
          --neon-bottom: var(--x-navy);
        }

        /* Floating Orbs */
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
          background: #008b8b;
          top: -10%; left: -10%;
        }
        
        .orb-2 {
          width: 500px; height: 500px;
          background: #8b7ab8;
          bottom: -10%; right: -10%;
          animation-delay: -5s;
        }

        @keyframes floatOrb {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 50px); }
        }

        /* Scene Setup */
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
          animation: presentCube 12s infinite linear;
        }

        /* Cubie Logic */
        .cubie {
          position: absolute;
          width: var(--size);
          height: var(--size);
          top: 0; left: 0;
          transform-style: preserve-3d;
          
          /* Combine Horizontal (Y) and Vertical (X) turns */
          transform: 
            rotateX(var(--turn-v, 0deg))
            rotateY(var(--turn-h, 0deg))
            translate3d(
              calc(var(--x) * (var(--size) + var(--gap))), 
              calc(var(--y) * (var(--size) + var(--gap))), 
              calc(var(--z) * (var(--size) + var(--gap)))
            );
          
          animation: rubikSequence 4s infinite ease-in-out;
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

        /* --- TARGET DEFINITIONS --- */
        /* Wir setzen CSS Variablen basierend auf Attributen (Inline Styles) der Cubies */
        
        /* Horizontale Ziele (Rows) - via Style Attribut Selektor */
        :global(.cubie[style*="--y: -1"]) { --target-h: 90deg; }  /* Oben */
        :global(.cubie[style*="--y: 1"])  { --target-h: -90deg; } /* Unten */
        
        /* Vertikale Ziele (Cols) - via Style Attribut Selektor */
        :global(.cubie[style*="--x: -1"]) { --target-v: 90deg; }  /* Links */
        :global(.cubie[style*="--x: 1"])  { --target-v: -90deg; } /* Rechts */

        /* Animation Sequence */
        @keyframes rubikSequence {
            0% { --turn-h: 0deg; --turn-v: 0deg; }
            
            /* Phase 1: Horizontal Twist */
            15% { --turn-h: var(--target-h, 0deg); --turn-v: 0deg; }
            20% { --turn-h: var(--target-h, 0deg); --turn-v: 0deg; } /* Pause */
            35% { --turn-h: 0deg; --turn-v: 0deg; } /* Reset */
            
            /* Phase 2: Vertical Twist */
            50% { --turn-h: 0deg; --turn-v: var(--target-v, 0deg); }
            55% { --turn-h: 0deg; --turn-v: var(--target-v, 0deg); } /* Pause */
            70% { --turn-h: 0deg; --turn-v: 0deg; } /* Reset */
            
            100% { --turn-h: 0deg; --turn-v: 0deg; }
        }

        @keyframes presentCube {
          0% { transform: rotateX(-25deg) rotateY(0deg); }
          100% { transform: rotateX(-25deg) rotateY(360deg); }
        }

        /* Text */
        .loading-text {
          position: absolute;
          bottom: -100px;
          color: #a8e6cf;
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

