"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ For redirect
import Usedcars from "@/components/usedcars";

const cities = ["Mumbai", "Bangalore", "Delhi", "Pune", "Navi Mumbai"];

const Home = () => {
  const [activeTab, setActiveTab] = useState("Used");
  const [city, setCity] = useState("Hyderabad");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    router.push(`/search?q=${encodeURIComponent(searchQuery)}&city=${encodeURIComponent(city)}&type=${activeTab}`);
  };

  return (
    <div>
      <div className="relative w-full">
        {/* Hero Banner */}
        <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
          <Image
            src="/EV.webp"
            alt="Mahindra Banner"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute right-5 bottom-5 bg-gray-800 text-white px-4 py-3 rounded-md shadow-lg z-10">
            <p className="text-sm">Buying a New Car?</p>
            <p className="font-bold text-lg">9848898488</p>
            <p className="text-xs">(Toll free)</p>
          </div>
        </div>

        {/* Search Box */}
        <div className="absolute -bottom-48 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl bg-white rounded-xl shadow-xl p-6 z-20">
          <h2 className="text-xl font-semibold mb-4">Find Your Right Car</h2>

          {/* Tab Selector */}
          <div className="flex items-center mb-4 gap-2">
            <button
              className={`px-4 py-2 rounded-full text-sm border ${
                activeTab === "New" ? "bg-gray-200 font-semibold" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("New")}
            >
              New
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm border ${
                activeTab === "Used" ? "bg-green-100 text-green-800 font-semibold" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("Used")}
            >
              Used
            </button>

            <span className="ml-auto text-gray-500 text-sm">
              {activeTab === "Used" ? "View Used Cars in" : "Explore New Cars in"}
            </span>
            <div className="relative">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border border-gray-300 px-3 py-1 rounded-md text-sm"
              />
            </div>
          </div>

          {/* Search Input */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder={`Search ${activeTab} cars in ${city}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-sm focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-red-500 px-4 py-2 text-white text-lg font-bold"
            >
              →
            </button>
          </div>

          {/* City Links */}
          <div className="flex flex-wrap gap-3 mt-4 text-sm">
            <span className="text-gray-600">Buy Used Cars in</span>
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className="bg-gray-100 px-3 py-1 rounded-full hover:bg-red-100 hover:text-red-600"
              >
                {c}
              </button>
            ))}
            <button className="text-blue-600 ml-auto hover:underline">Sell Car</button>
            <button className="text-blue-600 hover:underline">Check Car Valuation</button>
          </div>
        </div>
      </div>

      <div className="mt-56">
        <Usedcars />
      </div>
    </div>
  );
};

export default Home;
