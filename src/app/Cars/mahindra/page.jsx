// app/car-listing/page.jsx
import CarCard from "@/components/CarCard";

const cars = [
  {
    name: "Mahindra Thar",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/41145/thar-exterior-right-front-three-quarter-61.jpeg?isig=0&q=80",
    mileage: "15-16 kmpl",
    power: "130-150 bhp",
    price: "₹11.35 Lakh",
    rating: 4.8,
    reviews: 1452,
  },
  {
    name: "Mahindra Scorpio-N",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/128339/scorpio-n-exterior-right-front-three-quarter-49.jpeg?isig=0&q=80",
    mileage: "14-18 kmpl",
    power: "132-175 bhp",
    price: "₹13.60 Lakh",
    rating: 4.7,
    reviews: 1103,
  },
  {
    name: "Mahindra XUV700",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/39085/xuv700-exterior-right-front-three-quarter-56.jpeg?isig=0&q=80",
    mileage: "16-18 kmpl",
    power: "155-200 bhp",
    price: "₹14.00 Lakh",
    rating: 4.9,
    reviews: 1784,
  },
  {
    name: "Mahindra Bolero",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/52033/bolero-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    mileage: "16-17 kmpl",
    power: "75 bhp",
    price: "₹9.90 Lakh",
    rating: 4.4,
    reviews: 875,
  },
  {
    name: "Mahindra XUV300",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/40901/xuv300-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    mileage: "18-20 kmpl",
    power: "110-130 bhp",
    price: "₹9.10 Lakh",
    rating: 4.5,
    reviews: 692,
  },
  {
    name: "Mahindra Marazzo",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/33409/marazzo-exterior-right-front-three-quarter-65.jpeg?isig=0&q=80",
    mileage: "17.3 kmpl",
    power: "122 bhp",
    price: "₹14.10 Lakh",
    rating: 4.2,
    reviews: 315,
  }
];


export default function page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Mahindra Car Models</h1>
      {cars.map((car, idx) => (
       <CarCard key={`${car.name}-${idx}`} {...car} />
      ))}
    </div>
  );
}
