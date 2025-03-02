import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

const Checkout = () => {
  const { state } = useLocation(); // Access cart items and total price passed from Cart
  const { cartItems, clearCart } = useCart(); // Use clearCart to remove items after placing order
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [modalMessage, setModalMessage] = useState(""); // Message to display in modal
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contactNumber: "",
    paymentType: "Cash on Delivery",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.contactNumber
    ) {
      alert("Please fill all teh details");
      return;
    }
    //save order details in database or local storage
    const orderDetails = {
      ...formData,
      orderedItems: cartItems,
      totalPrice: cartItems.length > 0 ? state.totalPriceWithShipping : 0,
    };
    console.log(`Order Details:  ${orderDetails}`);
    // Show success modal
    setModalMessage("Your order has been placed successfully!");
    setIsModalOpen(true);

    // Clear cart and navigate to order confirmation page after 2 seconds
    setTimeout(() => {
      clearCart();
      navigate("/order-confirm", { state: { orderDetails } });
    }, 2000);
  };
  const subTotal = cartItems.length > 0 ? state.totalPriceWithShipping : 0;
  const shipping = 0;
  const total = subTotal + shipping;
  return (
    <section className="pt-15">
      <div>
        <div className="bg-gradient-to-b from-orange-200 to-teal-200 flex xs:flex-row flex-col-reverse justify-center items-center sm:p-10 xs:p-8 p-6 gap-5 relative">
          <div>
            <p className="text-sm font-light bg-slate py-2 px-10 text-white absolute top-0 left-0 rounded-br-full smd:block hidden">
              Limited-Time Deal{" "}
              <span className="text-2xl font-black block">10% Off</span>
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-black">Checkout</h1>
            <p className="text-3xl">Your New Kicks Are Just a Step Away!</p>
            <p className="text-sm">
              Finish your checkout and get ready to step up your style!
            </p>
          </div>

          <img
            src="https://cdn.pixabay.com/photo/2023/05/03/22/43/tennis-7968714_1280.png"
            alt="checkout-shoes"
            className="w-30 h-30 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-10 sm:p-10 xs:p-8 p-6">
          <div className="space-y-5">
            <h1 className="text-3xl font-black">Order Summary</h1>
            <div className="border border-slate-200 rounded-md space-y-5 p-5">
              {cartItems.length === 0 ? (
                <p>No Summary</p>
              ) : (
                cartItems.map((orderItem, index) => (
                  <>
                    <div key={index}>
                      <img
                        src={orderItem.image}
                        alt={orderItem.name}
                        className="w-full h-90 object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <h1 className="text-3xl font-black ">{orderItem.name}</h1>
                      <p className="text-16">
                        Price: <strong>${orderItem.price}</strong>
                      </p>
                      <p className="text-16">Quantity : {orderItem.quantity}</p>
                      <p>
                        Total : $
                        {(orderItem.price * orderItem.quantity).toFixed(2)}{" "}
                      </p>
                    </div>
                  </>
                ))
              )}
            </div>
          </div>
          {/* shipping details  */}
          <div className="space-y-5">
            <h2 className="text-3xl font-black">Shipping Details</h2>
            <div className="space-y-3 border border-slate-200 p-5 rounded-md">
              <p>SubTotal : ${subTotal.toFixed(2)}</p>
              <p>Shipping : ${shipping.toFixed(2)}</p>
              <p className="text-2xl">Total : ${total.toFixed(2)}</p>
            </div>
            <form className="pt-5 space-y-3">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm block">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Full Name... "
                  onChange={handleChange}
                  value={formData.name}
                  className="py-2 px-4 border border-slate-200 rounded-md w-full outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm block">
                  Email Address:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter Email Address (Example: abc123@gmail.com)... "
                  onChange={handleChange}
                  value={formData.email}
                  className="py-2 px-4 border border-slate-200 rounded-md w-full outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="address" className="text-sm block">
                  Residential Address:
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter Residential Address... "
                  onChange={handleChange}
                  value={formData.address}
                  className="py-2 px-4 border border-slate-200 rounded-md w-full outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contactNumber" className="text-sm block">
                  Contact Number:
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Enter Contact Number... "
                  onChange={handleChange}
                  value={formData.contactNumber}
                  className="py-2 px-4 border border-slate-200 rounded-md w-full outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="paymentMethod" className="text-sm block">
                  Payment Method:
                </label>
                <select
                  type="text"
                  id="paymentMethod"
                  name="paymentMethod"
                  placeholder="Enter Contact Number... "
                  onChange={handleChange}
                  value={formData.paymentType}
                  className="py-2 px-4 border border-slate-200 rounded-md w-full outline-none"
                >
                  <option value="Cash on Delivery">Cash on Delivery </option>
                </select>
              </div>
            </form>
            <div onClick={handlePlaceOrder}>
              <Button btnContent={"Place Order"} />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Order Placed Successfully!"
        message={modalMessage}
        status="success"
        type="notification" // No confirmation buttons, just a notification
      />
    </section>
  );
};

export default Checkout;
