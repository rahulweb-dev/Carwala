"use client";
import React, { useState } from "react";
import Image from "next/image";

const brands = [
  { name: "Tata", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=80" },
  { name: "Maruti Suzuki", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=80" },
  { name: "Mahindra", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/9/brands/logos/mahindra.jpg?v=1629973668273&q=80" },
  { name: "Hyundai", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=80" },
  { name: "Toyota", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/toyota.jpg?v=1630055705330&q=80" },
  { name: "Kia", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/70/brands/logos/kia.jpg?v=1630057189593&q=80" },
  { name: "BMW", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=80" },
  { name: "Skoda", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/15/brands/logos/skoda1681982956420.jpg?v=1681982956529&q=80" },
  { name: "Mercedes-Benz", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/11/brands/logos/mercedes-benz.jpg?v=1629973270530&q=80" },
  { name: "MG", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/72/brands/logos/mg.jpg?v=1631163895654&q=80" },
  { name: "Volkswagen", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/20/brands/logos/volkswagen.jpg?v=1630056096439&q=80" },
  { name: "Land Rover", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/23/brands/logos/land-rover1647236056893.jpg?v=1647236057234&q=80" },

  // Add more brands below this line
  { name: "Honda", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/7/brands/logos/honda.jpg?v=1630056209549&q=80" },
  { name: "Renault", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/45/brands/logos/renault.jpg?v=1630057266767&q=80" },
  { name: "Jeep", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/43/brands/logos/jeep.jpg?v=1631163646486&q=80" },
  { name: "Audi", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/18/brands/logos/audi.jpg?v=1630055874070&q=80" },
   { name: "Nissan", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/21/brands/logos/nissan.jpg?v=1631163973143&q=80" },
  { name: "Citrogen", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/74/brands/logos/citroen1649763818937.jpg?v=1649763819072&q=80" },
  { name: "BYD", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/111/brands/logos/byd1650348943682.jpg?v=1650348943775&q=80" },
  { name: "Volvo", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/37/brands/logos/volvo.jpg?v=1641478299001&q=80" },
   { name: "Porsche", logo: "https://imgd.aeplcdn.com/0X0/n/cw/ec/19/brands/logos/porsche.jpg?v=1631164048727&q=80" },
  { name: "Lexsus", logo: "https://imgd.aeplcdn.com/0X0/cw/brands/logos/lexus.png?v=10&q=80" },

];

const BrandGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleBrands = showAll ? brands : brands.slice(0, 12);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">All Brands</h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 bg-white p-6 rounded-2xl shadow">
        {visibleBrands.map((brand, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={50}
              height={50}
              className="object-contain"
            />
            <p className="text-sm mt-2 text-center">{brand.name}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 font-medium hover:underline"
        >
          {showAll ? "Show Less" : "View More Brands"}
        </button>
      </div>
    </div>
  );
};

export default BrandGrid;
