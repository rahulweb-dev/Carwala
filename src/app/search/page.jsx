"use client";

import { useSearchParams } from "next/navigation";
import { carData,Hondacars } from "@/app/data/car"; // Adjust to your data location

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  const city = searchParams.get("city") || "";
  const type = searchParams.get("type") || "";

  const filtered = carData.filter((car) => {
    return (
      car.name.toLowerCase().includes(query) &&
      (city ? car.location?.toLowerCase() === city.toLowerCase() : true) &&
      (type ? car.type?.toLowerCase() === type.toLowerCase() : true)
    );
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Showing results for "{query}" in {city} ({type} cars)
      </h1>
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((car, idx) => (
            <div key={idx} className="border rounded p-4 shadow">
              <img src={car.image} alt={car.name} className="h-40 w-full object-cover mb-2" />
              <h2 className="font-semibold">{car.name}</h2>
              <p className="text-sm text-gray-600">{car.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No cars found matching your search.</p>
      )}
    </div>
  );
};

export default SearchResults;
