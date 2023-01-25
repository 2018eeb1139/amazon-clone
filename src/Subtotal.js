import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getTotalBasket } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();
  // console.log(getTotalBasket(basket));
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a Gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalBasket(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
