import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import myImage from "../public/myimg.png"
import { BsArrowUpRight } from "react-icons/bs";
import cv from '../public/Timasha Wanninayaka.pdf'

import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Home = () => {
  return (
    <div className="flex" id="Home">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="pt-30 pl-15 bg-[#ffffff] text-[#343434] h-screen">
          <div className="flex justify-center items-center">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              className="flex-1 ml-40 mt-20">
              <p className="font-inter text-[22px] font-medium -mb-6 ml-0.5">Hi There,</p>
              <p className="font-inter text-[100px] font-black -mb-3.5">
                I am T<span className="text-[#CC2525]">i</span>masha
              </p>
              <p className="font-inter text-[46px] font-medium mb-0.5 leading-tight">
                specializing in full-stack <br></br>system architecture
              </p>
              <p className="font-inter text-[22px] font-regular mb-9">
                & data-driven solution engineering.
              </p>
              <div className="flex items-center space-x-5">
                <a href="#Projects" className="py-3 px-7 bg-gradient-to-r from-[#d60505] to-[#FF6347]  text-white text-[20px] rounded-lg">
                  see my work
                </a>
                <a
                  href={cv}
                  download="Timasha Wanninayaka.pdf"
                  className="flex items-center py-3.5 px-6 text-[#ce4646] text-[20px] rounded-lg"
                >
                  View Full Resume <BsArrowUpRight size="15" color="#ce4646" className="ml-2" />
                </a>
              </div>

            </motion.div>
            <div className="flex-1 ml-10">
              <img
                src={myImage}
                alt="Your Image"
                className="ml-9 mt-10 w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;