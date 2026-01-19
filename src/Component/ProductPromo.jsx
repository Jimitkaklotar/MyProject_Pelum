import React from "react";
import { useEffect } from "react";

import HeadphoneProduct from "../assets/black_headphone.png";

import AOS from "aos";
import "aos/dist/aos.css";

const ProductPromo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about" className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg max-w-6xl mx-auto">
      {/* Product Image */}
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="md:w-1/2 flex justify-center"
      >
        <img
          src={HeadphoneProduct} // Replace with actual image URL
          alt="Headphones"
          className="w-full max-w-xs md:max-w-md"
        />
      </div>

      {/* Product Details */}
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="md:w-1/2 mt-6 md:mt-0 md:ml-8 text-gray-800"
      >
        <span className="bg-blue-200 text-blue-700 text-sm font-semibold px-10 py-2 rounded-md">
          ABOUT PRODUCTS
        </span>
        <h2 className="text-3xl font-bold mt-6">
          Awesome digital product can make your life easier
        </h2>
        <div className="mt-3 w-20 h-1 bg-blue-600 rounded-md"></div>
        <p className="mt-6 text-gray-600">
          Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
          mauris sit amet orci.
        </p>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>

        {/* Features List */}
        <ul className="mt-6 space-y-2">
          <li className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-blue-600 text-xl">✔</span> Wireless Connection
            Headphones
          </li>
          <li className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-blue-600 text-xl">✔</span> High-quality audio
            with DSEE HX™ and LDAC.
          </li>
          <li className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-blue-600 text-xl">✔</span> Noise Cancelling
            without distractions.
          </li>
          <li className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-blue-600 text-xl">✔</span> Wireless freedom
            with BLUETOOTH
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductPromo;
