import ReactStars from "react-rating-stars-component";
import React from 'react'
import { Link, useLocation } from 'react-router-dom' 

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
      <div>
      <div className={` ${location.pathname == "/store" ? `${grid}` : "product-wrapper row cols-md-1 cols-xs-2 cols-1"}`}>
  <div className={` ${location.pathname == "/store" ? `${grid}` : "product product-list product-select"}`}>
    <div className="product text-center">
      <figure className="product-media">
        <a href="product-default.html">
          <img
            src="assets/images/shop/1.jpg"
            alt="Product"
            width={300}
            height={338}
          />
        </a>
        <div className="product-action-horizontal">
          <a
            href="shop-banner-sidebar.html#"
            className="btn-product-icon btn-cart w-icon-cart"
            title="Add to cart"
          />
          <a
            href="shop-banner-sidebar.html#"
            className="btn-product-icon btn-wishlist w-icon-heart"
            title="Wishlist"
          />
          <a
            href="shop-banner-sidebar.html#"
            className="btn-product-icon btn-compare w-icon-compare"
            title="Compare"
          />
          <a
            href="shop-banner-sidebar.html#"
            className="btn-product-icon btn-quickview w-icon-search"
            title="Quick View"
          />
        </div>
      </figure>
      <div className="product-details">
        <div className="product-cat">
          <a href="shop-banner-sidebar.html">Electronics</a>
        </div>
        <h3 className="product-name">
          <a href="product-default.html">3D Television</a>
        </h3>
        <div className="ratings-container">
          <div className="ratings-full">
            <span className="ratings" style={{ width: "100%" }} />
            <span className="tooltiptext tooltip-top" />
          </div>
          <a href="product-default.html" className="rating-reviews">
            (3 reviews)
          </a>
        </div>
        <div className="product-pa-wrapper">
          <div className="product-price">$220.00 - $230.00</div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default ProductCard