import React from "react";
import LogoSedap from "../components/LogoSedap"; // Gambar logo

export default function Header() {
  return (
    <header className="w-full fixed top-7 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <LogoSedap />
          </div>

          {/* Navbar */}
          <nav className="mx-10">
            <ul className="flex justify-center space-x-8">
              <li className="font-poppins text-[24px] hover:text-green-500">
                <a href="/">Home</a>
              </li>
              <li className="text-lg font-poppins text-[24px] hover:text-green-500">
                <a href="/about">About Us</a>
              </li>
              <li className="text-lg font-poppins text-[24px] hover:text-green-500">
                <a href="/restaurants">Restaurants</a>
              </li>
              <li className="text-lg font-poppins text-[24px] hover:text-green-500">
                <a href="/contact">Contacts</a>
              </li>
            </ul>
          </nav>

          {/* Cart & Auth Buttons */}
        <div className="flex items-center space-x-6">
            <div className="relative">
                <i className="fa-solid fa-bag-shopping text-xl text-gray-700"></i>
            </div>
            {/* Login Button */}
            <a
                href="/login"
                className="bg-green-500 text-white py-2 px-6 rounded-full font-poppins text-[24px] hover:bg-green-600 transition duration-300">
                Login
            </a>
            {/* Registrasi Button */}
            <a
                href="/register"
                className="bg-green-500 text-white py-2 px-6 rounded-full font-poppins text-[24px] hover:bg-blue-600 transition duration-300">
                Registrasi
            </a>
        </div>
        </div>
      </div>
    </header>
  );
}
