import React from "react";

import Image from "../Pictures/meals.jpg";
import Cart from "../Pictures/cart1.png";
import "./Header.css";


function Header(props) {
  
  function submitHandler(){
    props.onClickCart();
  }

  return (
    <>
      <div className="NavBar">
        <label>ReactMeals</label>
        <button type="submit" className="button" onClick ={submitHandler}>
          <img src={Cart} alt="FOOOOOD" />
          <div>Your Cart</div>
          <div className="tag">3</div>
        </button>
      </div>
      <div className="coverPic">
        <img src={Image} alt="FOOOOOD" />
      </div>
    </>
  );
}

export default Header;
