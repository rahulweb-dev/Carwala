"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const popularCities = [
  { name: "Mumbai", img: "/cities/mumbai.png" },
  { name: "Bangalore", img: "/cities/bangalore.png" },
  { name: "Delhi", img: "/cities/delhi.png" },
  { name: "Pune", img: "/cities/pune.png" },
  { name: "Navi Mumbai", img: "/cities/navi-mumbai.png" },
  { name: "Hyderabad", img: "/cities/hyderabad.png" },
  { name: "Ahmedabad", img: "/cities/ahmedabad.png" },
  { name: "Chennai", img: "/cities/chennai.png" },
  { name: "Kolkata", img: "/cities/kolkata.png" },
  { name: "Chandigarh", img: "/cities/chandigarh.png" },
];

const LocationPopup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [selectedCities, setSelectedCities] = useState([]);
  const [userCity, setUserCity] = useState("");

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
        );
        const data = await res.json();
        if (data?.address?.city || data?.address?.town) {
          const city = data.address.city || data.address.town;
          setUserCity(city);
          setSelectedCities([city]);
        }
      });
    }
  };

  const toggleCity = (city) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-[90%] max-w-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Select your City</h2>
          <button
            onClick={() => setShowPopup(false)}
            className="text-gray-600 hover:text-red-600 text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {selectedCities.map((city, idx) => (
            <div
              key={idx}
              className="bg-gray-200 px-3 py-1 rounded-full flex items-center gap-1"
            >
              {city}
              <button
                onClick={() => toggleCity(city)}
                className="text-sm"
              >
                &times;
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={detectLocation}
          className="text-blue-600 mb-4 hover:underline"
        >
          📍 Detect my location
        </button>

        <div>
          <h3 className="font-medium mb-2">Popular Cities</h3>
          <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-700">
            {popularCities.map((city, index) => (
              <button
                key={index}
                onClick={() => toggleCity(city.name)}
                className={`flex flex-col items-center p-2 border rounded-lg hover:text-red-500 transition ${
                  selectedCities.includes(city.name) ? "bg-gray-100 border-red-400" : "bg-white"
                }`}
              >
                <Image
                  src={city.img}
                  alt={city.name}
                  width={50}
                  height={50}
                  className="mb-2"
                />
                {city.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
