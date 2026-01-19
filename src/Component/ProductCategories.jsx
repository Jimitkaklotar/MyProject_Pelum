import React from "react";

import { useEffect } from "react";

import Earbuds  from "../assets/Earbuds.png";
import Neckbands  from "../assets/Neckbands.png";
import Headphones  from "../assets/Headphones.png";
import Watches  from "../assets/Watches.png";
import Soundbars  from "../assets/Soundbars.png";
import WirelessSpeaker  from "../assets/WirelessSpeaker.png";

import AOS from "aos";
import "aos/dist/aos.css";

const ProductCategories = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    const categories = [
      { name: "Wireless Earbuds", img: Earbuds },
      { name: "Neckbands", img: Neckbands },
      { name: "Wireless Headphones", img: Headphones },
      { name: "Smart Watches", img: Watches },
      { name: "Soundbars", img: Soundbars },
      { name: "Wireless Speaker", img: WirelessSpeaker },
    ];
  
    return (
      <section id="product" data-aos="fade-up" data-aos-duration="1500" className="bg-gray-100 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <span className="bg-blue-200 text-blue-600 px-10 py-1 rounded-lg text-lg font-semibold">CATEGORIES</span>
          <h2 className="text-4xl font-bold my-10">Our Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-8">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <img src={category.img} alt={category.name} className="w-16 h-16 object-contain" />
                <p className="text-sm font-semibold">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductCategories;
  