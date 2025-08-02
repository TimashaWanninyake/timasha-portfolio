import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar - hidden on mobile */}
      <nav className="fixed top-0 left-0 w-full bg-white z-30 shadow-sm hidden md:block">
        <div className="flex justify-end items-center pr-4 lg:pr-25 pt-4 lg:pt-9 pb-4 lg:pb-7">
          <ul className="flex space-x-4 lg:space-x-8 font-semibold text-[#343434] font-inter text-xs md:text-sm lg:text-base">
            <li><a href="#Home" className="hover:text-gray-400 pl-2 lg:pl-6 transition-colors">Home</a></li>
            <li><a href="#About" className="hover:text-gray-400 pl-2 lg:pl-6 transition-colors">About</a></li>
            <li><a href="#Projects" className="hover:text-gray-400 pl-2 lg:pl-6 transition-colors">Projects</a></li>
            <li><a href="#Contact" className="hover:text-gray-400 pl-2 lg:pl-6 transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Hamburger Menu Button - visible only on mobile */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 md:hidden p-3 hover:scale-105 transition-all duration-300"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
          <span className={`block w-5 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Background overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          ></div>
          
          {/* Menu content */}
          <div className="absolute top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300">
            <div className="pt-20 px-6">
              <ul className="space-y-6 font-semibold text-[#343434] font-inter text-lg">
                <li>
                  <a 
                    href="#Home" 
                    className="block hover:text-[#ce4646] transition-colors py-2"
                    onClick={closeMenu}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#About" 
                    className="block hover:text-[#ce4646] transition-colors py-2"
                    onClick={closeMenu}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#Projects" 
                    className="block hover:text-[#ce4646] transition-colors py-2"
                    onClick={closeMenu}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#Contact" 
                    className="block hover:text-[#ce4646] transition-colors py-2"
                    onClick={closeMenu}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
