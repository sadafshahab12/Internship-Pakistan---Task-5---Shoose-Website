import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext';

const Checkout = () => {
    const {state} = useLocation(); // Access cart items and total price passed from Cart
const {cartItems, clearCart} = useCart(); // Use clearCart to remove items after placing order
const navigate = useNavigate();

const [formData , setFormData] = useState({
    name : "",
    email : "",
    address : "",
    contactNumber : "",
    paymentType : "Cash on Delivery"
})

const handleChange = (e)=>{
    const {name , value} = e.target;
    setFormData((prevData)=>(
        {
            ...prevData,
            [name] : value
        }
    ))
}

const handlePlaceOrder = ()=>{
    if(!formData.name || !formData)
} 

  return (
    <div>
      
    </div>
  )
}

export default Checkout
