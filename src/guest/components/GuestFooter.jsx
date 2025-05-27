import { FaTiktok } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa"; 
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import LogoSedap from "./LogoSedap";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-16 w-full">
      <div className="px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          
          {/* Branding */}
          <div>
            <div className="flex items-center mb-6">
              <LogoSedap />
            </div>
            <h2 className="font-poppins-extrabold text-[55px] leading-tight mb-6">
              The Best <br /> Restaurants <br /> In Your Home
            </h2>
            <p className="text-gray-300 font-poppins leading-relaxed">
              Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor lacus luctus
              accumsan tortor posuere. Tempus egestas sed sed risus pretium quam.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-400 font-poppins-extrabold">MENU</h3>
            <ul className="space-y-4 text-lg text-gray-300">
              <li><a href="#" className="hover:text-white transition font-poppins">Home</a></li>
              <li><a href="#" className="hover:text-white transition font-poppins">About Us</a></li>
              <li><a href="#" className="hover:text-white transition font-poppins">Restaurants</a></li>
              <li><a href="#" className="hover:text-white transition font-poppins">Contacts</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-400 font-poppins-extrabold">CONTACTS</h3>
            <address className="not-italic text-gray-300 font-poppins space-y-4 mb-6">
              <p>1717 Harrison St, San Francisco, CA 94103, United States</p>
              <p className="flex items-center space-x-2">
                <FaEnvelope className="text-black" />
                <span>sedap@mail.net</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaPhone className="text-black" />
                <span>+1 425 326 16 27</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaInstagram className="text-black" />
                <span>@sedap.banget</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaTiktok className="text-black" />
                <span>@sedap.banget</span>
              </p>
            </address>

            {/* Partners Section */}
            <div>
                <h4 className="text-xl font-bold mb-6 text-gray-400 font-poppins-extrabold">Partner</h4>
                <div className="grid grid-cols-2 gap-4">
                {[1, 2].map((num) => (
                    <div 
                    key={num}
                    className="h-28 bg-green-800 p-4 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
                    >
                    <img 
                        src={`/img/partner${num}.png`} 
                        alt={`Partner ${num}`} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    </div>
                ))}
                </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-16 pt-6 flex flex-col md:flex-row justify-between 
        items-center text-sm text-gray-400 font-poppins">
          <p>Copyright © 2022. Quickeat. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
