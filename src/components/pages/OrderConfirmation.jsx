import { useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const OrderConfirmation = () => {
  const { state } = useLocation(); // Access order details passed from Checkout
  const orderDetails = state?.orderDetails;
const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-br from-orange-100 to-teal-200 min-h-screen flex items-center justify-center pt-15 px-5">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-6">
          Thank You for Your Order!
        </h1>
        <p className="text-sm sm:text-lg text-slate-700 mb-8">
          Your order has been placed successfully. Here are the details:
        </p>

        {/* Order Details */}
        <div className="space-y-4 text-left text-sm sm:text-lg">
          <p>
            <strong>Name:</strong> {orderDetails?.name}
          </p>
          <p>
            <strong>Email:</strong> {orderDetails?.email}
          </p>
          <p>
            <strong>Address:</strong> {orderDetails?.address}
          </p>
          <p>
            <strong>Contact Number:</strong> {orderDetails?.contactNumber}
          </p>
          <p>
            <strong>Total Price:</strong> ${orderDetails?.totalPrice.toFixed(2)}
          </p>
        </div>

        {/* Continue Shopping Button */}
        <div className="mt-10" onClick={() => navigate("/shoes")}>
          <Button btnContent={"Continue Shopping"}  />
        </div>
      </div>
    </section>
  );
};

export default OrderConfirmation;