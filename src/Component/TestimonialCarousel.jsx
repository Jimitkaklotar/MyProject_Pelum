import { useState , useEffect } from "react";
import Bio1 from "../assets/Bio1.png";
import Bio2 from "../assets/Bio2.png";
import Bio3 from "../assets/Bio3.png";
import StarLike from "../assets/star_like.png";

import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Sara Victoria",
    location: "Los Angeles, California",
    image: Bio1,
    feedback:
      "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu.",
  },
  {
    name: "Jhon Doe",
    location: "Los Angeles, California",
    image: Bio2,
    feedback:
      "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu.",
  },
  {
    name: "Lory Jain",
    location: "Los Angeles, California",
    image: Bio3,
    feedback:
      "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu.",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="testimonial" data-aos="zoom-out" data-aos-duration="1500" className="w-full max-w-4xl mx-auto text-center py-10">
      {/* Title */}
      <span className="bg-blue-200 text-blue-700 text-sm font-semibold px-10 py-2 rounded-md">
        TESTIMONIAL
      </span>
      <h2 className="text-4xl font-bold mt-5">Customers Reviews</h2>

      {/* Carousel Container */}
      <div className="relative w-full h-[300px] flex justify-center items-center overflow-hidden my-10">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`absolute w-full max-w-md p-6 bg-blue-100 rounded-lg shadow-lg text-center transform transition-all duration-700 ${
              index === activeIndex
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="flex justify-center">
              <img src={StarLike} alt="Star Like" className="w-10 h-10" />
            </div>
            <p className="text-gray-700 font-medium mt-4">{item.feedback}</p>
            <div className="mt-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto border-4 border-white shadow-lg"
              />
              <h4 className="font-bold mt-2">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
        >
          ▶
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
              index === activeIndex ? "bg-blue-600 scale-125" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
