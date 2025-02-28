import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-lg">
      <div className=" flex items-center justify-between max-w-5xl mx-auto px-10">
        <div className="logo">
          <img src="/logo.png" alt="shoose-logo" className="w-22 h-15" />
        </div>
        <div>
          <ul className="flex items-center gap-10">
            <li className="text-sm hover:bg-gray-100 py-1.5 px-3 rounded-md cursor-pointer transition-all ease-in duration-200">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-sm hover:bg-gray-100 py-1.5 px-3 rounded-md cursor-pointer transition-all ease-in duration-200">
              <Link to={"/"}>Shoes</Link>
            </li>
            <li className="text-sm hover:bg-gray-100 py-1.5 px-3 rounded-md cursor-pointer transition-all ease-in duration-200">
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="cart">
          <BsCart3 className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
