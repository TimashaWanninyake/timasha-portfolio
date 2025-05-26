const Navbar = () => {
  return (
      <div className="fixed top-0 left-0 w-full bg-white z-50">
          <div className="flex justify-end items-center pr-25 pt-9 pb-7">
              <ul className="flex space-x-8 font-semibold text-[#343434] font-inter text-[20px]">
                  <li><a href="Home" className="hover:text-gray-400 pl-6">Home</a></li>
                  <li><a href="About" className="hover:text-gray-400 pl-6">About</a></li>
                  <li><a href="#Projects" className="hover:text-gray-400 pl-6">Projects</a></li>
                  <li><a href="#Contact" className="hover:text-gray-400 pl-6">Contact</a></li>
              </ul>
          </div>
      </div>
  );
};

export default Navbar;
