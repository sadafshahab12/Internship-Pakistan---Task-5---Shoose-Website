import { useEffect } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - Ecommerce";
  }, []);
  return (
    <section className="bg-gradient-to-br from-orange-100 to-teal-200 py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-800 text-center mb-10">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="mt-1 p-3 w-full border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  className="mt-1 p-3 w-full border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="mt-1 p-3 w-full border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-orange-500" />
                  <p className="text-slate-700">
                    123 Shoe Street, Sneaker City, SC 12345
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-orange-500" />
                  <p className="text-slate-700">+1 (123) 456-7890</p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="w-6 h-6 text-orange-500" />
                  <p className="text-slate-700">info@shoewebsite.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Our Location
              </h2>
              <div className="overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8a32f7f8c8!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625072341456!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
