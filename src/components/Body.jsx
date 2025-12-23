import React from "react";
import foodData from "../utils/mock";
import FoodCard from "./FoodCard";
import { useState } from "react";


const Body = () => {

    const [cards, setCards] = useState(foodData)

  return (
    <div className="body">
      <div className="search-box">
        <input type="search" placeholder="Search Food" />{" "}
        <span>
          <i className="ri-search-line"></i>
        </span>
        <button
          className="filter"  onClick={()=>{
            let filteredCard = foodData.filter(item => item.rating>4)
            setCards(filteredCard)
          }}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="cards-container">
        {cards.map((item) => (
          <FoodCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
