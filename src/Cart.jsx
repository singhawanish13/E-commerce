// Cart.js
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const Cart = () => {
  const location = useLocation();
  const { cartItems } = location.state;
  console.log(cartItems);
  const totalItem = cartItems.map((item, index) =>{
    return(
      <img src={item} alt="" />
    )
  })

  return (
    <div>
      <Header />
      {/* <div>{totalItem}</div> */}
      <div className="flex justify-center items-center ">
        <p>ITEM</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>SUBTOTAL</p>
        <p>REMOVE</p>
      </div>
      <hr/>
    </div>
  );
};

export default Cart;
