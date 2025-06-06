// components/CarCard.jsx
import Image from "next/image";
import { Star } from "lucide-react";

const CarCard = ({ name, image, price, mileage, power, rating, reviews }) => {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300 flex items-start space-x-4">
      <Image src={image} alt={name} width={160} height={100} className="rounded-md" />
      <div className="flex flex-col justify-between">
        <h2 className="text-lg font-semibold mb-1">{name}</h2>
        <p className="text-sm text-gray-600">{mileage} kmpl | {power} bhp</p>
        <p className="text-md font-medium text-gray-800 mt-1">Rs. {price} <span className="text-sm text-gray-500">onwards</span></p>
        <p className="text-blue-600 text-sm font-semibold mt-1 cursor-pointer hover:underline">Get Best Offer</p>
        <div className="flex items-center mt-2 text-sm text-green-600 font-medium">
          <Star className="h-4 w-4 text-green-600 mr-1" fill="currentColor" />
          {rating}/5 &nbsp;<span className="text-gray-500">({reviews} Ratings)</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
