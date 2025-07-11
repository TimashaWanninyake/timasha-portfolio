import Cube from "./Cube";

const About = () => {
  return (
    <div className="flex bg-[#242424]" id="About">
      <div className="flex-1 pl-13 flex">
        <div className="flex-1 flex flex-col ml-30">
          <p className="text-[45px] font-inter font-medium text-[#e7e7e7e4] ml-13 pt-11">About me</p>
          <Cube />
        </div>

        <div className="flex-1 mt-15 mb-18 text-[#e7e7e7e4] font-inter font-normal -ml-35 mr-24">
          <h1 className="text-[32px]">Full-Stack <span className="bg-gradient-to-r from-[#d60505] to-[#FF6347] bg-clip-text text-transparent">Developer</span> | UI/UX Explorer | <span className="bg-gradient-to-r from-[#d60505] to-[#FF6347] bg-clip-text text-transparent">Data Science Enthusiast </span></h1><br />
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
