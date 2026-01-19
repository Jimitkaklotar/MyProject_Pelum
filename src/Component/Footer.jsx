import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#A6BDFA] text-black py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 text-white px-2 py-1 rounded rotate-[-20deg] text-xl font-bold mr-2">
              P
            </div>
            <h1 className="text-3xl font-bold">elum</h1>
          </div>
          <p className="text-sm font-semibold">
            "Thank you for exploring our website! We warmly invite you to discover our social media platforms, where you'll find valuable insights and updates tailored just for you."
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-bold text-lg mb-4">Services</h2>
          <ul className="space-y-2 font-bold">
            <li>Product Provider</li>
            <li>Product Range</li>
            <li>Free Delivery</li>
            <li>Proven Result</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h2 className="font-bold text-lg mb-4">Links</h2>
          <ul className="space-y-2 font-bold">
            <li>Home</li>
            <li>About Us</li>
            <li>Product</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="font-bold" >
          <h2 className="font-bold text-lg mb-4">Contacts</h2>
          <div className="flex items-center gap-2 mb-2">
            <SiGmail className="text-xl text-red-600" />
            <span className="text-sm">Infor@Example.Gmail.Com</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt />
            <span className="text-lg tracking-widest">+91 85858589696</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span className="text-lg tracking-widest">+91 96969636363</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
