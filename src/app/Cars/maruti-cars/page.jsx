// app/car-listing/page.jsx (App Router)
import CarCard from "@/components/CarCard";

const cars = [
  {
    name: "Maruti Brezza",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80", // Place inside /public/images/
    mileage: "17-25",
    power: "87-102",
    price: "10.47 Lakh",
    rating: 4.5,
    reviews: 871,
  },
  {
    name: "Maruti Fronx",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-111.jpeg?isig=0&q=80",
    mileage: "20-28",
    power: "76-99",
    price: "9.09 Lakh",
    rating: 4.6,
    reviews: 748,
  },
  {
    name: "Maruti Dzire",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/170173/dzire-exterior-right-front-three-quarter-27.jpeg?isig=0&q=80",
    mileage: "24-33",
    power: "69-80",
    price: "7.49 Lakh",
    rating: 4.7,
    reviews: 287,
  },
    {
    name: "Maruti Brezza",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80", // Place inside /public/images/
    mileage: "17-25",
    power: "87-102",
    price: "10.47 Lakh",
    rating: 4.5,
    reviews: 871,
  },
  {
    name: "Maruti Fronx",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-111.jpeg?isig=0&q=80",
    mileage: "20-28",
    power: "76-99",
    price: "9.09 Lakh",
    rating: 4.6,
    reviews: 748,
  },
  {
    name: "Maruti Dzire",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/170173/dzire-exterior-right-front-three-quarter-27.jpeg?isig=0&q=80",
    mileage: "24-33",
    power: "69-80",
    price: "7.49 Lakh",
    rating: 4.7,
    reviews: 287,
  },
    {
    name: "Maruti Brezza",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80", // Place inside /public/images/
    mileage: "17-25",
    power: "87-102",
    price: "10.47 Lakh",
    rating: 4.5,
    reviews: 871,
  },
  {
    name: "Maruti Fronx",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-111.jpeg?isig=0&q=80",
    mileage: "20-28",
    power: "76-99",
    price: "9.09 Lakh",
    rating: 4.6,
    reviews: 748,
  },
  {
    name: "Maruti Dzire",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/170173/dzire-exterior-right-front-three-quarter-27.jpeg?isig=0&q=80",
    mileage: "24-33",
    power: "69-80",
    price: "7.49 Lakh",
    rating: 4.7,
    reviews: 287,
  },
    {
    name: "Maruti Brezza",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80", // Place inside /public/images/
    mileage: "17-25",
    power: "87-102",
    price: "10.47 Lakh",
    rating: 4.5,
    reviews: 871,
  },
  {
    name: "Maruti Fronx",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-111.jpeg?isig=0&q=80",
    mileage: "20-28",
    power: "76-99",
    price: "9.09 Lakh",
    rating: 4.6,
    reviews: 748,
  },
  {
    name: "Maruti Dzire",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/170173/dzire-exterior-right-front-three-quarter-27.jpeg?isig=0&q=80",
    mileage: "24-33",
    power: "69-80",
    price: "7.49 Lakh",
    rating: 4.7,
    reviews: 287,
  },
];

export default function page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Maruti Car Models</h1>
      {cars.map((car, idx) => (
        <CarCard key={`${car.name}-${idx}`} {...car} />
      ))}
    </div>
  );
}


