import { useEffect, useRef } from 'react';

// Import your cube face images
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

const About = () => {
  return (
    <div className="flex bg-white">
      <div className="flex-1 pl-13 flex">
        <div className="flex-1 flex flex-col ml-30">
          <h1 className="text-[45px] font-inter font-medium text-[#525151] ml-13 pt-11">This is me</h1>
          <Cube />
        </div>

        <div className="flex-1 mt-15 mb-18 text-[#525151] font-inter -ml-35 mr-24">
          <h1 className="text-[32px]">Full-Stack Developer | UI/UX Explorer | Data Science Enthusiast </h1><br />
          <p className="text-[22px] mb-7">
            I am a full-stack developer and computer science undergraduate with a
            passion for creating exceptional web experience.<br/><br/> I have a strong
            foundation in both front-end and back-end development, and I am always
            looking to learn new technologies and improve my skills. I am a creative
            problem solver who enjoys working on challenging projects and
            collaborating with others to create innovative solutions.<br/><br/>
            Always excited to create, optimize, and innovate, I see every project 
            as an opportunity to push boundaries and grow.
          </p><br />

          <h3 className="text-[32px] mb-5">Tech I familiar with,</h3>
          <h4 className="text-[22px] ">Frontend <span className="ml-10.5"> — </span> <span className="ml-10">React | TypeScript | Tailwind CSS | HTML/CSS | Figma</span></h4>
          <h4 className="text-[22px]">Backend <span className="ml-11"> — </span> <span className="ml-10">Spring Boot | SQL</span></h4>
          <h4 className="text-[22px]">Data & AI <span className="ml-9.5"> — </span> <span className="ml-10">NumPy | Pandas | Matplotlib | Seaborn | SciPy | Scikit-learn</span></h4>
          <h4 className="text-[22px]">Languages <span className="ml-5"> — </span><span className="ml-10">Python | Java | C | C# | JavaScript</span></h4>
        </div>
      </div>
    </div>
  );
};

export default About;
