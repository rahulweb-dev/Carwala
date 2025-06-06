"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaApple,
  FaGooglePlay,
  FaTag,
  FaBalanceScale,
  FaMedal,
  FaCarSide,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white " >
      {/* Top Feature Bar */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-b">
        <div className="flex items-start gap-3">
          <FaMedal className="text-3xl mt-1" />
          <div>
            <p className="font-semibold">India’s #1</p>
            <p className="text-sm text-gray-500">Largest Auto portal</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FaCarSide className="text-3xl mt-1" />
          <div>
            <p className="font-semibold">Car Sold</p>
            <p className="text-sm text-gray-500">Every 4 minute</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FaTag className="text-3xl mt-1" />
          <div>
            <p className="font-semibold">Offers</p>
            <p className="text-sm text-gray-500">Stay updated pay less</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FaBalanceScale className="text-3xl mt-1" />
          <div>
            <p className="font-semibold">Compare</p>
            <p className="text-sm text-gray-500">Decode the right car</p>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div>
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm" >
        {/* About */}
        <div>
          <h4 className="font-semibold mb-3">ABOUT AUTOWEB</h4>
          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Careers With Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Corporate Policies</li>
            <li>Investors</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold mb-3">CONNECT WITH US</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Feedback</li>
            <li>Contact Us</li>
            <li>Advertise with Us</li>
            <li>Become Partner Dealer</li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h4 className="font-semibold mb-3">OTHERS</h4>
          <ul className="space-y-2 text-gray-400">
            <li>TrucksDekho</li>
            <li>TyreDekho</li>
            <li>TractorsDekho</li>
            <li>Girnar Vision Fund</li>
            <li>Emergency Response</li>
            <li>Car Sales Trends</li>
          </ul>
        </div>
      </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t py-4 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Broaddcast</p>
        <div className="flex gap-5 mt-2 md:mt-0">
          <FaFacebookF className="hover:text-black cursor-pointer" />
          <FaInstagram className="hover:text-black cursor-pointer" />
          <FaYoutube className="hover:text-black cursor-pointer" />
          <FaLinkedinIn className="hover:text-black cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
