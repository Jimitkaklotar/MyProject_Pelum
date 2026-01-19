import React from "react";

import { useEffect } from "react";

import { FaMicrophone, FaMusic, FaVolumeUp, FaWifi } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const FeatureSection = () => {
  const features = [
    { icon: <FaMicrophone size={32} />, title: "Virtual Surround", description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet." },
    { icon: <FaMusic size={32} />, title: "Noise Cancelling", description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet." },
    { icon: <FaVolumeUp size={32} />, title: "Sound Control", description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet." },
    { icon: <FaWifi size={32} />, title: "Wireless Freedom", description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet." }
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="feature" data-aos="zoom-in" data-aos-duration="1500" className="container mx-auto py-12 md:px-20 bg-white text-center">
      <div className="text-blue-500 font-semibold uppercase bg-blue-100 inline-block px-10 py-1 rounded-lg text-lg">Feature</div>
      <h2 className="text-4xl font-bold text-gray-900 mt-10">Outstanding Features</h2>
      <div className="mt-5 mb-16 flex justify-center">
        <div className="w-70 h-1 bg-blue-500 rounded-full"></div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center bg-blue-500 text-white rounded-lg shadow-lg transform rotate-45">
              <div className="-rotate-45">{feature.icon}</div>
            </div>
            <h3 className="mt-10 font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 text-md mt-5 px-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
