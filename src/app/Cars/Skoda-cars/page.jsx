// app/car-listing/page.jsx
import CarCard from "@/components/CarCard";

const cars = [
  {
    name: "Skoda Slavia",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/124869/slavia-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    mileage: "18-20 kmpl",
    power: "113 - 148 bhp",
    price: "₹11.63 Lakh",
    rating: 4.5,
    reviews: 412,
  },
  {
    name: "Skoda Kushaq",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/124873/kushaq-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    mileage: "18-19 kmpl",
    power: "113 - 147 bhp",
    price: "₹11.99 Lakh",
    rating: 4.6,
    reviews: 539,
  },
  {
    name: "Skoda Superb",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/124891/superb-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    mileage: "15.1 kmpl",
    power: "188 bhp",
    price: "₹36.00 Lakh",
    rating: 4.7,
    reviews: 192,
  },
  {
    name: "Skoda Octavia",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/119235/octavia-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    mileage: "15.81 kmpl",
    power: "188 bhp",
    price: "₹27.34 Lakh",
    rating: 4.4,
    reviews: 264,
  },
  {
    name: "Skoda Kodiaq",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/117513/kodiaq-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    mileage: "13.32 kmpl",
    power: "187 bhp",
    price: "₹39.99 Lakh",
    rating: 4.5,
    reviews: 341,
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
