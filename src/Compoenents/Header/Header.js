import React from 'react'
import "./Header.css"

const Header = ()  => {
  return (
    <>
        <div className='shipping-offer-banner'>
            <p className='shipping-offer'>Free Shipping on orders above 999/-</p>
            <p className='call-text'>Call us on: +91 98768 051203</p>
        </div>
        <div className="navbar">
            <div className="logo-container">
                <img src="https://i.imghippo.com/files/MvTsG1729409098.png" className="logo-img" alt="chaperone"/>
                <h1 className="logo-name">Chaperone</h1>
            </div>
            <ul className='nav-list'>
                <li>Home</li>
                <li>Plants&Pots</li>
                <li>Tools</li>
                <li>Our Services</li>
                <li>Blog</li>
                <li>Our Story</li>
                <li>FaQS</li>
            </ul>
            <div className='profile-container'>
                <div className='profile'>
                    <p className="icon">🙍</p>
                    <p className="name-profile">Profile</p>
                </div>
                <div className='cart'>
                <p className="icon">🛒</p>
                <p>Cart</p>
                </div>
            </div>
        </div>
        <div className="search-container">
            <span className='search-bar'>🔍</span>
            <input type="search" className="search-input" placeholder="Search Plant"/>
        </div>
    </>
    
  )
}

export default Header