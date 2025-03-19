import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openDropDown = () => {
    setOpen(!open);
  };
  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Opportunities", path: "/opportunities" },
    { label: "Explore Startups", path: "/explore-startups" },
    { label: "Blogs", path: "/" },
  ];
  return (
    <div className=" w-full  z-50 font-Montserrat pt-[32px]">
      <div className="md:flex items-center justify-between bg-white  px-[4%]  pb-[24px]  md:py-0 ">
        <div className="font-bold text-black text-2x1 cursor-pointer flex items-center font-[poppins]">
          <Link to="/">
            <img alt="Logo" className="md:w-[162px] w-[59px]" src={Logo} />
          </Link>
        </div>
        <div
          onClick={openDropDown}
          className="text-3x1 absolute right-8 top-6 cursor-pointer md:hidden text-black"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0  absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-[4%]  transition-all duration-500 ease-in ${
            open ? "top-4 opacity-100" : "top-[-490px] z-[-1]"
          } md:opacity-100 mt-12 md:mt-0`}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="md:ml-8 text-sm md:my-0 my-7">
              <Link
                to={link.path}
                className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer py-5 text-[17px] font-[400]"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="md:ml-8 text-sm md:my-0 my-7">
            <Link to="/">
              <button className="text-gray-800 md:py-[8px] py-1 rounded-[30px] md:px-[24px] px-2 border-[#000000] border-[1px] hover:text-gray-400 duration-500 cursor-pointer text-[17px] font-[400]">
                Get Started
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
