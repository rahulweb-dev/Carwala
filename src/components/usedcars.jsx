"use client";
import React, { useState } from "react";
import Image from "next/image";
import BrandGrid from "./BrandGrid";
import CarsSwiper from "./CarsSwiper";

const city = "Hyderabad";

const popularCars = [
  {
    name: "Maruti Suzuki Swift",
    price: "1.02 Lakh",
    city: "Bangalore",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80",
  },
  {
    name: "Hyundai Creta",
    price: "6.98 Lakh",
    city: "Bangalore",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
  },
  {
    name: "Tata Nexon",
    price: "5.45 Lakh",
    city: "Bangalore",
    img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80",
  },
];

const budgetCars = [
  {
    name: "Tata Nexon",
    price: "Rs. 9.56 - 19.09 Lakh",
    min: 9.56,
    max: 19.09,
    img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80",
  },
  {
    name: "Tata Altroz",
    price: "Rs. 8.32 - 14.22 Lakh",
    min: 8.32,
    max: 14.22,
    img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
  },
  {
    name: "Maruti Fronx",
    price: "Rs. 9.09 - 16.06 Lakh",
    min: 9.09,
    max: 16.06,
    img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-111.jpeg?isig=0&q=80",
  },
  {
    name: "Skoda Kylaq",
    price: "Rs. 10.03 - 17.31 Lakh",
    min: 10.03,
    max: 17.31,
    img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
  },
  {
    name: "Hyundai Tucson",
    price: "Rs. 29.99 - 35.34 Lakh",
    min: 29.99,
    max: 35.34,
    img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
  },
  {
    name: "BMW X1",
    price: "Rs. 49.50 - 52.50 Lakh",
    min: 49.5,
    max: 52.5,
    img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
  },
];

const carTabs = [
  { key: "upcoming", label: "Upcoming Cars" },
  { key: "launched", label: "Just Launched Cars" },
];



