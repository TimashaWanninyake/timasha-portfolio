import Cube from "./Cube";

const About = () => {
  return (
    <section className="flex bg-[#242424] min-h-screen mt-8 md:mt-16 lg:mt-12 2xl:mt-20 4xl:mt-24" id="About">
      <div className="flex-1 ml-0 lg:ml-[70px] xl:ml-[100px] 2xl:ml-[140px] 4xl:ml-[180px]">
        <div className="flex-1 pl-4 md:pl-6 lg:pl-12 2xl:pl-16 4xl:pl-24 flex flex-col lg:flex-row">
          <div className="flex-1 flex flex-col ml-0 md:ml-2 lg:ml-8 2xl:ml-12 4xl:ml-16">
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 4xl:text-6xl font-inter font-medium text-[#e7e7e7e4] ml-2 md:ml-4 lg:ml-8 2xl:ml-12 4xl:ml-16 pt-11 2xl:pt-16 4xl:pt-20">About me</p>
            <div className="hidden lg:block">
              <Cube />
            </div>
          </div>

          <div className="flex-1 mt-8 lg:mt-15 2xl:mt-20 4xl:mt-28 mb-8 lg:mb-18 2xl:mb-24 4xl:mb-32 text-[#e7e7e7e4] font-inter font-normal -ml-2 md:-ml-4 lg:-ml-20 2xl:-ml-28 4xl:-ml-36 mr-4 md:mr-6 lg:mr-24 2xl:mr-32 4xl:mr-40 px-4 md:px-6 2xl:px-8 4xl:px-12">
            {/* Mobile Layout - Line by Line */}
            <div className="block md:hidden">
              <h1 className="text-base leading-relaxed">
                <span className="bg-gradient-to-r from-[#d60505] to-[#FF6347] bg-clip-text text-transparent">Full-Stack Developer</span><br />
                <span className="bg-gradient-to-r from-[#d60505] to-[#FF6347] bg-clip-text text-transparent">UI/UX Explorer</span><br />
                <span className="bg-gradient-to-r from-[#d60505] to-[#FF6347] bg-clip-text text-transparent">Data Science Enthusiast</span>
              </h1><br />
            </div>
            
            {/* Desktop Layout - with special handling for 1024px+ */}
            <div className="hidden md:block">
              <h1 className="md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 4xl:text-4xl leading-relaxed">
                Full-Stack <span className="bg-gradient-to-r from-[#d60505] to-[#FF6347] bg-clip-text text-transparent">Developer</span> | UI/UX Explorer | 
                <span className="lg:block lg:mt-2 2xl:mt-3 4xl:mt-4">
                  <span className="bg-gradient-to-r from-[#d60505] to-[#FF6347] bg-clip-text text-transparent">Data Science Enthusiast</span>
                </span>
              </h1><br />
            </div>
            
            <p className="text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl 4xl:text-2xl mb-7 2xl:mb-10 4xl:mb-12 leading-relaxed">
              I am a full-stack developer and computer science undergraduate with a
              passion for creating exceptional web experience.<br/><br/> I have a strong
              foundation in both front-end and back-end development, and I am always
              looking to learn new technologies and improve my skills. I am a creative
              problem solver who enjoys working on challenging projects and
              collaborating with others to create innovative solutions.<br/><br/>
              Always excited to create, optimize, and innovate, I see every project
              as an opportunity to push boundaries and grow.
            </p><br />

            <h3 className="text-base md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 4xl:text-4xl mb-8 2xl:mb-12 4xl:mb-16">Tech I familiar with,</h3>
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 md:p-8 2xl:p-12 4xl:p-16 border border-[#ce4646]/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 2xl:gap-12 4xl:gap-16">
                
                {/* Frontend */}
                <div className="text-center group">
                  <h4 className="text-sm md:text-base 2xl:text-lg 4xl:text-xl font-semibold bg-gradient-to-r from-[#d60505] to-[#FF6347] bg-clip-text text-transparent mb-3 2xl:mb-4 4xl:mb-6">Frontend</h4>
                  <div className="space-y-2 2xl:space-y-3 4xl:space-y-4 text-xs md:text-sm 2xl:text-base 4xl:text-lg text-[#e7e7e7e4]">
                    <div className="hover:text-[#ce4646] transition-colors cursor-pointer">React</div>
                    <div className="hover:text-[#ce4646] transition-colors cursor-pointer">TypeScript</div>
                    <div className="hover:text-[#ce4646] transition-colors cursor-pointer">Tailwind CSS</div>
                    <div className="hover:text-[#ce4646] transition-colors cursor-pointer">Figma</div>
                  </div>
                </div>

                {/* Backend */}
                <div className="text-center group">
                  <h4 className="text-sm md:text-base 2xl:text-lg 4xl:text-xl font-semibold bg-gradient-to-r from-[#d60505] to-[#FF6347] bg-clip-text text-transparent mb-3 2xl:mb-4 4xl:mb-6">Backend</h4>
                  <div className="space-y-2 2xl:space-y-3 4xl:space-y-4 text-xs md:text-sm 2xl:text-base 4xl:text-lg text-[#e7e7e7e4]">
                    <div className="hover:text-[#ce4646] transition-colors cursor-pointer">Spring Boot</div>
                    <div className="hover:text-[#ce4646] transition-colors cursor-pointer">MySQL</div>
                  </div>
                </div>

                {/* Data Science */}
                <div className="text-center group">
                  <h4 className="text-sm md:text-base 2xl:text-lg 4xl:text-xl font-semibold bg-gradient-to-r from-[#d60505] to-[#FF6347] bg-clip-text text-transparent mb-3 2xl:mb-4 4xl:mb-6">Data & AI</h4>
                  <div className="space-y-2 2xl:space-y-3 4xl:space-y-4 text-xs md:text-sm 2xl:text-base 4xl:text-lg text-[#e7e7e7e4]">
                    <div className="hover:text-[#ce4646] transition-colors cursor-pointer">Python</div>
                    <div className="hover:text-[#ce4646] transition-colors cursor-pointer">Pandas</div>
                    <div className="hover:text-[#ce4646] transition-colors cursor-pointer">NumPy</div>
                    <div className="hover:text-[#ce4646] transition-colors cursor-pointer">Scikit-learn</div>
                  </div>
                </div>

                {/* Languages */}
                <div className="text-center group">
                  <h4 className="text-sm md:text-base 2xl:text-lg 4xl:text-xl font-semibold bg-gradient-to-r from-[#d60505] to-[#FF6347] bg-clip-text text-transparent mb-3 2xl:mb-4 4xl:mb-6">Languages</h4>
                  <div className="space-y-2 2xl:space-y-3 4xl:space-y-4 text-xs md:text-sm 2xl:text-base 4xl:text-lg text-[#e7e7e7e4]">
                    <div className="hover:text-[#ce4646] transition-colors cursor-pointer">Python</div>
                    <div className="hover:text-[#ce4646] transition-colors cursor-pointer">Java</div>
                    <div className="hover:text-[#ce4646] transition-colors cursor-pointer">JavaScript</div>
                    <div className="hover:text-[#ce4646] transition-colors cursor-pointer">C/C#</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
