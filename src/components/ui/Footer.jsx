import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img
              src="/logopng.png" // Replace with your logo path
              alt="Website Logo"
              className="w-32 h-auto"
            />
            <p className="text-sm text-gray-400">
              Step into style with our exclusive collection of shoes. Find the
              perfect pair for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-400 hover:text-white transition-all"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/shoes"
                  className="text-sm text-gray-400 hover:text-white transition-all"
                >
                  Shoes
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-white transition-all"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md bg-slate-700 text-white placeholder-gray-400 outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-tl from-orange-200 to-teal-200 text-slate py-2 px-4 rounded-md hover:bg-orange-600 transition-all cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center sm:text-left">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Shoes Website. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
