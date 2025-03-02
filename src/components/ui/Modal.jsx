import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoCheckmarkCircle, IoWarning } from "react-icons/io5";

const Modal = ({
  isOpen,
  onClose,
  title,
  message,
  productName,
  status,
  type = "notification", // Default to "notification" (add-to-cart), can be "confirmation" (checkout/delete)
  onConfirm, // Function to handle confirmation (only for "confirmation" type)
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-sm z-50 shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-6 w-11/12 max-w-md relative border border-slate-200"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <IoClose className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="text-center space-y-4">
              {/* Dynamic Icon and Heading Based on Status */}
              {status === "success" && (
                <>
                  <IoCheckmarkCircle className="w-12 h-12 text-green-500 mx-auto" />
                  <h2 className="text-2xl font-bold text-green-500">{title}</h2>
                </>
              )}
              {status === "error" && (
                <>
                  <IoWarning className="w-12 h-12 text-red-500 mx-auto" />
                  <h2 className="text-2xl font-bold text-red-500">{title}</h2>
                </>
              )}

              {/* Message */}
              <p className="text-gray-600">
                {message} <span className="font-semibold">{productName}</span>
              </p>

              {/* Confirmation Buttons (Only for "confirmation" type) */}
              {type === "confirmation" && (
                <div className="flex justify-center gap-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={onConfirm}
                    className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"
                  >
                    Confirm
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;