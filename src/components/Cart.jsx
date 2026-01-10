import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart-wrapper">
      <div className="cart-card">
        <h1 className="cart-title">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart-box">
            <div className="cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>
              Looks like you haven’t added anything yet.
              Go ahead and explore the menu.
            </p>

            <Link to="/" className="browse-btn">
              Browse Menu
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>₹ {item.price}</p>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeItem(index))}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <button
                className="clear-cart"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

//update
export default Cart;
  

//completed redux