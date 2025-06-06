// app/car-listing/page.jsx
import CarCard from "@/components/CarCard";

const cars = [
  {
    name: "Hyundai Creta",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/106815/creta-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    mileage: "17-21",
    power: "113-160",
    price: "10.99 Lakh",
    rating: 4.6,
    reviews: 1203,
  },
  {
    name: "Hyundai Venue",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/141113/venue-exterior-right-front-three-quarter-16.jpeg?isig=0&q=80",
    mileage: "17-23",
    power: "83-120",
    price: "7.94 Lakh",
    rating: 4.5,
    reviews: 875,
  },
  {
    name: "Hyundai i20",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
    mileage: "19-21",
    power: "83-120",
    price: "7.04 Lakh",
    rating: 4.4,
    reviews: 643,
  },
  {
    name: "Hyundai Exter",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/157825/alcazar-facelift-exterior-right-front-three-quarter-10.jpeg?isig=0&q=80",
    mileage: "19-27",
    power: "82-83",
    price: "6.13 Lakh",
    rating: 4.3,
    reviews: 512,
  },
  {
    name: "Hyundai Verna",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/121943/verna-exterior-right-front-three-quarter-102.jpeg?isig=0&q=80",
    mileage: "18-20",
    power: "113-158",
    price: "11.00 Lakh",
    rating: 4.5,
    reviews: 758,
  },
  {
    name: "Hyundai Alcazar",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/157825/alcazar-facelift-exterior-right-front-three-quarter-10.jpeg?isig=0&q=80",
    mileage: "18-20",
    power: "113-160",
    price: "16.77 Lakh",
    rating: 4.4,
    reviews: 408,
  },
  {
    name: "Hyundai Tucson",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/106821/tucson-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
    mileage: "12-15",
    power: "156-187",
    price: "29.02 Lakh",
    rating: 4.7,
    reviews: 198,
  },
  {
    name: "Hyundai Creta",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/167017/creta-ev-exterior-right-front-three-quarter-14.jpeg?isig=0&q=80",
    mileage: "20-28",
    power: "69-83",
    price: "6.49 Lakh",
    rating: 4.2,
    reviews: 384,
  },
];

export default function page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Hyundai Car Models</h1>
      {cars.map((car, idx) => (
        <CarCard key={idx} {...car} />
      ))}
    </div>
  );
}
