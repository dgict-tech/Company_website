import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import dgict from '../assets/dgict-logo.png'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h1><img src={dgict} alt="" className="w-48"/></h1>
          <p className="text-gray-400 mt-6">
            We deliver cutting-edge digital solutions in web, mobile, blockchain, and UI/UX design.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#42b55e] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#works" className="hover:text-white transition">Works</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#42b55e] mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} DGICT. All rights reserved.
      </div>
    </footer>
  );
}
