import React, { useEffect , useRef } from "react";

import HeroProductImage from "../assets/headphone.png";

import gsap from "gsap";

import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const words = ["Best", "&", "Smart", "Digital", "Products"];
    text.innerHTML = ""; // Clear original text

    words.forEach((word, index) => {
      const wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";
      wordSpan.style.overflow = "hidden";
      wordSpan.style.marginRight = "10px"; // Add spacing between words

      if (word === "Smart" || word === "Products") {
        wordSpan.className = "text-[#003366] font-bold"; // Style for colored words
      }

      word.split("").forEach((letter) => {
        const letterSpan = document.createElement("span");
        letterSpan.style.display = "inline-block";
        letterSpan.style.transform = "translateY(100%)";
        letterSpan.style.opacity = "0";
        letterSpan.textContent = letter;

        wordSpan.appendChild(letterSpan);
      });

      text.appendChild(wordSpan);
    });

    // Animate each letter
    gsap.to(text.querySelectorAll("span span"), {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.05, // Smooth staggered effect
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="home">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center min-h-screen flex items-center"
        style={{
          backgroundColor: "#4778f47c",
        }}
      >
        <div className="w-full px-6 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 xl:gap-20">
          {/* Text Content */}
          <div data-aos="fade-right" data-aos-duration="1500" className="p-5 xl:my-5">
            <div
              //   data-aos="fade-right"
              className="w-full max-w-xl text-center lg:text-left space-y-6"
            >
              <h1 ref={textRef} className="text-4xl sm:text-6xl font-bold leading-tight">
                {/* Best & Smart Digital Products */}
              </h1>
              <p className="mt-4 text-lg sm:text-xl">
                Donec nec justo eget felis facilisis fermentum. Aliquam
                porttitor mauris sit amet orci. Aenean dignissim pellentesque
                felis.
              </p>
              <button className="mt-6 w-48 bg-[#4777F4] text-white py-3 px-6 rounded-lg shadow-lg font-semibold transition cursor-pointer">
                BUY PRODUCTS
              </button>
            </div>
          </div>

          {/* Animation */}
          <div
            data-aos="fade-left" data-aos-duration="1500"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg flex justify-center"
          >
            <img src={HeroProductImage} alt="" className="w-72" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
