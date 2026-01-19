import React from 'react'
import { useEffect } from 'react';

import GoOutProduct from "../assets/goout_background.png"

import AOS from "aos";
import "aos/dist/aos.css";

const GoOutPhoto = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="zoom-in" data-aos-duration="1500" className="my-12" >
        <img src={GoOutProduct} alt="" className="w-full" />
    </div>
  )
}

export default GoOutPhoto