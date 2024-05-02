"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SkillData } from "@/Constant/skills";

export default function Certifications() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 my-40">
      <p className=" text-lg sm:text-xl font-['Poppins'] text-start">
        Certifications
      </p>
      <div className="flex mt-2">
        <div className="border border-b border-3 border-blue-500 bg-blue-500 rounded-l-full w-2/3 h-2 sm:h-3"></div>
        <div className="border border-b border-3 border-blue-500 bg-yellow-300 rounded-r-full w-1/3 h-2 sm:h-3"></div>
      </div>
      <div className="my-32  max-w-screen-xl mx-auto slider-container px-5">
        <Slider {...settings}>
          {SkillData.map((item, index) => (
            <div key={item.key} className="">
              <img
                src={item.img}
                alt={item.alt}
                className="flex mx-auto max-w-72 "
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
