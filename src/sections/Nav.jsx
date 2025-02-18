import { useState, useEffect } from "react";

import logo from "../assets/images/logo.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(true);


  // Close menu if open when screen is larger than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <div className="w-full flex justify-center px-4 text-lg">
      <div className="max-w-7xl w-full">

        {/* Desktop navigation bar */}
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center gap-12">
            <img src={logo} alt="" />
            <div className="hidden lg:flex items-center gap-8 text-ngray [&>*]:hover:text-ndark">
              <a href="#" className="">
                Features
              </a>
              <a href="#" className="">
                Pricing
              </a>
              <a href="#" className="">
                Resources
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <p className="text-ngrayishvio hover:text-ndark cursor-pointer">Login</p>
            <button className="bg-cyan text-white px-6 py-2 rounded-full hover:opacity-70">
              Sign Up
            </button>
          </div>

          {/* Opoen and close menu on mobile view */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="21"
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <g fill="#242D52" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
        </nav>

          {/* Mobile view menu */}
          {isOpen && (
          <div className="absolute z-10 left-4 right-4 p-6 bg-violet rounded-lg text-center lg:hidden">
            <nav className="flex flex-col items-center gap-6 text-white">
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Resources</a>
              <div className="w-full h-px bg-gray-600"></div>
              <button className="w-full !bg-transparent">Login</button>
              <button className="w-full">
                Sign Up
              </button>
            </nav>
          </div>
        )}

      </div>
    </div>
  );
}

export default Nav;
