import React, { useState } from "react";

import Header from "./UI/Header";
import Summary from "./Component/Description";
import ItemList from "./Meal/ItemList";
import Cart from "./Cart/Cart";
import EmptyCart from "./Cart/EmptyCart";

function App() {
  const count = 1;
  const[modalState, setModalState] = useState(true);

  function OpenModalHandler(){
    setModalState(false);
  }

  function CloseModalHandler(){
    setModalState(true);
  }

  return (
    <>
    <Header onClickCart={OpenModalHandler}></Header>
    <Summary></Summary>
    <ItemList></ItemList>
    {!modalState && count>0 && <Cart onClose={CloseModalHandler}></Cart>}
    {!modalState && count===0 && <EmptyCart onClose={CloseModalHandler}></EmptyCart>}
    </>
  );
}

export default App;
