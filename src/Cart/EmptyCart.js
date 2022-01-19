import React from "react";

import Cooking from "../Pictures/food.jpg";
import "./EmptyCart.css";

//const Cartitems = [{name: "Sushi"},{name: "Barbecue Burger"}];

function EmptyCart(props) {
  function CloseHandler() {
    props.onClose();
  }

  return (
    <>
      <div className="overlay"></div>

      <div className="modalCard">
        <div className="modalContent">
          <div className="newContainer">
            <img className="image" src={Cooking} alt="Cookinggg" />

            <div className="contentCart">
              <h3>GOOD FOOD IS ALWAYS COOKING</h3>
              <p className="sub1">Your cart is empty.</p>
              <p className="sub2">Add something from the menu</p>
            </div>

            <div className="buttons">
              <button type="button" className="browseButton" onClick={CloseHandler}>
                Browse Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmptyCart;
