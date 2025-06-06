// app/car-listing/page.jsx
import CarCard from "@/components/CarCard";

const Hondacars = [
  {
    name: "Honda City",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/145251/city-exterior-right-front-three-quarter-15.jpeg?isig=0&q=80",
    mileage: "17-27 kmpl",
    power: "98-119 bhp",
    price: "₹12.08 Lakh",
    rating: 4.6,
    reviews: 1243,
  },
  {
    name: "Honda Amaze",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/145247/amaze-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    mileage: "18-25 kmpl",
    power: "88-98 bhp",
    price: "₹7.20 Lakh",
    rating: 4.4,
    reviews: 952,
  },
  {
    name: "Honda Elevate",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/144821/elevate-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    mileage: "15-16 kmpl",
    power: "119 bhp",
    price: "₹11.69 Lakh",
    rating: 4.5,
    reviews: 762,
  },
  {
    name: "Honda WR-V (Discontinued)",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/44993/wrv-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    mileage: "16-25 kmpl",
    power: "88-98 bhp",
    price: "₹9.00 Lakh",
    rating: 4.2,
    reviews: 638,
  },
  {
    name: "Honda City e:HEV (Hybrid)",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/122285/city-hybrid-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    mileage: "27 kmpl",
    power: "126 bhp",
    price: "₹19.04 Lakh",
    rating: 4.7,
    reviews: 584,
  }
];


export default function page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Hyundai Car Models</h1>
      {Hondacars.map((car, idx) => (
        <CarCard key={idx} {...car} />
      ))}
    </div>
  );
}
