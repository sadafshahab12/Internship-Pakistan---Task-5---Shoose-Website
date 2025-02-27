import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/public/logo.png" alt="shoose-logo" />
      </div>
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Shoes</Link>
          </li>
        </ul>

      </div>
      <div className="cart">
        
      </div>
    </nav>
  );
};

export default Navbar;
