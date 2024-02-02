import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/action";


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  // console.log(cartItems);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <header>
        <h1>Your Shopping Cart</h1>
      </header>
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, idx) => {
              return (
                <>
                  <tr>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div class="total">
          Total: $<span id="total">{total}</span>
        </div>
        <a href="#" class="checkout-button">
          Checkout
        </a>
      </div>
    </>
  );
};

export default Cart;
