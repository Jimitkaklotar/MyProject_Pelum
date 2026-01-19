import React from "react";
import { useEffect } from "react";

import PProduct1  from "../assets/p_product1.png";
import PProduct2  from "../assets/p_product2.png";
import PProduct3  from "../assets/p_product3.png";

import AOS from "aos";
import "aos/dist/aos.css";

const PopularProduct = () => {
    const categories = [
      { name: "Product1", img: PProduct1 },
      { name: "Product2", img: PProduct2 },
      { name: "Product3", img: PProduct3 },
    ];

    useEffect(() => {
      AOS.init();
    }, []);
  
    return (
      <section data-aos="zoom-in-down" data-aos-duration="1500" className="bg-gray-100 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <span className="bg-blue-200 text-blue-600 px-10 py-1 rounded-lg text-lg font-semibold">POPULAR</span>
          <h2 className="text-4xl font-bold my-10">Our Popular Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <img src={category.img} alt={category.name} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PopularProduct;