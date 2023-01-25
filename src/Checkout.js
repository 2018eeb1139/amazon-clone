import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://i.ytimg.com/vi/MFPg04jAfcY/maxresdefault.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty.</h2>
            <p>
              You have no items in your basket. To buy one or more item, Click{" "}
              <a href="/" className="checkout__boldText">
                Add to Basket
              </a>{" "}
              next to your Item.
            </p>
          </div>
        ) : (
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout__title">Your Shopping Basket.</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          {/* <h2>Subtotal</h2> */}
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
