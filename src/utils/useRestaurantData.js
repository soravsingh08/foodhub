import { useState } from "react";
import restaurantList from "./restaurantList";

const useRestaurantData = () => {

  // 1️⃣ state yahin rahegi
  const [allCards] = useState(restaurantList);
  const [cards, setCards] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  const [isTopRatedOn, setIsTopRatedOn] = useState(false);


  // 2️⃣ search logic
  const handleSearch = () => {
    const filtered = allCards.filter((res) =>
      res.cuisine.toLowerCase().includes(searchText.toLowerCase())
    );
    setCards(filtered);
  };

  // 3️⃣ top rated logic
 const handleTopRated = () => {
  if (!isTopRatedOn) {
    // pehli click → sirf top rated
    const filtered = allCards.filter(
      (item) => item.rating > 4.5
    );
    setCards(filtered);
    setIsTopRatedOn(true);
  } else {
    // dubara click → sab wapas
    setCards(allCards);
    setIsTopRatedOn(false);
  }
};


  // 4️⃣ component ko jo chahiye wahi return
  return {
    cards,
    searchText,
    setSearchText,
    handleSearch,
    handleTopRated,
     isTopRatedOn,
  };
};

export default useRestaurantData;
