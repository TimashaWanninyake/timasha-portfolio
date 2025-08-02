import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-[60px] md:w-[70px] xl:w-[100px] bg-white pl-3 md:pl-4 xl:pl-6 border-r-2 border-[#dfdfdf] pt-3 z-50 hidden lg:block">
      <p className="text-[#CC2525] font-extrabold font-inter text-[18px] lg:text-[22px]">
        <span className="font-medium text-[40px] lg:text-[50px] font-jacques-francois text-[#343434]">T</span>i
      </p>
      <ul className="flex flex-col gap-5 lg:gap-7 pl-1 lg:pl-2 mt-32 lg:mt-44">
        <a href="https://www.linkedin.com/in/timasha-wanninayake" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <RxLinkedinLogo size="22" className="lg:w-[25px] lg:h-[25px]" color="#343434" />
        </a>
        <a href="https://github.com/TimashaWanninyake" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <BsGithub size="22" className="lg:w-[25px] lg:h-[25px]" color="#343434" />
        </a>
        <a href="mailto:timashawanninayaka26@gmail.com" className="hover:scale-110 transition-transform">
          <BsEnvelopeFill size="20" className="lg:w-[23px] lg:h-[23px]" color="#343434" />
        </a>
        <a href="https://wa.me/+94742791417" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <RiWhatsappFill size="24" className="lg:w-[27px] lg:h-[27px]" color="#343434" />
        </a>
        <a href="tel:+94742791417" className="hover:scale-110 transition-transform">
          <BsFillTelephoneFill size="20" className="lg:w-[23px] lg:h-[23px]" color="#343434" />
        </a>
      </ul>
    </div>
  );
};

export default Sidebar;
