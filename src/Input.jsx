import React from 'react'

function Input() {

  return (
    <>
      <section className="amazon-header">
        <div className="amazon-header-left-section">
            <a href="#" className="header-link">
                <img src="images/amazon-logo-white.png" alt="amazon-logo" className="amazon-logo" />
                <img src="images/amazon-mobile-logo-white.png" alt="" className="amazon-mobile-logo" />
            </a>
        </div>

        <div className="amazon-header-middle-section">
            <input type="text" className='search-bar' placeholder='Search'/>
            <button className="search-button">
                <img src="images/icons/search-icon.png" alt="search-icon" className="search-icon" />
            </button>
        </div>

        <div className="amazon-header-right-section">
            <a href="#" className="header-link orders-link">
                <span className="returns-text">Returns &</span>
                <span className="orders-text">Orders</span>
            </a>
        </div>

        <a href="" className="cart-link header-link">
            <img src="images/icons/cart-icon.png" alt="cart-icon" className="cart-icon" />
            <div className="cart-quantity">0</div>
            <div className="cart-text">Cart</div>
        </a>
      </section>
    </>
  )
}

export default Input