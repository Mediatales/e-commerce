import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white pt-8">
      {/* Subscribe */}
      <div className="flex justify-center mb-6 px-4">
        <div className="w-full max-w-3xl">
          <div className="flex flex-col sm:flex-row items-center bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email Address"
              className="flex-1 px-4 py-3 text-sm text-gray-800 outline-none"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 w-full sm:w-auto">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6 py-8 text-sm">
        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="space-y-1">
            <li>Landing Page</li>
            <li>Popup Builder</li>
            <li>Web-design</li>
            <li>Content</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Use Cases</h4>
          <ul className="space-y-1">
            <li>Web-designers</li>
            <li>Marketers</li>
            <li>Small Business</li>
            <li>Website Builder</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-1">
            <li>Academy</li>
            <li>Blog</li>
            <li>Themes</li>
            <li>Hosting</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Teams</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow us</h4>
          <div className="flex space-x-4 mb-4">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterestP />
            <FaLinkedinIn />
          </div>
          <div className="text-sm">
            <p>Wocomeer Ave, Suite 700</p>
            <p>Chevy Chase, Maryland 20815</p>
            <p className="mt-2">support@fyra.com</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 text-xs border-t border-teal-800">
        © {new Date().getFullYear()} Fyra Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
