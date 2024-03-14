import React, { useState } from "react";
import "./SingleProduct.css";
import star from "./star.png";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

function SingleProduct(props) {

  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (image) =>{
    const newCartItems = [...cartItems, image]
    setCartItems(newCartItems );
    navigate('/cart', { state: { cartItems: newCartItems } });
  }


  return (
    <>
      <Header />
      <div className="prodisplay">
        <div className="prodisplay-left">
          <div className="prodisplay-img-list">
            <img src={props.itemInfo.thumbnail} alt="" />
            <img src={props.itemInfo.thumbnail} alt="" />
            <img src={props.itemInfo.thumbnail} alt="" />
            <img src={props.itemInfo.thumbnail} alt="" />
          </div>
          <div className="productdisplay-img">
            <img
              className="productdisplay-main-img"
              src={props.itemInfo.thumbnail}
              alt=""
            />
          </div>
        </div>
        <div className="prodisplay-right">
          <h1>{props.itemInfo.title}</h1>
          <div className="productdisplay-right-star">
            <img src={star} alt="" width={20} />
            <img src={star} alt="" width={20} />
            <img src={star} alt="" width={20} />
            <img src={star} alt="" width={20} />
            <img src={star} alt="" width={20} />
            <p>(122)</p>
          </div>

          <div className="productdisplay-right-prices-text">
            <div className="productdisplay-right-prices">
              <div className="productdisplay-right-prices-old">
                &#8377;
                {Math.ceil(
                  (props.itemInfo.price * 100) /
                    (100 - props.itemInfo.discountPercentage)
                )}
              </div>
              <div className="productdisplay-right-prices-new">
                &#8377;{props.itemInfo.price}
              </div>
            </div>
            <div className="mt-1">Inclusive of all taxes</div>
          </div>
          <div className="description">{props.itemInfo.description}</div>
          <div className="productdisplay-right-size">
            <h1>Select size</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={() =>addToCart(props.itemInfo.thumbnail)}>ADD TO CART</button>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;

{
  /* <img src={props.itemInfo.thumbnail} alt="" /> */
}
