import React from 'react';
import {useNavigate} from "react-router-dom"
import './ProductCard.css';

const ProductCard = (product) => {
  const {data, addCart} = product
  const {name, rating, image} = data

  const navigate = useNavigate()

  const OnClickHandle = () => {
    addCart(name)
  }

  const handleViewProduct = () => {
    navigate("/thank-you", {state: { name }});
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name}/>
        <button className="view-product-btn" onClick={handleViewProduct}>View Product</button>
      </div>
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">Indoor Plant, Low maintenance</p>
        <div className="product-rating">
          <span className="stars">★★★★★</span>
          <span className="rating">{rating}</span>
        </div>
        <div className="product-pricing">
          <span className="original-price">₹ 359</span>
          <span className="discounted-price">₹ 299</span>
        </div>
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={OnClickHandle}>Add to cart</button>
          <button className="rent-btn buy-on-rent-btn">Buy on Rent</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
