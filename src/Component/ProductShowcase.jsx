import React from "react";
import { useEffect } from "react";

import Dj from "../assets/dj.png"
import Speaker from "../assets/speaker.png"

import AOS from "aos";
import "aos/dist/aos.css";

const ProductShowcase = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1500" className="bg-blue-100 py-10 my-16">
      <div className="max-w-4xl mx-auto text-center">
        <span className="bg-blue-300 text-blue-900 px-10 py-2 rounded-md font-medium">
          LETEST PRODUCTS
        </span>
        <h2 className="text-2xl md:text-4xl font-bold mt-6">
          We Have Lots of Excellent And High <br /> Quality Products.
        </h2>
        <div className="flex justify-center mt-3">
          <div className="w-16 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {/* Product 1 */}
        <div className="w-96">
          <img
            src={Dj} // Replace with actual image
            alt="Avant Bar Aura"
            className="w-full"
          />
        </div>

        <div className="w-96">
          <img
            src={Speaker} // Replace with actual image
            alt="Avant Bar Aura"
            className="w-full"
          />
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-5 space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default ProductShowcase;
