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
        {/* Front Face - data science logo*/}
        <div
          className="absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{
            transform: 'rotateY(0deg) translateZ(160px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img 
            src={cubeImages[0]} 
            alt="Top" 
            className="w-[600px] h-[600px] object-contain scale-150"
            style={{ transform: 'scale(0.75)' }} 
          />
        </div>
        
        {/* Back Face - data science*/}
        <div 
          className="absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{ 
            transform: 'rotateY(180deg) translateZ(160px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img 
            src={cubeImages[1]} 
            alt="Back" 
            className="w-[600px] h-[600px] object-contain scale-140"
            style={{ transform: 'scale(0.75)' }} 
          />
        </div>
        
        {/* Right Face - programming languages*/}
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
            className="w-[600px] h-[600px] object-contain scale-250"
            style={{ transform: 'scale(0.75)' }}
          />
        </div>
        
        {/* Left Face - frontend*/}
        <div 
          className="absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{ 
            transform: 'rotateY(-90deg) translateZ(160px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img 
            src={cubeImages[3]} 
            alt="Left" 
            className="w-[600px] h-[600px] object-contain scale-180"
            style={{ transform: 'scale(0.75)' }} 
          />
        </div>
        
        {/* Top Face - MySQL */}
        <div 
          className="absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{ 
            transform: 'rotateX(90deg) translateZ(160px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img 
            src={cubeImages[4]} 
            alt="Top" 
            className="w-[600px] h-[600px] object-contain scale-150"
            style={{ transform: 'scale(0.75)' }} 
          />
        </div>
        
        {/* Bottom Face - Spring Boot*/}
        <div 
          className="absolute w-full h-full flex items-center justify-center bg-white overflow-hidden"
          style={{ 
            transform: 'rotateX(-90deg) translateZ(160px)',
            backfaceVisibility: 'hidden',
            border: '2px solid #eee',
            boxShadow: '0 0 20px rgba(0,0,0,0.1)'
          }}
        >
          <img 
            src={cubeImages[5]} 
            alt="Bottom" 
            className="w-[600px] h-[600px] object-contain scale-150"
            style={{ transform: 'scale(0.75)' }} 
          />
        </div>
      </div>
    </div>
  );
};

export default Cube;