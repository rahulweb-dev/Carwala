// app/car-listing/page.jsx
import CarCard from "@/components/CarCard";
const cars = [
  {
    name: "Renault Kwid",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/134125/kwid-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    mileage: "22-23 kmpl",
    power: "67 bhp",
    price: "₹4.69 Lakh",
    rating: 4.3,
    reviews: 1187,
  },
  {
    name: "Renault Kiger",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/134137/kiger-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    mileage: "19-20 kmpl",
    power: "71-99 bhp",
    price: "₹6.59 Lakh",
    rating: 4.4,
    reviews: 924,
  },
  {
    name: "Renault Triber",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/134129/triber-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    mileage: "18-20 kmpl",
    power: "71 bhp",
    price: "₹6.33 Lakh",
    rating: 4.2,
    reviews: 839,
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
