import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import menuData from "../utils/restaurantMenu";
import { addItem } from "../utils/cartSlice";

const MenuPage = () => {
  const { id } = useParams();
  const menu = menuData[Number(id)];

  const [openIndex, setOpenIndex] = useState(0);
  const [toast, setToast] = useState(null);

  const dispatch = useDispatch();

  if (!menu) return <h2>Menu not found</h2>;

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setToast(`${item.name} added to cart`);

    setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  return (
    <div className="menu-wrapper">
      {/* ================= Restaurant Info ================= */}
      <div className="restaurant-header">
        <h1>{menu.restaurantName}</h1>

        <p className="restaurant-about">
          {menu.restaurantName} is known for its homely flavours and freshly
          prepared meals. Loved by locals for consistent taste, quick service,
          and simple comfort food that feels like ghar ka khana.
        </p>

        {menu.about && (
          <p className="restaurant-about subtle">{menu.about}</p>
        )}
      </div>

      {/* ================= Menu Categories ================= */}
      <div className="menu-container">
        {menu.categories.map((category, index) => (
          <div key={index} className="menu-category">
            <div
              className="category-header"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <h3>
                {category.title}
                <span className="item-count">
                  ({category.items.length})
                </span>
              </h3>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </div>

            {openIndex === index && (
              <div className="category-items">
                {category.items.map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p className="price">₹ {item.price}</p>
                    </div>

                    <button
                      className="add-btn"
                      onClick={() => handleAddItem(item)}
                    >
                      Add +
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ================= Toast Popup ================= */}
      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}
    </div>
  );
};

export default MenuPage;
