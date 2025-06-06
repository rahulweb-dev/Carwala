// app/car-listing/page.jsx
import CarCard from "@/components/CarCard";

const cars = [
  {
    name: "Tata Nexon",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80",
    mileage: "17-24",
    power: "113-120",
    price: "8.15 Lakh",
    rating: 4.6,
    reviews: 1020,
  },
  {
    name: "Tata Punch",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/39015/punch-exterior-right-front-three-quarter-57.jpeg?isig=0&q=80",
    mileage: "18-26",
    power: "86",
    price: "6.13 Lakh",
    rating: 4.5,
    reviews: 830,
  },
  {
    name: "Tata Tiago",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/39345/tiago-exterior-right-front-three-quarter-32.jpeg?isig=0&q=80",
    mileage: "19-26",
    power: "73-86",
    price: "5.65 Lakh",
    rating: 4.4,
    reviews: 612,
  },
  {
    name: "Tata Harrier EV",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/139585/harrier-ev-exterior-right-front-three-quarter-18.jpeg?isig=0&q=80",
    mileage: "14-16",
    power: "167",
    price: "15.49 Lakh",
    rating: 4.6,
    reviews: 490,
  },
  {
    name: "Tata Safari",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/138895/safari-facelift-exterior-right-front-three-quarter-39.jpeg?isig=0&q=80",
    mileage: "14-16",
    power: "167",
    price: "16.19 Lakh",
    rating: 4.5,
    reviews: 418,
  },
  {
    name: "Tata Altroz",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/137561/altroz-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    mileage: "18-23",
    power: "86-110",
    price: "6.64 Lakh",
    rating: 4.3,
    reviews: 530,
  },
  {
    name: "Tata Tigor",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/144437/tigor-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    mileage: "19-27",
    power: "73-86",
    price: "6.30 Lakh",
    rating: 4.2,
    reviews: 350,
  },
  {
    name: "Tata Nexon EV",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/141945/nexon-ev-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    mileage: "EV Range: 325–465 km",
    power: "127-143",
    price: "14.49 Lakh",
    rating: 4.7,
    reviews: 278,
  },
];

export default function page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Tata Car Models</h1>
      {cars.map((car, idx) => (
       <CarCard key={`${car.name}-${idx}`} {...car} />
      ))}
    </div>
  );
}
