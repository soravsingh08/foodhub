import { useState } from "react";
import restaurantList from "./restaurantList";

const useRestaurantData = () => {

  // 1️⃣ state yahin rahegi
  const [allCards] = useState(restaurantList);
  const [cards, setCards] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  // 2️⃣ search logic
  const handleSearch = () => {
    const filtered = allCards.filter((res) =>
      res.cuisine.toLowerCase().includes(searchText.toLowerCase())
    );
    setCards(filtered);
  };

  // 3️⃣ top rated logic
  const handleTopRated = () => {
    const filtered = allCards.filter(
      (item) => item.rating > 4
    );
    setCards(filtered);
  };

  // 4️⃣ component ko jo chahiye wahi return
  return {
    cards,
    searchText,
    setSearchText,
    handleSearch,
    handleTopRated,
  };
};

export default useRestaurantData;
