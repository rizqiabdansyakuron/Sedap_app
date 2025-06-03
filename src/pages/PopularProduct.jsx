import React from "react";
import { FaStar } from "react-icons/fa";
import ProdukUnggulan from "./ProdukUnggulan";

const destinations = [
  {
    src: "https://lh5.googleusercontent.com/wDwFrClpcgb4rvigLZAgnDu3K_sqlC7aTJ7T8dwd0OIATVLrlu8cJkHDXZBEaqxt_Q7WBIOSecAb8xEsqFrd7Dj5oZK3-2ECk57wNXPlJWUOpmxsN9DBIRjN94CLxUYu1hIBa6ap",
    type: "Noodle Dish",
    title: "Spicy Ramen Bowl",
    price: "$12",
    rating: 4.8,
    highlight: true,
  },
  {
    src: "https://www.example.com/classic-cheeseburger.jpg",
    type: "Burger",
    title: "Classic Cheeseburger",
    price: "$10",
    rating: 4.6,
  },
  {
    src: "https://example.com/sushi.jpg",
    type: "Japanese",
    title: "Sushi Platter Deluxe",
    price: "$18",
    rating: 4.9,
  },
  {
    src: "https://example.com/pizza.jpg",
    type: "Pizza",
    title: "Margherita Pizza",
    price: "$15",
    rating: 4.7,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  return (
    <div className="flex">
      {[...Array(5)].map((_, idx) => (
        <FaStar key={idx} className={idx < fullStars ? "text-red-500" : "text-gray-300"} />
      ))}
    </div>
  );
};

const PopularDestination = () => {
  return (
    <div className="px-6 lg:px-24 py-20 bg-white min-h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">Our Most Popular Foods</h2>
          <p className="text-gray-500 mt-2 text-sm lg:text-base max-w-xl">
            Discover our best-selling dishes, crafted with fresh ingredients and bold flavors!
          </p>
        </div>
        <button className="mt-4 lg:mt-0 border border-red-400 text-red-500 px-6 py-3 rounded-md hover:bg-red-500 hover:text-white transition">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {destinations.filter(d => d.highlight).map((food, idx) => (
          <div key={idx} className="relative rounded-2xl overflow-hidden shadow-lg h-[450px]">
            <img src={food.src} alt={food.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-end p-6 text-white bg-black/40">
              <p className="text-sm mb-1">{food.type}</p>
              <h3 className="text-2xl font-bold mb-2">{food.title}</h3>
              <div className="flex items-center gap-4">
                <span>{food.price}</span>
                <span className="flex items-center gap-1">
                  <StarRating rating={food.rating} /> {food.rating}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className="lg:col-span-2 flex flex-col gap-6">
          {destinations.filter(d => !d.highlight).map((food, idx) => (
            <div key={idx} className="flex bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition h-[140px]">
              <img src={food.src} alt={food.title} className="w-1/3 object-cover h-full" />
              <div className="p-4 flex flex-col justify-center w-2/3">
                <p className="text-sm text-red-500 font-semibold">{food.type}</p>
                <h4 className="text-lg font-bold text-gray-800">{food.title}</h4>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-gray-600 text-sm">{food.price}</span>
                  <span className="flex items-center gap-1 text-sm text-gray-600">
                    <StarRating rating={food.rating} /> {food.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Produk Unggulan di bawah */}
      <div className="mt-24">
        <ProdukUnggulan />
      </div>
    </div>
  );
};

export default PopularDestination;
