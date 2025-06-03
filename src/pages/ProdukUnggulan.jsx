import React from "react";
import "./ProdukUnggulan.css";


const produkUnggulan = [
  {
    title: "Spicy Ramen Bowl",
    img: "https://i.pinimg.com/736x/00/2b/c0/002bc0b61e57adc2a74021281c3b4bcd.jpg",
    size: "Large",
    ingredients: "Noodles, Egg, Pork, Chili",
    type: "Noodle Dish",
    price: "$12"
  },
  {
    title: "Teriyaki Chicken Set",
    img: "https://i.pinimg.com/736x/00/2b/c0/002bc0b61e57adc2a74021281c3b4bcd.jpg",
    size: "Regular",
    ingredients: "Chicken, Teriyaki Sauce, Rice, Salad",
    type: "Rice Dish",
    price: "$10"
  },
  {
    title: "Beef Udon Soup",
    img: "https://i.pinimg.com/736x/0c/5f/9b/0c5f9b5e34b666b48de9538077969f87.jpg",
    size: "Medium",
    ingredients: "Udon, Beef, Broth, Scallions",
    type: "Noodle Dish",
    price: "$11"
  },
  {
    title: "Classic Cheese Burger",
    img: "https://i.pinimg.com/736x/9f/43/6c/9f436cae7327fedb7375eb66f9b1c7c2.jpg",
    size: "Large",
    ingredients: "Beef, Cheese, Lettuce, Tomato",
    type: "Burger",
    price: "$13"
  }
];


const ProdukUnggulan = () => {
  return (
    <div className="produk-unggulan-container">
      <h2 className="judul">Menu Unggulan</h2>
      <div className="produk-grid flex justify-center px-30">
        {produkUnggulan.map((item, index) => (
          <div className="card " key={index}>
            <img src={item.img} alt={item.title} className="card-image" />
            <div className="card-overlay">
              <h3 className="card-title">{item.title}</h3>
              <ul className="card-info">
                <li>🍽️ Type: {item.type}</li>
                <li>📏 Size: {item.size}</li>
                <li>🥢 Ingredients: {item.ingredients}</li>
              </ul>
              <p className="card-price">{item.price} <span>/ serving</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdukUnggulan;
