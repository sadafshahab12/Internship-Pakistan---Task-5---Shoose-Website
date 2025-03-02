import { BsCart3 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./context/CartContext";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="shadow-lg fixed z-100 bg-white w-full ">
      <div className=" flex items-center justify-between max-w-5xl mx-auto px-5 sm:px-10">
        <div className="logo flex items-center gap-3">
          <HiMenuAlt2
            className="sm:hidden block cursor-pointer w-5 h-5"
            onClick={handleMenu}
          />
          <img
            src="/logo.png"
            alt="shoose-logo"
            className="sm:w-22 w-20  h-13 sm:h-15"
          />
        </div>
        <div className="sm:block hidden">
          <ul className="flex  items-center gap-10">
            <li className="text-sm hover:bg-gray-100 py-1.5 px-3 rounded-md cursor-pointer transition-all ease-in duration-200">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-sm hover:bg-gray-100 py-1.5 px-3 rounded-md cursor-pointer transition-all ease-in duration-200">
              <Link to={"/shoes"}>Shoes</Link>
            </li>
            <li className="text-sm hover:bg-gray-100 py-1.5 px-3 rounded-md cursor-pointer transition-all ease-in duration-200">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        {/* mobile nav  */}
        <div
          className={`sm:hidden block absolute bg-white ${
            isOpen ? "left-0" : "-left-full"
          } top-12 h-screen w-full shadow-lg py-2 px-5 transition-all ease-in duration-300`}
        >
          <ul className="flex flex-col items-center gap-10">
            <li
              className="text-sm hover:bg-gray-100 py-1.5 px-3 rounded-md cursor-pointer transition-all ease-in duration-200"
              onClick={handleCloseMenu}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className="text-sm hover:bg-gray-100 py-1.5 px-3 rounded-md cursor-pointer transition-all ease-in duration-200"
              onClick={handleCloseMenu}
            >
              <Link to={"/shoes"}>Shoes</Link>
            </li>
            <li
              className="text-sm hover:bg-gray-100 py-1.5 px-3 rounded-md cursor-pointer transition-all ease-in duration-200"
              onClick={handleCloseMenu}
            >
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="cart relative" onClick={() => navigate("/cart")}>
          <BsCart3 className="w-6 h-6 cursor-pointer" />
          <p className="h-5 w-5 flex justify-center items-center rounded-full bg-slate text-orange-200  text-12 absolute -top-2 -right-2">
            {cartItems.length}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
