// app/car-listing/page.jsx
import CarCard from "@/components/CarCard";

const cars = [
  {
    name: "Toyota Fortuner",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/44773/fortuner-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    mileage: "10-14 kmpl",
    power: "163-201 bhp",
    price: "₹33.43 Lakh",
    rating: 4.7,
    reviews: 1528,
  },
  {
    name: "Toyota Innova Crysta",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/144515/innova-crysta-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    mileage: "14-15 kmpl",
    power: "148 bhp",
    price: "₹19.99 Lakh",
    rating: 4.6,
    reviews: 1142,
  },
  {
    name: "Toyota Glanza",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/144249/glanza-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    mileage: "22-30 kmpl",
    power: "88-89 bhp",
    price: "₹6.86 Lakh",
    rating: 4.5,
    reviews: 786,
  },
  {
    name: "Toyota Hyryder",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/141963/urban-cruiser-hyryder-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    mileage: "19-27 kmpl",
    power: "91-114 bhp",
    price: "₹11.14 Lakh",
    rating: 4.6,
    reviews: 894,
  },
  {
    name: "Toyota Rumion",
    image: "https://imgd.aeplcdn.com/227x128/n/cw/ec/144501/rumion-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    mileage: "20-26 kmpl",
    power: "87-102 bhp",
    price: "₹10.29 Lakh",
    rating: 4.3,
    reviews: 532,
  }
];

export default function page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Toyoto Car Models</h1>
      {cars.map((car, idx) => (
       <CarCard key={idx} {...car} />
      ))}
    </div>
  );
}
