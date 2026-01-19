import React from "react";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Product1  from "../assets/product1.png";
import Product2  from "../assets/product2.png";
import Product3  from "../assets/product3.png";
import Product4  from "../assets/product4.png";

const Product = () => {
    const categories = [
      { name: "Product1", img: Product1 },
      { name: "Produc2", img: Product2 },
      { name: "Product3", img: Product3 },
      { name: "Product4", img: Product4 },
    ];

    useEffect(() => {
      AOS.init();
    }, []);
  
    return (
      <section data-aos="zoom-out" data-aos-duration="1500" className="bg-gray-100 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <span className="bg-blue-200 text-blue-600 px-10 py-1 rounded-lg text-lg font-semibold">PRODUCT</span>
          <h2 className="text-4xl font-bold my-10">Products Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
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
  
  export default Product;
