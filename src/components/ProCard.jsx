import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward,faForward } from '@fortawesome/free-solid-svg-icons'

function ProCard({products}) {

  const [page, setPage] = useState(1);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >=1 && selectedPage <= products.length / 6 && selectedPage !== page){
      setPage(selectedPage)
    }
  }
  
  return (
    <>
      <div className="product-list">
        {products.slice(page*6-6,page*6).map((product) => (
          <div className="product-card" key = {product.id}>
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-details">
              <h3 className="product-title">{product.name}</h3>
              <div class="product-quantity-container">
                <select>
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <p className="product-price">Price: ${product.priceCents / 100}</p>
              <div className="product-rating">
                Rating: {product.rating.stars} stars ({product.rating.count} reviews)
              </div>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <span onClick={() => selectPageHandler(page-1)} className={page > 1 ? "" : "pagination__disable"}><FontAwesomeIcon icon={faBackward} /></span>
        {
          [...Array(products.length / 6 )].map((_, i ) => {
            return <span key={i} className={page === i+1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i+1)}>{i+1}</span>
          })
        }
        <span onClick={() => selectPageHandler(page+1)} className = {page < products.length/ 6 ? "" : "pagination__disable"}><FontAwesomeIcon icon={faForward} /></span>
      </div>
    </>
  );
};

export default ProCard
