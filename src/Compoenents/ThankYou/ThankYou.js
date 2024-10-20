import React from 'react';
import { useLocation } from 'react-router-dom'
import './ThankYou.css';

const ThankYou = () => {

  const location = useLocation();
  const { name } = location.state

  return (
    <div className="thank-you-container">
      <div className="thank-you-box">
        <h1 className="thank-you-title">Thank You for Your Order!</h1>
        <p className="thank-you-message">
          We appreciate your business. Your order has been placed successfully!
        </p>
        <div className="thank-you-image">
          <img src="https://i.imghippo.com/files/vw5RY1729415722.png" alt="Plant" />
        </div>
        <h4 className='item-name'>{name}</h4>
        <p className="order-follow-up">
          You will receive an email confirmation shortly. If you have any questions, feel free to reach out.
        </p>
        <button className="continue-button" onClick={() => window.location.href = '/'}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
