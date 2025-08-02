import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-[60px] md:w-[70px] xl:w-[100px] 2xl:w-[140px] 4xl:w-[180px] bg-white pl-3 md:pl-4 xl:pl-6 2xl:pl-8 4xl:pl-12 border-r-2 border-[#dfdfdf] pt-3 2xl:pt-5 4xl:pt-8 z-50 hidden lg:block">
      <p className="text-[#CC2525] font-extrabold font-inter text-[18px] lg:text-[22px] 2xl:text-[28px] 4xl:text-[36px]">
        <span className="font-medium text-[40px] lg:text-[50px] 2xl:text-[60px] 4xl:text-[80px] font-jacques-francois text-[#343434]">T</span>i
      </p>
      <ul className="flex flex-col gap-5 lg:gap-7 2xl:gap-10 4xl:gap-12 pl-1 lg:pl-2 2xl:pl-3 4xl:pl-4 mt-32 lg:mt-44 2xl:mt-56 4xl:mt-72">
        <a href="https://www.linkedin.com/in/timasha-wanninayake" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <RxLinkedinLogo size="22" className="lg:w-[25px] lg:h-[25px] 2xl:w-[32px] 2xl:h-[32px] 4xl:w-[42px] 4xl:h-[42px]" color="#343434" />
        </a>
        <a href="https://github.com/TimashaWanninyake" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <BsGithub size="22" className="lg:w-[25px] lg:h-[25px] 2xl:w-[32px] 2xl:h-[32px] 4xl:w-[42px] 4xl:h-[42px]" color="#343434" />
        </a>
        <a href="mailto:timashawanninayaka26@gmail.com" className="hover:scale-110 transition-transform">
          <BsEnvelopeFill size="20" className="lg:w-[23px] lg:h-[23px] 2xl:w-[30px] 2xl:h-[30px] 4xl:w-[38px] 4xl:h-[38px]" color="#343434" />
        </a>
        <a href="https://wa.me/+94742791417" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <RiWhatsappFill size="24" className="lg:w-[27px] lg:h-[27px] 2xl:w-[34px] 2xl:h-[34px] 4xl:w-[44px] 4xl:h-[44px]" color="#343434" />
        </a>
        <a href="tel:+94742791417" className="hover:scale-110 transition-transform">
          <BsFillTelephoneFill size="20" className="lg:w-[23px] lg:h-[23px] 2xl:w-[30px] 2xl:h-[30px] 4xl:w-[38px] 4xl:h-[38px]" color="#343434" />
        </a>
      </ul>
    </div>
  );
};

export default Sidebar;
