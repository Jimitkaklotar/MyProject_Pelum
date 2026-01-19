import React from "react";
import { useEffect } from "react";

import Location from "../assets/location.png";
import Phone from "../assets/phone.png";
import Mail from "../assets/mail.png";

import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="contact" className="flex flex-col items-center justify-center py-10 px-5 md:px-20">
      <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-col items-center justify-center">
        <span className="bg-blue-200 text-blue-600 px-6 py-2 rounded-md mb-4">
          CONTACT
        </span>
        <h2 className="text-3xl font-bold text-center mb-6">
          Let’s get in Touch
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        {/* Left side form */}
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="flex-1 space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Number"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <textarea
            placeholder="Write a mobile number"
            className="w-full p-3 border border-gray-300 rounded-md h-32"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
            Send message
          </button>
        </div>
        {/* Right side contact details */}
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="flex-1 space-y-4"
        >
          <div className="bg-blue-600 text-white p-4 rounded-md flex items-center gap-4">
            <div className="">
              <img src={Location} alt="Location" className="w-14" />
            </div>
            <div>
              <p className="font-semibold">Our Head office</p>
              <p>U . A . E</p>
            </div>
          </div>
          <div className="bg-blue-600 text-white p-4 rounded-md flex items-center gap-4">
            <div className="">
              <img src={Phone} alt="Phone" className="w-14" />
            </div>
            <div>
              <p className="font-semibold">Call Us On</p>
              <p>+91 99582585</p>
            </div>
          </div>
          <div className="bg-blue-600 text-white p-4 rounded-md flex items-center gap-4">
            <div className="">
              <img src={Mail} alt="Email" className="w-14" />
            </div>
            <div>
              <p className="font-semibold">E-mail Us On</p>
              <p>info@example.gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
