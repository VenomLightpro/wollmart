import React from 'react'

const Footer = () => {
  return (
      <>
        {/* Start of Footer */}
          <footer className="footer appear-animate">
        <div className="footer-newsletter bg-primary">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="icon-box icon-box-side text-white">
                  <div className="icon-box-icon d-inline-flex">
                    <i className="w-icon-envelop3" />
                  </div>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title text-white text-uppercase font-weight-bold">Subscribe To
                      Our Newsletter</h4>
                    <p className="text-white">Get all the latest information on Events, Sales and Offers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0 ">
                <form action="demo1.html#" method="get" className="input-wrapper input-wrapper-inline input-wrapper-rounded">
                  <input type="email" className="form-control mr-2 bg-white" name="email" id="email" placeholder="Your E-mail Address" />
                  <button className="btn btn-dark btn-rounded" type="submit">Subscribe<i className="w-icon-long-arrow-right" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="widget widget-about">
                  <a href="demo1.html" className="logo-footer">
                    <img src="assets/images/logo_footer.png" alt="logo-footer" width={144} height={45} />
                  </a>
                  <div className="widget-body">
                    <p className="widget-about-title">Got Question? Call us 24/7</p>
                    <a href="tel:18005707777" className="widget-about-call">1-800-570-7777</a>
                    <p className="widget-about-desc">Register now to get updates on pronot get up icons
                      &amp; coupons ster now toon.
                    </p>
                    <div className="social-icons social-icons-colored">
                      {/* <a href="demo1.html" className="social-icon social-facebook w-icon-facebook" />
                      <a href="demo1.html" className="social-icon social-twitter w-icon-twitter" />
                      <a href="demo1.html" className="social-icon social-instagram w-icon-instagram" />
                      <a href="demo1.html" className="social-icon social-youtube w-icon-youtube" />
                      <a href="demo1.html" className="social-icon social-pinterest w-icon-pinterest" /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h3 className="widget-title">Company</h3>
                  <ul className="widget-body">
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="demo1.html#">Team Member</a></li>
                    <li><a href="demo1.html#">Career</a></li>
                    <li><a href="contact-us.html">Contact Us</a></li>
                    <li><a href="demo1.html#">Affilate</a></li>
                    <li><a href="demo1.html#">Order History</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h4 className="widget-title">My Account</h4>
                  <ul className="widget-body">
                    <li><a href="demo1.html#">Track My Order</a></li>
                    <li><a href="cart.html">View Cart</a></li>
                    <li><a href="login.html">Sign In</a></li>
                    <li><a href="demo1.html#">Help</a></li>
                    <li><a href="wishlist.html">My Wishlist</a></li>
                    <li><a href="demo1.html#">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget">
                  <h4 className="widget-title">Customer Service</h4>
                  <ul className="widget-body">
                    <li><a href="demo1.html#">Payment Methods</a></li>
                    <li><a href="demo1.html#">Money-back guarantee!</a></li>
                    <li><a href="demo1.html#">Product Returns</a></li>
                    <li><a href="demo1.html#">Support Center</a></li>
                    <li><a href="demo1.html#">Shipping</a></li>
                    <li><a href="demo1.html#">Term and Conditions</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-middle">
            <div className="widget widget-category">
              <div className="category-box">
                <h6 className="category-name">Consumer Electric:</h6>
                <a href="demo1.html#">TV Television</a>
                <a href="demo1.html#">Air Condition</a>
                <a href="demo1.html#">Refrigerator</a>
                <a href="demo1.html#">Washing Machine</a>
                <a href="demo1.html#">Audio Speaker</a>
                <a href="demo1.html#">Security Camera</a>
                <a href="demo1.html#">View All</a>
              </div>
              <div className="category-box">
                <h6 className="category-name">Clothing &amp; Apparel:</h6>
                <a href="demo1.html#">Men's T-shirt</a>
                <a href="demo1.html#">Dresses</a>
                <a href="demo1.html#">Men's Sneacker</a>
                <a href="demo1.html#">Leather Backpack</a>
                <a href="demo1.html#">Watches</a>
                <a href="demo1.html#">Jeans</a>
                <a href="demo1.html#">Sunglasses</a>
                <a href="demo1.html#">Boots</a>
                <a href="demo1.html#">Rayban</a>
                <a href="demo1.html#">Acccessories</a>
              </div>
              <div className="category-box">
                <h6 className="category-name">Home, Garden &amp; Kitchen:</h6>
                <a href="demo1.html#">Sofa</a>
                <a href="demo1.html#">Chair</a>
                <a href="demo1.html#">Bed Room</a>
                <a href="demo1.html#">Living Room</a>
                <a href="demo1.html#">Cookware</a>
                <a href="demo1.html#">Utensil</a>
                <a href="demo1.html#">Blender</a>
                <a href="demo1.html#">Garden Equipments</a>
                <a href="demo1.html#">Decor</a>
                <a href="demo1.html#">Library</a>
              </div>
              <div className="category-box">
                <h6 className="category-name">Health &amp; Beauty:</h6>
                <a href="demo1.html#">Skin Care</a>
                <a href="demo1.html#">Body Shower</a>
                <a href="demo1.html#">Makeup</a>
                <a href="demo1.html#">Hair Care</a>
                <a href="demo1.html#">Lipstick</a>
                <a href="demo1.html#">Perfume</a>
                <a href="demo1.html#">View all</a>
              </div>
              <div className="category-box">
                <h6 className="category-name">Jewelry &amp; Watches:</h6>
                <a href="demo1.html#">Necklace</a>
                <a href="demo1.html#">Pendant</a>
                <a href="demo1.html#">Diamond Ring</a>
                <a href="demo1.html#">Silver Earing</a>
                <a href="demo1.html#">Leather Watcher</a>
                <a href="demo1.html#">Rolex</a>
                <a href="demo1.html#">Gucci</a>
                <a href="demo1.html#">Australian Opal</a>
                <a href="demo1.html#">Ammolite</a>
                <a href="demo1.html#">Sun Pyrite</a>
              </div>
              <div className="category-box">
                <h6 className="category-name">Computer &amp; Technologies:</h6>
                <a href="demo1.html#">Laptop</a>
                <a href="demo1.html#">iMac</a>
                <a href="demo1.html#">Smartphone</a>
                <a href="demo1.html#">Tablet</a>
                <a href="demo1.html#">Apple</a>
                <a href="demo1.html#">Asus</a>
                <a href="demo1.html#">Drone</a>
                <a href="demo1.html#">Wireless Speaker</a>
                <a href="demo1.html#">Game Controller</a>
                <a href="demo1.html#">View all</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-left">
              <p className="copyright">Copyright © 2021 Wolmart Store. All Rights Reserved.</p>
            </div>
            <div className="footer-right">
              <span className="payment-label mr-lg-8">We're using safe payment for</span>
              <figure className="payment">
                <img src="assets/images/payment.png" alt="payment" width={159} height={25} />
              </figure>
            </div>
          </div>
        </div>
      </footer>
      {/* End of Footer */}
      </>
  )
}

export default Footer