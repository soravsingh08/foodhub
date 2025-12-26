import { useParams } from "react-router-dom";
import { useState } from "react";
import menuData from "../utils/restaurantMenu";

const MenuPage = () => {
  const { id } = useParams();
  const menu = menuData[Number(id)];

  const [openIndex, setOpenIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  if (!menu) return <h2>Menu not found</h2>;

  return (
    <div className="menu-wrapper">
      

      {/* Restaurant Info */}
      <h1>{menu.restaurantName}</h1>
      <p className="restaurant-about">
  {menu.restaurantName} is known for its homely flavours and
  freshly prepared meals. Loved by locals for consistent taste,
  quick service, and simple comfort food that feels like ghar ka khana.
</p>


      <p className="restaurant-about">{menu.about}</p>

      {/* Categories */}
      {menu.categories.map((category, index) => (
        <div key={index} className="menu-category">
          <div
            className="category-header"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <h3>
              {category.title} ({category.items.length})
            </h3>
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </div>

          {openIndex === index &&
            category.items.map((item) => (
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
        </div>
      ))}

      {/* Popup */}
      {selectedItem && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>{selectedItem.name}</h3>
            <p>₹ {selectedItem.price}</p>

            <button
              className="order-btn"
              onClick={() => {
                alert("Order placed.");
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
