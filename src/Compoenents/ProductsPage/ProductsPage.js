import React, { useState } from 'react';

import FilterSection from '../Filters/Filters.js';
import Footer from '../Footer/Footer.js';
import ProductCard from '../ProductCard/ProductCard.js';
import CartModal from '../CartModal/CartModal.js';

import './ProductsPage.css';

const products = [
  { id: 1, name: 'Monstera', price: 250, rating: 4.5, image: 'https://i.imghippo.com/files/vw5RY1729415722.png' },
  { id: 2, name: 'Snake Plant', price: 200, rating: 4.2, image: 'https://i.imghippo.com/files/vw5RY1729415722.png' },
  { id: 3, name: 'Aloe Vera', price: 150, rating: 4.3, image: 'https://i.imghippo.com/files/vw5RY1729415722.png' },
  { id: 4, name: 'Peace Lily', price: 180, rating: 4.6, image: 'https://i.imghippo.com/files/vw5RY1729415722.png' },
  { id: 5, name: 'Spider Plant', price: 120, rating: 4.1, image: 'https://i.imghippo.com/files/vw5RY1729415722.png' },
  { id: 6, name: 'ZZ Plant', price: 300, rating: 4.8, image: 'https://i.imghippo.com/files/vw5RY1729415722.png' },
  { id: 7, name: 'Pothos', price: 130, rating: 4.4, image: 'https://i.imghippo.com/files/vw5RY1729415722.png' },
  { id: 8, name: 'Rubber Plant', price: 280, rating: 4.7, image: 'https://i.imghippo.com/files/vw5RY1729415722.png' },
  { id: 9, name: 'Fiddle Leaf Fig', price: 320, rating: 4.9, image: 'https://i.imghippo.com/files/vw5RY1729415722.png' }
];


const ProductsPage = () => {
  const [cartItems, setCartItems] = useState('');
  const [showModal, setShowModal] = useState(false);

  const addToCart = (plant) => {
    setCartItems(plant);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);


  return (
    <>
    <div className="products-page">
        <FilterSection/>
      <div className="products">
        {products.map(product => <ProductCard key={product.id} data={product} addCart={addToCart}/>)}
      </div>
    </div>
    <CartModal show={showModal} handleClose={handleCloseModal} cartItems={cartItems} />
    <div className='view-more'>
      <button className='view-more-btn'>View More</button>
    </div>
    <Footer/>
    </>
  );
};

export default ProductsPage;
