import { Link } from "react-router-dom";
import FoodCard from "./FoodCard";


// Ye component sirf list dikhata hai
// ❌ logic nahi
// ❌ state nahi



const RestaurantList = ({ cards }) => {
  return (
    <div className="cards-container">
      {cards.map((restaurant) => (
        <Link key={restaurant.id} to={`/menu/${restaurant.id}`}>
          {/*If restaurant list is top rated thn add toprated on the top of food card here else */ 
         <FoodCard data={restaurant} />
          }
          
        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
