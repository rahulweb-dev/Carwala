// app/car-listing/page.jsx
import CarCard from "@/components/CarCard";

const cars = [
  {
    name: "Kia Seltos",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/144153/seltos-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    mileage: "17-20 kmpl",
    power: "113-160 bhp",
    price: "₹10.90 Lakh",
    rating: 4.7,
    reviews: 1382,
  },
  {
    name: "Kia Sonet",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/144177/sonet-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    mileage: "18-24 kmpl",
    power: "82-120 bhp",
    price: "₹7.99 Lakh",
    rating: 4.6,
    reviews: 1255,
  },
  {
    name: "Kia Carens",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/142635/carens-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    mileage: "16-21 kmpl",
    power: "113-140 bhp",
    price: "₹10.45 Lakh",
    rating: 4.5,
    reviews: 980,
  },
  {
    name: "Kia EV6",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/144173/ev6-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    mileage: "528 km (range)",
    power: "229-325 bhp",
    price: "₹60.95 Lakh",
    rating: 4.8,
    reviews: 412,
  },
  {
    name: "Kia Carnival",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/39635/carnival-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    mileage: "13.9 kmpl",
    power: "200 bhp",
    price: "₹30.99 Lakh",
    rating: 4.4,
    reviews: 268,
  }
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
