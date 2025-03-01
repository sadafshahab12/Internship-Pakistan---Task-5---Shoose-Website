import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Shoes from "./components/pages/Shoes";
import Cart from "./components/pages/Cart";
import CategoryDetails from "./components/pages/CategoryDetails";
import { CartProvider } from "./components/context/CartContext";

const App = () => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/category/:category/:id"
              element={<CategoryDetails />}
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
