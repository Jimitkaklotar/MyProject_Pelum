import React from "react";
import { useEffect } from "react";

import VideoBackground from "../assets/videocard_Background.png";
import Vector from "../assets/Vector.png";

import AOS from "aos";
import "aos/dist/aos.css";

const DemoVideoCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="zoom-in" data-aos-duration="1500" className="container mx-auto px-20 ">
      <div className="relative flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div
          className="absolute inset-0 bg-cover bg-center filter rounded-xl"
          style={{
            backgroundImage: `url(${VideoBackground})`,
          }}
        ></div>

        <div className="relative bg-white rounded-xl shadow-lg p-8 max-w-2xl text-center">
          <div className="flex justify-center mb-4">
            <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg flex justify-center">
              <img src={Vector} alt="" className="w-8" />
            </button>
          </div>
          <h2 className="text-lg font-bold mb-2">
            Best Product For You. Check The Demo Video.
          </h2>
          <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden my-4">
            <div className="bg-blue-500 h-full w-1/2"></div>
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio.
            Quisque volutpat mattis eros. Nulla malesuada erat ut turpis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoVideoCard;
