import { IoCloseOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../ui/Modal";

const Cart = () => {
  const { cartItems, updateCartItemQuantity, removeItemFromCart } = useCart();
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shippingCharges = totalPrice > 80 ? 0 : 10;
  const totalPriceWithShipping = totalPrice + shippingCharges;

  /// State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [productName, setProductName] = useState("");
  const [action, setAction] = useState(null);
  const [itemIndexToDelete, setItemIndexToDelete] = useState(null);

  const handleCheckout = () => {
    setModalTitle("Confirm Checkout");
    setModalMessage("Are you sure you want to proceed to checkout?");
    setProductName("");
    setItemIndexToDelete(null);

    // Set the action to navigate to the checkout page
    setAction(() => () => {
      navigate("/checkout", { state: { cartItems, totalPriceWithShipping } });
      setIsModalOpen(false);
    });
    setIsModalOpen(true);
  };

  const handleDeleteConfirmation = (index, item) => {
    setModalTitle("Delete Item");
    setModalMessage("Are you sure you want to remove?");
    setProductName(item.name);
    setItemIndexToDelete(index);

    // Set the action to delete the item
    setAction(() => () => {
      removeItemFromCart(index);
      setIsModalOpen(false);
      setItemIndexToDelete(null);
    });
    setIsModalOpen(true);
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto xs:p-10 p-5 space-y-10 ">
        <h1 className="text-3xl font-black">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="grid grid-cols-1 mmd:grid-cols-4 gap-5">
            <div className="space-y-5 col-span-1 sm:col-span-2 mmd:col-span-3">
              <div className="grid grid-cols-2 xs:grid-cols-3 mmd:grid-cols-6 xxs:gap-5 gap-0 bg-gray-200 py-2 px-4">
                <p className="col-span-2 mmd:col-span-3 uppercase text-12">
                  product
                </p>
                <p className="uppercase text-12 mmd:justify-self-auto justify-self-end xs:block hidden">
                  price
                </p>
                <p className="uppercase text-12 hidden mmd:block">quantity</p>
                <p className="uppercase text-12 hidden mmd:block">total</p>
              </div>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 xs:grid-cols-3 mmd:grid-cols-6 gap-5"
                >
                  <div className=" xs:flex gap-4 col-span-2 mmd:col-span-3 ">
                    <div className="relative p-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full xs:w-25 xs:w-30  xs:h-20 xs:h-30 rounded-md object-cover"
                      />
                      <button
                        className="w-8 h-8  bg-slate-200 text-lg active:scale-90 mytransition flex justify-center items-center rounded-full cursor-pointer absolute top-0 right-0 hover:bg-slate hover:text-white mytransition"
                        onClick={() => handleDeleteConfirmation(index, item)}
                      >
                        <IoCloseOutline className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-2">
                      <h1 className="text-xl font-black">{item.name}</h1>
                      <p className="capitalize text-sm">
                        Category : {item.category}
                      </p>
                      <p className="text-sm">Size: {item.size} </p>
                      <p className="text-sm">Date Added: {item.date} </p>
                    </div>
                  </div>
                  <div className=" grid grid-cols-1 gap-3 xxs:grid-cols-3 xs:grid-cols-1 mmd:grid-cols-3 col-span-1 mmd:col-span-3 mmd:justify-self-auto xs:justify-self-end   xs:items-start items-center  ">
                    <p className="text-sm">${item.price}</p>
                    {/* counter  */}
                    <div className=" flex gap-2 h-8 items-center">
                      <button
                        className="mmd:h-8 h-6 mmd:w-8 w-6 bg-slate-200 text-lg active:scale-90 mytransition flex justify-center items-center rounded-full cursor-pointer"
                        onClick={() =>
                          updateCartItemQuantity(index, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <button className="flex">{item.quantity}</button>
                      <button
                        className="mmd:h-8 h-6 mmd:w-8 w-6 bg-slate-200 text-lg active:scale-90 mytransition flex justify-center items-center rounded-full cursor-pointer"
                        onClick={() =>
                          updateCartItemQuantity(index, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className="text-lg font-black xxs:col-auto col-span-2 xxs:border-none border-y xxs:w-auto w-full xxs:text-left text-center xxs:py-0 py-2 ">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* summary  */}
            <div className="space-y-5">
              <h1 className="text-2xl font-black">Cart Summary</h1>
              <div className="space-y-4">
                {cartItems.map((summaryItem, index) => (
                  <div
                    key={index}
                    className="space-y-3 border-b border-slate-200 "
                  >
                    <img
                      src={summaryItem.image}
                      alt={summaryItem.name}
                      className="w-25 h-25 rounded-md object-cover"
                    />
                    <h1 className="text-xl font-black">{summaryItem.name}</h1>
                  </div>
                ))}

                <div className="space-y-3">
                  <p>SubTotal : ${totalPrice.toFixed(2)}</p>
                  <p>Shipping: ${shippingCharges.toFixed(2)}</p>
                  <p className="py-3 border-t border-b border-slate flex justify-between font-black">
                    <span>Total Price:</span> $
                    {totalPriceWithShipping.toFixed(2)}
                  </p>
                </div>
                <div onClick={handleCheckout}>
                  <Button btnContent={"Checkout"} />
                </div>
              </div>
            </div>
          </div>
        )}

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={modalTitle}
          message={modalMessage}
          productName={productName}
          action={action} // Pass the action state
        />
      </div>
    </section>
  );
};

export default Cart;