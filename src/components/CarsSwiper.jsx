"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CarsSwiper = ({ title, tabs, data }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const filteredData = data[activeTab] || [];

  return (
    <div className="px-4 md:px-20 py-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {/* Tabs */}
      <div className="mb-4 flex space-x-6">
        {tabs.map((tab) => (
          <span
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`cursor-pointer pb-1 border-b-2 ${
              activeTab === tab.key
                ? "text-green-600 font-semibold border-green-600"
                : "text-gray-500 border-transparent"
            }`}
          >
            {tab.label}
          </span>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4 },
        }}
      >
        {filteredData.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white">
              <img src={car.img} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{car.name}</h3>
                <p className="text-gray-600">{car.price}</p>
                <p className="text-sm text-gray-500">{car.date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4 text-blue-600 font-medium">
        <a href="#">All Upcoming Cars &rarr;</a>
      </div>
    </div>
  );
};

export default CarsSwiper;
