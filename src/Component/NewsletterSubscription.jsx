import React from "react";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const NewsletterSubscription = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-col items-center justify-center py-10 px-5 bg-white w-full">
      <div className="bg-blue-200 text-blue-700 text-sm font-semibold px-10 py-2 rounded-lg mb-6">
        NEWSLETTER
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-3">
        Subscribe to get updates
      </h2>
      <div className="h-1 w-40 bg-blue-500 rounded-full mb-10"></div>
      <div className="relative flex flex-col md:flex-row items-center w-full max-w-md md:max-w-lg border border-gray-300 rounded-full overflow-hidden p-2">
        <div className="flex items-center w-full md:w-auto">
          <span className="px-4 text-blue-500 text-lg">📩</span>
          <input
            type="email"
            placeholder="Enter your email here"
            className="flex-1 p-3 text-gray-700 outline-none text-sm md:text-base w-full md:w-auto"
          />
        </div>
        <button className="bg-blue-500 text-white px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-blue-600 transition text-sm md:text-base w-full md:w-auto mt-2 md:mt-0">
          Subscribe now
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
