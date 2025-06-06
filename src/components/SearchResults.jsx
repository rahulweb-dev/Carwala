"use client";

import { useSearchParams } from "next/navigation";
import { carData } from "@/app/data/car"; // adjust the path if needed

const SearchResults = () => {
  const searchParams = useSearchParams();

  const query = searchParams.get("q")?.toLowerCase() || "";
  const city = searchParams.get("city")?.toLowerCase() || "";
  const type = searchParams.get("type")?.toLowerCase() || "";

  const filteredCars = carData.filter((car) => {
    const carNameMatch = car.name.toLowerCase().includes(query);
    const cityMatch = city ? car.location?.toLowerCase() === city : true;
    const typeMatch = type ? car.type?.toLowerCase() === type : true;
    return carNameMatch && cityMatch && typeMatch;
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Showing results
        {query && ` for "${query}"`}
        {city && ` in ${city}`}
        {type && ` (${type} cars)`}.
      </h1>

      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCars.map((car, index) => (
            <div key={index} className="border rounded p-4 shadow bg-white">
              <img
                src={car.image}
                alt={car.name}
                className="h-40 w-full object-cover mb-3 rounded"
              />
              <h2 className="font-semibold text-lg">{car.name}</h2>
              <p className="text-sm text-gray-600">{car.price}</p>
              <p className="text-sm text-gray-500 capitalize">{car.type} - {car.location}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No cars found matching your search.</p>
      )}
    </div>
  );
};

export default SearchResults;
