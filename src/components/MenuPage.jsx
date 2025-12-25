import { useParams } from "react-router-dom";
import { useState } from "react";
import menuData from "../utils/restaurantMenu";


const MenuPage = () => {
  const { id } = useParams();
  const menu = menuData[Number(id)];

  const [selectedItem, setSelectedItem] = useState(null);

  if (!menu) return <h2 className="menu-error">Menu not found</h2>;

  return (
    <div className="menu-page">
      <h1>{menu.restaurantName}</h1>

      {menu.items.map((item) => (
        <div key={item.id} className="menu-item">
          <div>
            <h4>{item.name}</h4>
            <p>₹ {item.price}</p>
          </div>

          <button onClick={() => setSelectedItem(item)}>
            Add
          </button>
        </div>
      ))}

      {/* POPUP */}
      {selectedItem && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>{selectedItem.name}</h3>
            <p>₹ {selectedItem.price}</p>

            <button
              className="order-btn"
              onClick={() => {
                alert("Order placed 😄");
                setSelectedItem(null);
              }}
            >
              Order Now
            </button>

            <button
              className="close-btn"
              onClick={() => setSelectedItem(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
