import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [grid, setGrid] = useState(4);
  return (
      <>
      {/* Start of Main */}
  <main className="main">
    {/* Start of Breadcrumb */}
  <Meta title={"Блог"} />
    <BreadCrumb title="Блог" />
  {/* End of Breadcrumb */}
    {/* Start of Page Content */}
    <div className="page-content">
      <div className="container">
        {/* Start of Shop Banner */}
        <div
          className="shop-default-banner banner d-flex align-items-center mb-5 br-xs"
          style={{
            backgroundImage: "url(assets/images/shop/banner1.jpg)",
            backgroundColor: "#FFC74E"
          }}
        >
          <div className="banner-content">
            <h4 className="banner-subtitle font-weight-bold">
              Accessories Collection
            </h4>
            <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-normal">
              Smart Wrist Watches
            </h3>
            <a
              href="shop-banner-sidebar.html"
              className="btn btn-dark btn-rounded btn-icon-right"
            >
              Discover Now
              <i className="w-icon-long-arrow-right" />
            </a>
          </div>
        </div>
        {/* End of Shop Banner */}
        <div className="shop-default-brands mb-5">
          <div
            className="brands-swiper swiper-container swiper-theme "
            data-swiper-options="{
                          'slidesPerView': 2,
                          'breakpoints': {
                              '576': {
                                  'slidesPerView': 3
                              },
                              '768': {
                                  'slidesPerView': 4
                              },
                              '992': {
                                  'slidesPerView': 6
                              },
                              '1200': {
                                  'slidesPerView': 7
                              }
                          },
                          'autoplay': {
                              'delay': 4000,
                              'disableOnInteraction': false
                          }
                      }"
          >
            <div className="swiper-wrapper row gutter-no cols-xl-7 cols-lg-6 cols-md-4 cols-sm-3 cols-2">
              <div className="swiper-slide">
                <figure>
                  <img
                    src="assets/images/brands/category/1.png"
                    alt="Brand"
                    width={160}
                    height={90}
                  />
                </figure>
              </div>
              <div className="swiper-slide">
                <figure>
                  <img
                    src="assets/images/brands/category/2.png"
                    alt="Brand"
                    width={160}
                    height={90}
                  />
                </figure>
              </div>
              <div className="swiper-slide">
                <figure>
                  <img
                    src="assets/images/brands/category/3.png"
                    alt="Brand"
                    width={160}
                    height={90}
                  />
                </figure>
              </div>
              <div className="swiper-slide">
                <figure>
                  <img
                    src="assets/images/brands/category/4.png"
                    alt="Brand"
                    width={160}
                    height={90}
                  />
                </figure>
              </div>
              <div className="swiper-slide">
                <figure>
                  <img
                    src="assets/images/brands/category/5.png"
                    alt="Brand"
                    width={160}
                    height={90}
                  />
                </figure>
              </div>
              <div className="swiper-slide">
                <figure>
                  <img
                    src="assets/images/brands/category/6.png"
                    alt="Brand"
                    width={160}
                    height={90}
                  />
                </figure>
              </div>
              <div className="swiper-slide">
                <figure>
                  <img
                    src="assets/images/brands/category/7.png"
                    alt="Brand"
                    width={160}
                    height={90}
                  />
                </figure>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
        {/* End of Shop Brands*/}
        {/* Start of Shop Category */}
        <div className="shop-default-category category-ellipse-section mb-6">
          <div
            className="swiper-container swiper-theme shadow-swiper"
            data-swiper-options="{
                      'spaceBetween': 20,
                      'slidesPerView': 2,
                      'breakpoints': {
                          '480': {
                              'slidesPerView': 3
                          },
                          '576': {
                              'slidesPerView': 4
                          },
                          '768': {
                              'slidesPerView': 6
                          },
                          '992': {
                              'slidesPerView': 7
                          },
                          '1200': {
                              'slidesPerView': 8,
                              'spaceBetween': 30
                          }
                      }
                  }"
          >
            <div className="swiper-wrapper row gutter-lg cols-xl-8 cols-lg-7 cols-md-6 cols-sm-4 cols-xs-3 cols-2">
              <div className="swiper-slide category-wrap">
                <div className="category category-ellipse">
                  <figure className="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img
                        src="assets/images/categories/category-4.jpg"
                        alt="Categroy"
                        width={190}
                        height={190}
                        style={{ backgroundColor: "#5C92C0" }}
                      />
                    </a>
                  </figure>
                  <div className="category-content">
                    <h4 className="category-name">
                      <a href="shop-banner-sidebar.html">Sports</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="swiper-slide category-wrap">
                <div className="category category-ellipse">
                  <figure className="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img
                        src="assets/images/categories/category-5.jpg"
                        alt="Categroy"
                        width={190}
                        height={190}
                        style={{ backgroundColor: "#B8BDC1" }}
                      />
                    </a>
                  </figure>
                  <div className="category-content">
                    <h4 className="category-name">
                      <a href="shop-banner-sidebar.html">Babies</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="swiper-slide category-wrap">
                <div className="category category-ellipse">
                  <figure className="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img
                        src="assets/images/categories/category-6.jpg"
                        alt="Categroy"
                        width={190}
                        height={190}
                        style={{ backgroundColor: "#99C4CA" }}
                      />
                    </a>
                  </figure>
                  <div className="category-content">
                    <h4 className="category-name">
                      <a href="shop-banner-sidebar.html">Sneakers</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="swiper-slide category-wrap">
                <div className="category category-ellipse">
                  <figure className="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img
                        src="assets/images/categories/category-7.jpg"
                        alt="Categroy"
                        width={190}
                        height={190}
                        style={{ backgroundColor: "#4E5B63" }}
                      />
                    </a>
                  </figure>
                  <div className="category-content">
                    <h4 className="category-name">
                      <a href="shop-banner-sidebar.html">Cameras</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="swiper-slide category-wrap">
                <div className="category category-ellipse">
                  <figure className="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img
                        src="assets/images/categories/category-8.jpg"
                        alt="Categroy"
                        width={190}
                        height={190}
                        style={{ backgroundColor: "#D3E5EF" }}
                      />
                    </a>
                  </figure>
                  <div className="category-content">
                    <h4 className="category-name">
                      <a href="shop-banner-sidebar.html">Games</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="swiper-slide category-wrap">
                <div className="category category-ellipse">
                  <figure className="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img
                        src="assets/images/categories/category-9.jpg"
                        alt="Categroy"
                        width={190}
                        height={190}
                        style={{ backgroundColor: "#65737C" }}
                      />
                    </a>
                  </figure>
                  <div className="category-content">
                    <h4 className="category-name">
                      <a href="shop-banner-sidebar.html">Kitchen</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="swiper-slide category-wrap">
                <div className="category category-ellipse">
                  <figure className="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img
                        src="assets/images/categories/category-20.jpg"
                        alt="Categroy"
                        width={190}
                        height={190}
                        style={{ backgroundColor: "#E4E4E4" }}
                      />
                    </a>
                  </figure>
                  <div className="category-content">
                    <h4 className="category-name">
                      <a href="shop-banner-sidebar.html">Watches</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="swiper-slide category-wrap">
                <div className="category category-ellipse">
                  <figure className="category-media">
                    <a href="shop-banner-sidebar.html">
                      <img
                        src="assets/images/categories/category-21.jpg"
                        alt="Categroy"
                        width={190}
                        height={190}
                        style={{ backgroundColor: "#D3D8DE" }}
                      />
                    </a>
                  </figure>
                  <div className="category-content">
                    <h4 className="category-name">
                      <a href="shop-banner-sidebar.html">Clothes</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
        {/* End of Shop Category */}
        {/* Start of Shop Content */}
        <div className="shop-content row gutter-lg mb-10">
          {/* Start of Sidebar, Shop Sidebar */}
          <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
            {/* Start of Sidebar Overlay */}
            <div className="sidebar-overlay" />
            <a className="sidebar-close" href="shop-banner-sidebar.html#">
              <i className="close-icon" />
            </a>
            {/* Start of Sidebar Content */}
            <div className="sidebar-content scrollable">
              {/* Start of Sticky Sidebar */}
              <div className="sticky-sidebar">
                <div className="filter-actions">
                  <label>Filter :</label>
                  <a
                    href="shop-banner-sidebar.html#"
                    className="btn btn-dark btn-link filter-clean"
                  >
                    Clean All
                  </a>
                </div>
                {/* Start of Collapsible widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <label>All Categories</label>
                  </h3>
                  <ul className="widget-body filter-items search-ul">
                    <li>
                      <a href="shop-banner-sidebar.html#">Accessories</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Babies</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Beauty</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Decoration</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Electronics</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Fashion</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Food</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Furniture</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Kitchen</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Medical</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Sports</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Watches</a>
                    </li>
                  </ul>
                </div>
                {/* End of Collapsible Widget */}
                {/* Start of Collapsible Widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <label>Price</label>
                  </h3>
                  <div className="widget-body">
                    <ul className="filter-items search-ul">
                      <li>
                        <a href="shop-banner-sidebar.html#">$0.00 - $100.00</a>
                      </li>
                      <li>
                        <a href="shop-banner-sidebar.html#">
                          $100.00 - $200.00
                        </a>
                      </li>
                      <li>
                        <a href="shop-banner-sidebar.html#">
                          $200.00 - $300.00
                        </a>
                      </li>
                      <li>
                        <a href="shop-banner-sidebar.html#">
                          $300.00 - $500.00
                        </a>
                      </li>
                      <li>
                        <a href="shop-banner-sidebar.html#">$500.00+</a>
                      </li>
                    </ul>
                    <form className="price-range">
                      <input
                        type="number"
                        name="min_price"
                        className="min_price text-center"
                        placeholder="$min"
                      />
                      <span className="delimiter">-</span>
                      <input
                        type="number"
                        name="max_price"
                        className="max_price text-center"
                        placeholder="$max"
                      />
                      <a
                        href="shop-banner-sidebar.html#"
                        className="btn btn-primary btn-rounded"
                      >
                        Go
                      </a>
                    </form>
                  </div>
                </div>
                {/* End of Collapsible Widget */}
                {/* Start of Collapsible Widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <label>Size</label>
                  </h3>
                  <ul className="widget-body filter-items item-check mt-1">
                    <li>
                      <a href="shop-banner-sidebar.html#">Extra Large</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Large</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Medium</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Small</a>
                    </li>
                  </ul>
                </div>
                {/* End of Collapsible Widget */}
                {/* Start of Collapsible Widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <label>Brand</label>
                  </h3>
                  <ul className="widget-body filter-items item-check mt-1">
                    <li>
                      <a href="shop-banner-sidebar.html#">Elegant Auto Group</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Green Grass</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Node Js</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">NS8</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Red</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Skysuite Tech</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Sterling</a>
                    </li>
                  </ul>
                </div>
                {/* End of Collapsible Widget */}
                {/* Start of Collapsible Widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <label>Color</label>
                  </h3>
                  <ul className="widget-body filter-items item-check mt-1">
                    <li>
                      <a href="shop-banner-sidebar.html#">Black</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Blue</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Brown</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Green</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Grey</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Orange</a>
                    </li>
                    <li>
                      <a href="shop-banner-sidebar.html#">Yellow</a>
                    </li>
                  </ul>
                </div>
                {/* End of Collapsible Widget */}
              </div>
              {/* End of Sidebar Content */}
            </div>
            {/* End of Sidebar Content */}
          </aside>
          {/* End of Shop Sidebar */}
          {/* Start of Shop Main Content */}
          <div className="main-content">
            <nav className="toolbox sticky-toolbox sticky-content fix-top">
              <div className="toolbox-left">
                <a
                  href="shop-banner-sidebar.html#"
                  className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                                  btn-icon-left d-block d-lg-none"
                >
                  <i className="w-icon-category" />
                  <span>Filters</span>
                </a>
                <div className="toolbox-item toolbox-sort select-box text-dark">
                  <label>Sort By :</label>
                  <select name="orderby" className="form-control">
                    <option value="default" selected="selected">
                      Default sorting
                    </option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price-low">Sort by pric: low to high</option>
                    <option value="price-high">
                      Sort by price: high to low
                    </option>
                  </select>
                </div>
              </div>
              <div className="toolbox-right">
                <div className="toolbox-item toolbox-show select-box">
                  <select name="count" className="form-control">
                    <option value={9}>Show 9</option>
                    <option value={12} selected="selected">
                      Show 12
                    </option>
                    <option value={24}>Show 24</option>
                    <option value={36}>Show 36</option>
                  </select>
                </div>
                {/* <div className="toolbox-item toolbox-layout">
                      <a
                        onClick={() => {
                        setGrid("product-wrapper row cols-md-3 cols-sm-2 cols-2");
                        }}
                    href="javascript:void(0)"
                    className="icon-mode-grid btn-layout active"
                  >
                    <i className="w-icon-grid" />
                  </a>
                      <a
                        onClick={() => {
                        setGrid("product-wrapper row cols-md-1 cols-xs-2 cols-1");
                        }}
                    href="javascript:void(0)"
                    className="icon-mode-list btn-layout"
                  >
                    <i className="w-icon-list" />
                  </a>
                </div> */}
              </div>
            </nav>
            <div className="product-wrapper row cols-md-3 cols-sm-2 cols-2">
              
                  <ProductCard grid={ grid } />
            </div>
            <div className="toolbox toolbox-pagination justify-content-between">
              <p className="showing-info mb-2 mb-sm-0">
                Showing<span>1-12 of 60</span>Products
              </p>
              <ul className="pagination">
                <li className="prev disabled">
                  <a
                    href="shop-banner-sidebar.html#"
                    aria-label="Previous"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    <i className="w-icon-long-arrow-left" />
                    Prev
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="shop-banner-sidebar.html#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="shop-banner-sidebar.html#">
                    2
                  </a>
                </li>
                <li className="next">
                  <a href="shop-banner-sidebar.html#" aria-label="Next">
                    Next
                    <i className="w-icon-long-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* End of Shop Main Content */}
        </div>
        {/* End of Shop Content */}
      </div>
    </div>
    {/* End of Page Content */}
  </main>
      </>
  )
}

export default Shop