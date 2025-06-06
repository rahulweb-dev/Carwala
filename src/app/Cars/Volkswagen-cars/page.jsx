// app/car-listing/page.jsx
import CarCard from "@/components/CarCard";

const cars = [
  {
    name: "Volkswagen Virtus",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/125845/virtus-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    mileage: "18-20 kmpl",
    power: "113 - 148 bhp",
    price: "₹11.56 Lakh",
    rating: 4.5,
    reviews: 732,
  },
  {
    name: "Volkswagen Taigun",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/125841/taigun-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    mileage: "18-19 kmpl",
    power: "113 - 147 bhp",
    price: "₹11.70 Lakh",
    rating: 4.6,
    reviews: 861,
  },
  {
    name: "Volkswagen Tiguan",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/123197/tiguan-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    mileage: "12.65 kmpl",
    power: "187 bhp",
    price: "₹35.17 Lakh",
    rating: 4.3,
    reviews: 298,
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
