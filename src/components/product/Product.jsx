import React, { useState, useEffect } from "react";
import "./Product.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
function Product({ data }) {
  let products = data?.map((el) => (
    <div key={el.id} className="d2">
      <img
        className="img"
        src="https://www.drtc.org/wp-content/plugins/fancy-product-designer/assets/img/product-templates/hoodie_duocolor_front.png"
        alt=""
      />
      <p>Hot</p>
      <span>{el.description}</span>
      <NavLink to={`/product/${el.id}`}>
        <h1>{el.title}</h1>
      </NavLink>
      <h4>
        By <b>NestClose</b>
      </h4>
      <div className="d4">
        <div className="d5">
          <h2>${el.price}</h2>
          <del>${Math.round(el.price + 5)}</del>
        </div>
        <button>
          <MdOutlineShoppingCart />
          <h4>Add</h4>
        </button>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="d">
        <h1>Popular Products</h1>
      </div>
      <div className="d1">{products}</div>
    </div>
  );
}

export default Product;
