// app/car-listing/page.jsx
import CarCard from "@/components/CarCard";

const cars = [
  {
    name: "Nissan Magnite",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/44773/magnite-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    mileage: "17.4 - 20 kmpl",
    power: "71 - 99 bhp",
    price: "₹6.00 Lakh",
    rating: 4.4,
    reviews: 720,
  },
  {
    name: "Nissan Kicks",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/38921/kicks-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    mileage: "13 - 16.3 kmpl",
    power: "105 - 154 bhp",
    price: "₹9.50 Lakh",
    rating: 4.2,
    reviews: 484,
  },
  {
    name: "Nissan GT-R",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/40209/gtr-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    mileage: "9 kmpl",
    power: "562 bhp",
    price: "₹2.12 Crore",
    rating: 4.9,
    reviews: 104,
  },
  {
    name: "Nissan X-Trail (Upcoming)",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/145153/x-trail-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    mileage: "18 - 20 kmpl (expected)",
    power: "187 bhp (expected)",
    price: "₹35.00 Lakh (expected)",
    rating: 0,
    reviews: 0,
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
