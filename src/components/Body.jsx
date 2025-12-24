import React from "react";
import foodData from "../utils/mock";
import FoodCard from "./FoodCard";
import { useState } from "react";

const Body = () => {
  const [cards, setCards] = useState(foodData);
  const [allCards] = useState(foodData)
  const [searchText, setSearchText] = useState("");

  const handleFilter = () => {
  const filtered = allCards.filter((item) => item.rating > 4);
  setCards(filtered);
};
  return (
    <div className="body">
      <div className="search-box">
        <div className="search-wrapper">
          <input type="search" placeholder="Search Food"
          value={searchText}
          onChange={(e)=>(setSearchText(e.target.value))} />

          <button
          onClick={() => {
           console.log(searchText)
           const filteredRestaurant = allCards.filter((res)=>res.cuisine.toLowerCase().includes(searchText.toLocaleLowerCase()))
           setCards(filteredRestaurant)
            }}
          >
            <i className="ri-search-line"></i>
          </button>
        </div>

        <button className="filter" onClick={handleFilter}>
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
