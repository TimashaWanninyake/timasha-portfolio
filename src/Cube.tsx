import { useEffect, useRef } from 'react';

import frontImage from './assets/DataScienceLogo.png';
import backImage from './assets/dataScience.png';
import rightImage from './assets/ProgrammingLanguages.jpg';
import leftImage from './assets/frontend.jpg';
import topImage from './assets/mySQL.png';
import bottomImage from './assets/springBoot.png';

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
        cubeRef.current.style.transform = `rotateX(${rotation}deg) rotateY(${rotation * 0.7}deg)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="ml-40 mt-50 w-80 h-80" style={{
      perspective: '1000px',
      position: 'relative',
      transformStyle: 'preserve-3d'
    }}>
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
        {/* Front Face */}
        <div
          className="absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{
            transform: 'rotateY(0deg) translateZ(160px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img src={cubeImages[0]} alt="Front" className="w-[600px] h-[600px] object-contain" />
        </div>
        
        {/* Back Face */}
        <div 
          className="absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{ 
            transform: 'rotateY(180deg) translateZ(160px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img src={cubeImages[1]} alt="Back" className="w-[600px] h-[600px] object-contain" />
        </div>
        
        {/* Right Face */}
        <div 
          className="absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{ 
            transform: 'rotateY(90deg) translateZ(160px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img 
            src={cubeImages[2]} 
            alt="Right" 
            className="w-[600px] h-[600px] object-contain scale-150"  // Scales to 75% size
            style={{ transform: 'scale(0.75)' }}  // Alternative inline style
          />
        </div>
        
        {/* Left Face */}
        <div 
          className="absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{ 
            transform: 'rotateY(-90deg) translateZ(160px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img src={cubeImages[3]} alt="Left" className="w-[600px] h-[600px] object-contain" />
        </div>
        
        {/* Top Face */}
        <div 
          className="absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{ 
            transform: 'rotateX(90deg) translateZ(160px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img src={cubeImages[4]} alt="Top" className="w-[600px] h-[600px] object-contain" />
        </div>
        
        {/* Bottom Face */}
        <div 
          className="absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{ 
            transform: 'rotateX(-90deg) translateZ(160px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img src={cubeImages[5]} alt="Bottom" className="w-[600px] h-[600px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Cube;