"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const carBrands = [
  {
    name: "Maruti",
    logo: "https://www.citypng.com/public/uploads/preview/suzuki-black-logo-transparent-png-70175169477316889qlbzgncs.png",
    link: "/Cars/maruti-cars",
  },
  {
    name: "Hyundai",
    logo: "https://imgd.aeplcdn.com/0x0/cw/brands/logos/hyundai.png",
    link: "/Cars/Hyundai-cars",
  },
  {
    name: "Tata",
    logo: "https://imgd.aeplcdn.com/0x0/cw/brands/logos/tata.png",
    link: "/Cars/Tata-cars",
  },
  {
    name: "Mahindra",
    logo: "https://imgd.aeplcdn.com/0x0/cw/brands/logos/mahindra.png",
    link: "/Cars/mahindra",
  },
  {
    name: "Kia",
    logo: "https://imgd.aeplcdn.com/0x0/cw/brands/logos/kia.png",
    link: "/Cars/Kia",
  },
  {
    name: "Toyota",
    logo: "https://imgd.aeplcdn.com/0x0/cw/brands/logos/toyota.png",
    link: "/Cars/Toyota-cars",
  },
  {
    name: "Honda",
    logo: "https://imgd.aeplcdn.com/0x0/cw/brands/logos/honda.png",
    link: "/Cars/Honda-cars",
  },
  {
    name: "Renault",
    logo: "https://imgd.aeplcdn.com/0x0/cw/brands/logos/renault.png",
    link: "/Cars/Renault-cars",
  },
  {
    name: "Volkswagen",
    logo: "https://imgd.aeplcdn.com/0x0/cw/brands/logos/volkswagen.png",
    link: "/Cars/Volkswagen-cars",
  },
  {
    name: "Skoda",
    logo: "https://imgd.aeplcdn.com/0x0/cw/brands/logos/skoda.png",
    link: "/Cars/Skoda-cars",
  },
  {
    name: "Nissan",
    logo: "https://imgd.aeplcdn.com/0x0/cw/brands/logos/nissan.png",
    link: "/Cars/Nissan-cars",
  },
];

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Main Nav */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-red-600">Car wala</h1>
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
          <li><a href="/" className="hover:text-red-500 transition">Buy</a></li>
          <li><a href="/" className="hover:text-red-500 transition">Sell</a></li>
          <li><a href="/" className="hover:text-red-500 transition">Offers</a></li>
          <li><a href="/" className="hover:text-red-500 transition">Contact</a></li>
        </ul>
      </div>

      {/* Brand Logos */}
      {isClient && (
        <div className="overflow-x-auto border-t border-gray-200 bg-gray-50">
          <div className="flex gap-6 px-4 py-3 w-max sm:px-8">
            {carBrands.map((brand, index) => (
              <Link
                key={index}
                href={brand.link}
                className="flex flex-col items-center justify-center min-w-[80px] text-center text-sm text-gray-700 hover:text-red-500 transition duration-200"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={40}
                  height={40}
                  className="object-contain mb-1 hover:scale-110 transition duration-300"
                />
                <span>{brand.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

