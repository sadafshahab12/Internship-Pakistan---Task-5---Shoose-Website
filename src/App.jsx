import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Shoes from "./components/pages/Shoes";
import Cart from "./components/pages/Cart";
import CategoryDetails from "./components/pages/CategoryDetails";
import { CartProvider } from "./components/context/CartContext";
import Checkout from "./components/pages/Checkout";
import Footer from "./components/ui/Footer";
import Contact from "./components/pages/Contact";
import OrderConfirmation from "./components/pages/OrderConfirmation";

const App = () => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/category/:category/:id"
              element={<CategoryDetails />}
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirm" element={<OrderConfirmation />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