const carTabs1 = [
  { key: "Electric", label: "Electric Cars" },
  { key: "Hybrid", label: "Hybrid Cars" },
  { key: "CNG", label: "CNG Cars" },
];
const carData = {
  upcoming: [
    {
      name: "MG Cyberster",
      price: "Rs. 60.00 - 70.00 Lakh",
      date: "Jun 2025 (Tentative)",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "MG M9 EV",
      price: "Rs. 60.00 - 70.00 Lakh",
      date: "Jul 2025",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "Kia Carens Clavis EV",
      price: "Rs. 22.00 - 26.00 Lakh",
      date: "Jul 2025 (Tentative)",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "Mahindra XEV 7e",
      price: "Rs. 21.00 - 30.00 Lakh",
      date: "Aug 2025 (Tentative)",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "MG Cyberster",
      price: "Rs. 60.00 - 70.00 Lakh",
      date: "Jun 2025 (Tentative)",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "MG M9 EV",
      price: "Rs. 60.00 - 70.00 Lakh",
      date: "Jul 2025",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "Kia Carens Clavis EV",
      price: "Rs. 22.00 - 26.00 Lakh",
      date: "Jul 2025 (Tentative)",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "Mahindra XEV 7e",
      price: "Rs. 21.00 - 30.00 Lakh",
      date: "Aug 2025 (Tentative)",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
  ],
  launched: [
    {
      name: "Tata Curvv EV",
      price: "Rs. 18.00 - 22.00 Lakh",
      date: "May 2025",
      img: "/images/curvv.png",
    },
    {
      name: "Hyundai Creta N Line",
      price: "Rs. 16.82 - 20.30 Lakh",
      date: "Apr 2025",
      img: "/images/creta-nline.png",
    },
  ],
};

const carData1 = {
  Electric: [
    {
      name: "MG Cyberster",
      price: "Rs. 60.00 - 70.00 Lakh",
      date: "Jun 2025 (Tentative)",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "MG M9 EV",
      price: "Rs. 60.00 - 70.00 Lakh",
      date: "Jul 2025",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "Kia Carens Clavis EV",
      price: "Rs. 22.00 - 26.00 Lakh",
      date: "Jul 2025 (Tentative)",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "Mahindra XEV 7e",
      price: "Rs. 21.00 - 30.00 Lakh",
      date: "Aug 2025 (Tentative)",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "MG Cyberster",
      price: "Rs. 60.00 - 70.00 Lakh",
      date: "Jun 2025 (Tentative)",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "MG M9 EV",
      price: "Rs. 60.00 - 70.00 Lakh",
      date: "Jul 2025",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "Kia Carens Clavis EV",
      price: "Rs. 22.00 - 26.00 Lakh",
      date: "Jul 2025 (Tentative)",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "Mahindra XEV 7e",
      price: "Rs. 21.00 - 30.00 Lakh",
      date: "Aug 2025 (Tentative)",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
  ],
  Hybrid: [
    {
      name: "Tata Curvv EV",
      price: "Rs. 18.00 - 22.00 Lakh",
      date: "May 2025",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "Hyundai Creta N Line",
      price: "Rs. 16.82 - 20.30 Lakh",
      date: "Apr 2025",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
  ],
   CNG: [
    {
      name: "Tata Curvv EV",
      price: "Rs. 18.00 - 22.00 Lakh",
      date: "May 2025",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    {
      name: "Hyundai Creta N Line",
      price: "Rs. 16.82 - 20.30 Lakh",
      date: "Apr 2025",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
  ],
};

const filters = [
  { label: "Cars Under 10 Lakh", min: 0, max: 10 },
  { label: "10 - 20 Lakh", min: 10, max: 20 },
  { label: "20 - 30 Lakh", min: 20, max: 30 },
  { label: "Luxury Cars", min: 30, max: Infinity },
];

const Usedcars = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const filteredCars = budgetCars.filter(
    (car) =>
      car.max >= activeFilter.min && car.min <= activeFilter.max
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-14">
      {/* Popular Used Cars */}
      <h2 className="text-2xl font-bold mb-4">Popular Used Cars in {city}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {popularCars.map((car, idx) => (
          <div key={idx} className="flex items-center p-4 border rounded-lg shadow-sm gap-4">
            <Image src={car.img} alt={car.name} width={120} height={60} />
            <div>
              <p className="font-semibold">Used {car.name}</p>
              <p className="text-sm text-gray-500">Rs. {car.price} <span className="text-xs">Onwards</span></p>
              <p className="text-sm mt-1">Explore in: <span className="px-2 py-1 bg-gray-100 rounded-full">{car.city}</span></p>
            </div>
          </div>
        ))}
      </div>

      {/* Cars by Budget */}
      <h2 className="text-2xl font-bold mb-4">Cars by Budget</h2>
      <div className="flex gap-6 mb-4 text-sm font-medium cursor-pointer">
        {filters.map((filter, idx) => (
          <span
            key={idx}
            onClick={() => setActiveFilter(filter)}
            className={`pb-1 ${
              activeFilter.label === filter.label
                ? "text-teal-600 border-b-2 border-teal-600"
                : "text-gray-600"
            }`}
          >
            {filter.label}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, idx) => (
            <div key={idx} className="p-4 border rounded-lg text-center shadow hover:shadow-md">
              <Image
                src={car.img}
                alt={car.name}
                width={150}
                height={100}
                className="mx-auto"
              />
              <h3 className="font-semibold mt-2">{car.name}</h3>
              <p className="text-sm text-gray-500">{car.price}</p>
              <button className="text-blue-600 mt-2 text-sm hover:underline">
                View Price Breakup
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No cars available in this price range.
          </p>
        )}
        
      </div>
      <BrandGrid/>
       <CarsSwiper title="Upcoming and Recently Launched Cars" tabs={carTabs} data={carData} />
       <CarsSwiper title="Top Cars In India" tabs={carTabs} data={carData} />

       <CarsSwiper title="Cars by Fuel Type" tabs={carTabs1} data={carData1} />
    </div>
  );
};

export default Usedcars;
