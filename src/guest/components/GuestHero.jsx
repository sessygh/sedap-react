import React from "react";
import photo1 from "/img/mkn1.jpg";
import photo2 from "/img/mkn2.jpeg";

export default function GuestHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Overlay agar teks tetap terlihat jelas */}
      <div className=" bg-white/80"></div>
      
      {/* Konten */}
      <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-between gap-10 relative z-20">
        {/* Kiri */}
        <div className="w-full md:w-[48%] space-y-6">
          <h1 className="font-poppins-extrabold text-[75px] leading-tight">
            The Best <br /> Restaurants <br /> In Your Home
          </h1>
          <p className="text-gray-600 text-lg font-poppins">
            Try and love it!
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <select className="px-4 py-2 rounded border border-gray-300 min-w-[200px] font-poppins">
              <option>Choose a Restaurant</option>
              <option>Choose a Restaurant 1</option>
              <option>Choose a Restaurant 2</option>
              <option>Choose a Restaurant 3</option>
            </select>
            <a
              href="#"
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded font-semibold font-poppins"
            >
              ORDER NOW
            </a>
          </div>
        </div>

        {/* Kanan */}
        <div className="w-full md:w-[48%] relative">
          <div className="relative">
            <img src={photo1} alt="man" className="w-full rounded-lg" />

            {/* Box bawah kiri */}
            <div className="absolute bottom-5 left-5 bg-white p-3 rounded-lg shadow flex items-center gap-3 w-[250px]">
              <img
                src={photo2}
                alt="img"
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <p className="text-xs text-gray-500 m-0 font-poppins">
                  Restaurant of the Month
                </p>
                <h6 className="font-bold font-poppins m-0">Sedap</h6>
                <div className="text-green-700">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>
                </div>
              </div>
            </div>

            {/* Box atas kanan */}
            <div className="absolute top-5 right-5 bg-white p-3 rounded-lg shadow flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-green-700"></i>
              <div>
                <h6 className="font-bold font-poppins m-0">10+ Menu</h6>
                <p className="text-xs font-poppins text-gray-500 m-0">In Your Home</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
