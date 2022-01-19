import React from "react";

import "./MenuCard.css";

function MenuCard(props) {
  return (
    <>
      <div className="container">
        <div className="card">
          {props.sendList.map((list) => (
            <>
            <ul key={list.id}>
              <li className="name">{list.name}</li>
              <li className="description">{list.description}</li>
              <li className="price">{"$"+list.price}</li>
            </ul>
            
            <form className="form">
              <label htmlFor={list.id}>Quantity</label>
              <input id={list.id} type="number" min="0" max="9" step="1" defaultValue="0"></input>
              <button type="submit" className="formButton add"> + </button>
            </form>
            
            <div className="sep"></div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default MenuCard;

//<button type="button" className="formButton remove"> - </button>