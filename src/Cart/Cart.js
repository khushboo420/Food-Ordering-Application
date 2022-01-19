import React from "react";

import "./Cart.css";

//const Cartitems = [{name: "Sushi"},{name: "Barbecue Burger"}];

function Cart(props) {

    function CloseHandler(){
        props.onClose();
    }

  return (
    <>
      <div className="overlay"></div>
      <div className="modalCard">
        <div className="modalContent">
          <div className="item">Sushi</div>

          <div className="amount">
            <div>Total Amount</div>
            <div>$35.63</div>
          </div>

          <div className="buttons">
            <button type="button" className="close" onClick={CloseHandler}>Close</button>
            <button type="submit" className="order">Order</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
