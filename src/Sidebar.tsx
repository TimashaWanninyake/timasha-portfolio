import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-[120px] bg-white pl-7 border-r-2 border-[#dfdfdf] pt-3 z-50">
      <p className="text-[#CC2525] font-extrabold font-inter text-[24px]">
        <span className="font-medium text-[55px] font-jacques-francois text-[#343434]">T</span>i
      </p>
      <ul className="flex flex-col gap-8 pl-3 mt-53">
        <a href="https://www.linkedin.com/in/timasha-wanninayake" target="_blank" rel="noopener noreferrer">
          <RxLinkedinLogo size="27" color="#343434" />
        </a>
        <a href="https://github.com/TimashaWanninyake" target="_blank" rel="noopener noreferrer">
          <BsGithub size="27" color="#343434" />
        </a>
        <a href="mailto:timashawanninayaka26@gmail.com">
          <BsEnvelopeFill size="25" color="#343434" />
        </a>
        <a href="https://wa.me/+94742791417" target="_blank" rel="noopener noreferrer">
          <RiWhatsappFill size="29" color="#343434" />
        </a>
        <a href="tel:+94742791417">
          <BsFillTelephoneFill size="25" color="#343434" />
        </a>
      </ul>
    </div>
  );
};

export default Sidebar;
