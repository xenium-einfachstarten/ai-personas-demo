'use client';

import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Wait for fade-out animation
    }, 4000); // Show for 4 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: 'linear-gradient(135deg, #1e3a5f 0%, #008b8b 50%, #8b7ab8 100%)',
      }}
    >
      <div className="text-center">
        <svg
          className="lego-loader"
          viewBox="0 0 420 420"
          width="300px"
          height="300px"
          role="img"
          aria-label="Loading animation"
        >
          <defs>
            <symbol id="brick">
              <polygon fill="var(--brick-top)" points="70 0,140 39,70 125,0 39" />
              <polygon fill="var(--brick-left)" points="0 39,70 78,71 78,70 125,0 86" />
              <polygon points="70 78,140 39,140 86,70 125" />
              <use href="#studs" />
            </symbol>
            <symbol id="stud">
              <rect y="1" rx="14" ry="8" width="28" height="24" />
              <ellipse fill="var(--brick-top)" cx="14" cy="8" rx="14" ry="8" />
            </symbol>
            <symbol id="studs">
              <use href="#stud" transform="translate(21, 22)" />
              <use href="#stud" transform="translate(56, 3)" />
              <use href="#stud" transform="translate(56, 41)" />
              <use href="#stud" transform="translate(91, 22)" />
            </symbol>
          </defs>
          <g transform="translate(140, 218)">
            <g className="lego-brick-group">
              <g className="lego-brick-group lego-brick-group--1">
                <use className="lego-brick lego-brick--teal" href="#brick" />
                <g className="lego-brick-group lego-brick-group--2" transform="translate(0, -47)">
                  <use className="lego-brick lego-brick--mint" href="#brick" />
                  <g className="lego-brick-group lego-brick-group--3" transform="translate(0, -47)">
                    <use className="lego-brick lego-brick--lime" href="#brick" />
                    <g className="lego-brick-group lego-brick-group--4" transform="translate(0, -47)">
                      <use className="lego-brick lego-brick--purple" href="#brick" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <p className="mt-6 text-xenium-lime text-xl font-semibold tracking-wide">
          Loading AI Personas...
        </p>
      </div>

      <style jsx>{`
        .lego-loader {
          display: block;
          margin: 0 auto;
        }

        .lego-brick--teal {
          --brick-left: #006666;
          --brick-top: #00a3a3;
          fill: #008b8b;
        }

        .lego-brick--mint {
          --brick-left: #7dd1b8;
          --brick-top: #c1f0e0;
          fill: #a8e6cf;
        }

        .lego-brick--lime {
          --brick-left: #b8d900;
          --brick-top: #e6ff66;
          fill: #d4ff00;
        }

        .lego-brick--purple {
          --brick-left: #6a5a8a;
          --brick-top: #a89fc8;
          fill: #8b7ab8;
        }

        .lego-brick-group {
          animation: brick-bounce 6s cubic-bezier(0.37, 0, 0.63, 1) infinite;
        }

        .lego-brick-group--1 {
          animation-name: brick-move-1;
        }

        .lego-brick-group--2 {
          animation-name: brick-move-2;
        }

        .lego-brick-group--3 {
          animation-name: brick-move-3;
        }

        .lego-brick-group--4 {
          animation-name: brick-move-4;
        }

        @keyframes brick-bounce {
          from, 12%, 15%, 27%, 30%, 42%, 45%, 62%, 65%, 77%, 80%, 92%, 95%, to {
            transform: translate(0, 0);
          }
          13.5%, 28.5%, 43.5%, 63.5%, 78.5%, 93.5% {
            transform: translate(0, 6px);
          }
        }

        @keyframes brick-move-1 {
          from, 4%, 92%, to {
            transform: translate(0, 0);
          }
          12%, 19%, 77%, 84% {
            transform: translate(17.5px, 10px);
          }
          27%, 34%, 62%, 69% {
            transform: translate(35px, 20px);
          }
          42%, 54% {
            transform: translate(52.5px, 30px);
          }
        }

        @keyframes brick-move-2 {
          from, 92%, to {
            transform: translate(0, -47px);
          }
          4% {
            transform: translate(0, -87px);
          }
          8% {
            transform: translate(-35px, -87px);
          }
          12%, 80% {
            transform: translate(-35px, -67px);
          }
          84% {
            transform: translate(-35px, -107px);
          }
          88% {
            transform: translate(0, -67px);
          }
        }

        @keyframes brick-move-3 {
          from, 15%, 77%, to {
            transform: translate(0, -47px);
          }
          19% {
            transform: translate(0, -87px);
          }
          23% {
            transform: translate(-35px, -87px);
          }
          27%, 65% {
            transform: translate(-35px, -67px);
          }
          69% {
            transform: translate(-35px, -107px);
          }
          73% {
            transform: translate(0, -67px);
          }
        }

        @keyframes brick-move-4 {
          from, 30%, 62%, to {
            transform: translate(0, -47px);
          }
          34% {
            transform: translate(0, -87px);
          }
          38% {
            transform: translate(-35px, -87px);
          }
          42%, 50% {
            transform: translate(-35px, -67px);
          }
          54% {
            transform: translate(-35px, -107px);
          }
          58% {
            transform: translate(0, -67px);
          }
        }
      `}</style>
    </div>
  );
}
