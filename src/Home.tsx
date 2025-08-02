import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import myImage from "../public/Timasha.jpg"
import { BsArrowUpRight } from "react-icons/bs";
import cv from '../public/Timasha Wanninayaka.pdf'

import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Home = () => {
  return (
    <section className="flex" id="Home">
      <Sidebar />

      <div className="flex-1 ml-0 lg:ml-[70px] xl:ml-[100px]">
        <Navbar />

        <div className="pt-24 lg:pt-32 pl-4 md:pl-6 lg:pl-15 bg-[#ffffff] text-[#343434] min-h-screen pb-8 md:pb-16">
          <div className="flex justify-center items-center flex-col lg:flex-row px-4 md:px-6">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              className="flex-1 ml-0 md:ml-4 xl:ml-20 mt-12 lg:mt-20 text-center lg:text-left">
              <p className="font-inter text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-2xl font-medium mb-2 ml-0.5">Hi There,</p>
              <p className="font-inter text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-black mb-2">
                I am T<span className="text-[#CC2525]">i</span>masha
              </p>
              <p className="font-inter text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-medium mb-4 leading-tight">
                specializing in full-stack <br className="hidden lg:block"></br>system architecture
              </p>
              <p className="font-inter text-sm md:text-base lg:text-base xl:text-lg 2xl:text-2xl font-regular mb-8">
                & data-driven solution engineering.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-5">
                <a href="#Projects" className="py-3 px-6 md:px-6 lg:px-7 bg-gradient-to-r from-[#d60505] to-[#FF6347] text-white text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-2xl rounded-lg hover:shadow-lg transition-shadow">
                  see my work
                </a>
                <a
                  href={cv}
                  download="Timasha Wanninayaka.pdf"
                  className="flex items-center py-3 px-5 md:px-5 lg:px-6 text-[#ce4646] text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-2xl rounded-lg hover:bg-gray-50 transition-colors"
                >
                  View Full Resume <BsArrowUpRight size="15" color="#ce4646" className="ml-2" />
                </a>
              </div>

            </motion.div>
            <div className="flex-1 ml-0 lg:ml-10 2xl:-ml-32 mt-12 lg:mt-8 xl:mt-16 flex justify-center">
              <img
                src={myImage}
                alt="Timasha Wanninayaka"
                className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] 2xl:w-[550px] 2xl:h-[550px] rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;