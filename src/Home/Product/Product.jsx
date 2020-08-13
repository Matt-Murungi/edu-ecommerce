import React from "react";

import "./Product.css";

function Product({ title, price, image }) {
  return (
    <div className="product">
      <img className="product__image" src={image} alt="" srcset="" />
      <h3 className="product__title">{title}</h3>
      <p className="product__price">{price}</p>
      <button className="product__button">Buy</button>
    </div>
  );
}

export default Product;
