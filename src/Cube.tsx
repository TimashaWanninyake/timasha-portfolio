import { useEffect, useRef } from 'react';

import frontImage from '../public/DataScienceLogo.png'
import backImage from '../public/DataScience.png'
import rightImage from '../public/ProgrammingLanguages.jpg'
import leftImage from '../public/frontend.jpg'
import topImage from  '../public/mySQL.png'
import bottomImage from '../public/springBoot.png'

const Cube = () => {
  const cubeRef = useRef<HTMLDivElement>(null);

  const cubeImages = [
    frontImage,
    backImage,
    rightImage,
    leftImage,
    topImage,
    bottomImage
  ];

  useEffect(() => {
    if (!cubeRef.current) return;

    let animationFrameId: number;
    let rotation = 0;
    const rotationSpeed = 0.5;

    const animate = () => {
      rotation += rotationSpeed;
      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(${rotation * 0.7}deg) rotateY(${rotation}deg)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="ml-8 md:ml-12 xl:ml-24 2xl:ml-40 mt-28 md:mt-36 xl:mt-48 2xl:mt-60 w-52 h-52 md:w-48 md:h-48 xl:w-64 xl:h-64 2xl:w-80 2xl:h-80" style={{
      perspective: '1000px',
      position: 'relative',
      transformStyle: 'preserve-3d'
    }}>
      <style>{`
        @media (max-width: 767px) {
          .cube-face { transform: rotateY(0deg) translateZ(104px) !important; }
          .cube-face.back { transform: rotateY(180deg) translateZ(104px) !important; }
          .cube-face.right { transform: rotateY(90deg) translateZ(104px) !important; }
          .cube-face.left { transform: rotateY(-90deg) translateZ(104px) !important; }
          .cube-face.top { transform: rotateX(90deg) translateZ(104px) !important; }
          .cube-face.bottom { transform: rotateX(-90deg) translateZ(104px) !important; }
        }
        @media (min-width: 768px) and (max-width: 1279px) {
          .cube-face { transform: rotateY(0deg) translateZ(96px) !important; }
          .cube-face.back { transform: rotateY(180deg) translateZ(96px) !important; }
          .cube-face.right { transform: rotateY(90deg) translateZ(96px) !important; }
          .cube-face.left { transform: rotateY(-90deg) translateZ(96px) !important; }
          .cube-face.top { transform: rotateX(90deg) translateZ(96px) !important; }
          .cube-face.bottom { transform: rotateX(-90deg) translateZ(96px) !important; }
        }
        @media (min-width: 1536px) {
          .cube-face { transform: rotateY(0deg) translateZ(160px) !important; }
          .cube-face.back { transform: rotateY(180deg) translateZ(160px) !important; }
          .cube-face.right { transform: rotateY(90deg) translateZ(160px) !important; }
          .cube-face.left { transform: rotateY(-90deg) translateZ(160px) !important; }
          .cube-face.top { transform: rotateX(90deg) translateZ(160px) !important; }
          .cube-face.bottom { transform: rotateX(-90deg) translateZ(160px) !important; }
        }
      `}</style>
      <div
        ref={cubeRef}
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 1s',
          width: '100%',
          height: '100%'
        }}
      >
        {/* Front Face - data science logo*/}
        <div
          className="cube-face absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{
            transform: 'rotateY(0deg) translateZ(128px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img 
            src={cubeImages[0]} 
            alt="Data Science" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Back Face - data science*/}
        <div 
          className="cube-face back absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{ 
            transform: 'rotateY(180deg) translateZ(128px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img 
            src={cubeImages[1]} 
            alt="Data Science" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right Face */}
        <div 
          className="cube-face right absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{ 
            transform: 'rotateY(90deg) translateZ(128px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img 
            src={cubeImages[2]} 
            alt="Programming Languages" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Left Face */}
        <div 
          className="cube-face left absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{ 
            transform: 'rotateY(-90deg) translateZ(128px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img 
            src={cubeImages[3]} 
            alt="Frontend" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Top Face */}
        <div 
          className="cube-face top absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{ 
            transform: 'rotateX(90deg) translateZ(128px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img 
            src={cubeImages[4]} 
            alt="MySQL" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Bottom Face */}
        <div 
          className="cube-face bottom absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{ 
            transform: 'rotateX(-90deg) translateZ(128px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img 
            src={cubeImages[5]} 
            alt="Spring Boot" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Cube;
