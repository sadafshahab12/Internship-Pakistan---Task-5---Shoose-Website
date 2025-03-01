import { BsCart3 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

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
              <Link to={"/shoes"}>Shoes</Link>
            </li>
            <li className="text-sm hover:bg-gray-100 py-1.5 px-3 rounded-md cursor-pointer transition-all ease-in duration-200">
              <Link to={"/"}>Contact</Link>
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
