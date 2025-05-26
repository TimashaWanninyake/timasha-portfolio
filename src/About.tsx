const About = () => {
  return (
    <div className="flex bg-white  mb-30">
      <div className="flex-1 pl-13 flex">

        <div className="flex-1 flex ml-30 text-[40px] text-[#343434] font-inter">
          <p className="">This is me</p>
        </div>

        <div className="flex-1 text-[#343434] font-inter -ml-35 mr-24">
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