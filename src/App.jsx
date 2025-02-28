import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Shoes from "./components/pages/Shoes"
import Cart from "./components/pages/Cart"
import CategoryDetails from "./components/pages/CategoryDetails"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shoes" element={<Shoes/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/category/:category/:id" element={<CategoryDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
