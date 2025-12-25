import { Link } from "react-router-dom";
import FoodCard from "./FoodCard";

// Ye component sirf list dikhata hai
// ❌ logic nahi
// ❌ state nahi

const RestaurantMenu = ({ cards }) => {
  return (
    <div className="cards-container">
      {cards.map((item) => (
        <Link key={item.id} to={`/menu/${item.id}`}>
          <FoodCard data={item} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantMenu;
