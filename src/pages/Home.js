import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import OurClients from '../components/OurClients'
import TopCategories from '../components/TopCategories'
import ProductCard from '../components/ProductCard'
import RecentCard from '../components/RecentCard'

const Home = () => {
  return (
    <>
      <main className="main">
        <section className="intro-section">
          <div className="swiper-container swiper-theme nav-inner pg-inner swiper-nav-lg animation-slider pg-xxl-hide nav-xxl-show nav-hide" data-swiper-options="{
                    'slidesPerView': 1,
                    'autoplay': {
                        'delay': 8000,
                        'disableOnInteraction': false
                    }
                }">
            <div className="swiper-wrapper">
              <div className="swiper-slide banner banner-fixed intro-slide intro-slide1" style={{backgroundImage: 'url(assets/images/demos/demo1/sliders/slide-1.jpg)', backgroundColor: '#ebeef2'}}>
                <div className="container">
                  <figure className="slide-image skrollable slide-animate">
                    <img src="assets/images/demos/demo1/sliders/shoes.png" alt="Banner" data-bottom-top="transform: translateY(10vh);" data-top-bottom="transform: translateY(-10vh);" width={474} height={397} />
                  </figure>
                  <div className="banner-content y-50 text-right">
                    <h5 className="banner-subtitle font-weight-normal text-default ls-50 lh-1 mb-2 slide-animate" data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'duration': '1s',
                                    'delay': '.2s'
                                }">
                      Custom <span className="p-relative d-inline-block">Men’s</span>
                    </h5>
                    <h3 className="banner-title font-weight-bolder ls-25 lh-1 slide-animate" data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'duration': '1s',
                                    'delay': '.4s'
                                }">
                      RUNNING SHOES
                    </h3>
                    <p className="font-weight-normal text-default slide-animate" data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'duration': '1s',
                                    'delay': '.6s'
                                }">
                      Sale up to <span className="font-weight-bolder text-secondary">30% OFF</span>
                    </p>
                    <a href="shop-list.html" className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate" data-animation-options="{
                                    'name': 'fadeInRightShorter',
                                    'duration': '1s',
                                    'delay': '.8s'
                                }">SHOP NOW<i className="w-icon-long-arrow-right" /></a>
                  </div>
                  {/* End of .banner-content */}
                </div>
                {/* End of .container */}
              </div>
              {/* End of .intro-slide1 */}
              <div className="swiper-slide banner banner-fixed intro-slide intro-slide2" style={{backgroundImage: 'url(assets/images/demos/demo1/sliders/slide-2.jpg)', backgroundColor: '#ebeef2'}}>
                <div className="container">
                  <figure className="slide-image skrollable slide-animate" data-animation-options="{
                                    'name': 'fadeInUpShorter',
                                    'duration': '1s'
                                }">
                    <img src="assets/images/demos/demo1/sliders/men.png" alt="Banner" data-bottom-top="transform: translateX(10vh);" data-top-bottom="transform: translateX(-10vh);" width={480} height={633} />
                  </figure>
                  <div className="banner-content d-inline-block y-50">
                    <h5 className="banner-subtitle font-weight-normal text-default ls-50 slide-animate" data-animation-options="{
                                        'name': 'fadeInUpShorter',
                                        'duration': '1s',
                                        'delay': '.2s'
                                    }">
                      Mountain-<span className="text-secondary">Climbing</span>
                    </h5>
                    <h3 className="banner-title font-weight-bolder text-dark mb-0 ls-25 slide-animate" data-animation-options="{
                                        'name': 'fadeInUpShorter',
                                        'duration': '1s',
                                        'delay': '.4s'
                                    }">
                      Hot &amp; Packback
                    </h3>
                    <p className="font-weight-normal text-default slide-animate" data-animation-options="{
                                        'name': 'fadeInUpShorter',
                                        'duration': '1s',
                                        'delay': '.8s'
                                    }">
                      Only until the end of this week.
                    </p>
                    <a href="shop-banner-sidebar.html" className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate" data-animation-options="{
                                        'name': 'fadeInUpShorter',
                                        'duration': '1s',
                                        'delay': '1s'
                                    }">
                      SHOP NOW<i className="w-icon-long-arrow-right" />
                    </a>
                  </div>
                  {/* End of .banner-content */}
                </div>
                {/* End of .container */}
              </div>
              {/* End of .intro-slide2 */}
              <div className="swiper-slide banner banner-fixed intro-slide intro-slide3" style={{backgroundImage: 'url(assets/images/demos/demo1/sliders/slide-3.jpg)', backgroundColor: '#f0f1f2'}}>
                <div className="container">
                  <figure className="slide-image skrollable slide-animate" data-animation-options="{
                                    'name': 'fadeInDownShorter',
                                    'duration': '1s'
                                }">
                    <img src="assets/images/demos/demo1/sliders/skate.png" alt="Banner" data-bottom-top="transform: translateY(10vh);" data-top-bottom="transform: translateY(-10vh);" width={310} height={444} />
                  </figure>
                  <div className="banner-content text-right y-50">
                    <p className="font-weight-normal text-default text-uppercase mb-0 slide-animate" data-animation-options="{
                                        'name': 'fadeInLeftShorter',
                                        'duration': '1s',
                                        'delay': '.6s'
                                    }">
                      Top weekly Seller
                    </p>
                    <h5 className="banner-subtitle font-weight-normal text-default ls-25 slide-animate" data-animation-options="{
                                        'name': 'fadeInLeftShorter',
                                        'duration': '1s',
                                        'delay': '.4s'
                                    }">
                      Trending Collection
                    </h5>
                    <h3 className="banner-title p-relative font-weight-bolder ls-50 slide-animate" data-animation-options="{
                                        'name': 'fadeInLeftShorter',
                                        'duration': '1s',
                                        'delay': '.2s'
                                    }"><span className="text-white mr-4">Roller</span>-skate
                    </h3>
                    <div className="btn-group slide-animate" data-animation-options="{
                                        'name': 'fadeInLeftShorter',
                                        'duration': '1s',
                                        'delay': '.8s'
                                    }">
                      <a href="shop-list.html" className="btn btn-dark btn-outline btn-rounded btn-icon-right">SHOP
                        NOW<i className="w-icon-long-arrow-right" /></a>
                    </div>
                    {/* End of .banner-content */}
                  </div>
                  {/* End of .container */}
                </div>
              </div>
              {/* End of .intro-slide3 */}
            </div>
            <div className="swiper-pagination" />
            <button className="swiper-button-next" />
            <button className="swiper-button-prev" />
          </div>
          {/* End of .swiper-container */}
        </section>
        {/* End of .intro-section */}
        <div className="container">
          <div className="swiper-container appear-animate icon-box-wrapper br-sm mt-6 mb-6" data-swiper-options="{
                    'slidesPerView': 1,
                    'loop': false,
                    'breakpoints': {
                        '576': {
                            'slidesPerView': 2
                        },
                        '768': {
                            'slidesPerView': 3
                        },
                        '1200': {
                            'slidesPerView': 4
                        }
                    }
                }">
            <div className="swiper-wrapper row cols-md-4 cols-sm-3 cols-1">
              <div className="swiper-slide icon-box icon-box-side icon-box-primary">
                <span className="icon-box-icon icon-shipping">
                  <i className="w-icon-truck" />
                </span>
                <div className="icon-box-content">
                  <h4 className="icon-box-title font-weight-bold mb-1">Free Shipping &amp; Returns</h4>
                  <p className="text-default">For all orders over $99</p>
                </div>
              </div>
              <div className="swiper-slide icon-box icon-box-side icon-box-primary">
                <span className="icon-box-icon icon-payment">
                  <i className="w-icon-bag" />
                </span>
                <div className="icon-box-content">
                  <h4 className="icon-box-title font-weight-bold mb-1">Secure Payment</h4>
                  <p className="text-default">We ensure secure payment</p>
                </div>
              </div>
              <div className="swiper-slide icon-box icon-box-side icon-box-primary icon-box-money">
                <span className="icon-box-icon icon-money">
                  <i className="w-icon-money" />
                </span>
                <div className="icon-box-content">
                  <h4 className="icon-box-title font-weight-bold mb-1">Money Back Guarantee</h4>
                  <p className="text-default">Any back within 30 days</p>
                </div>
              </div>
              <div className="swiper-slide icon-box icon-box-side icon-box-primary icon-box-chat">
                <span className="icon-box-icon icon-chat">
                  <i className="w-icon-chat" />
                </span>
                <div className="icon-box-content">
                  <h4 className="icon-box-title font-weight-bold mb-1">Customer Support</h4>
                  <p className="text-default">Call or email us 24/7</p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Iocn Box Wrapper */}
          <div className="row category-banner-wrapper appear-animate pt-6 pb-8">
            <div className="col-md-6 mb-4">
              <div className="banner banner-fixed br-xs">
                <figure>
                  <img src="assets/images/demos/demo1/categories/1-1.jpg" alt="Category Banner" width={610} height={160} style={{backgroundColor: '#ecedec'}} />
                </figure>
                <div className="banner-content y-50 mt-0">
                  <h5 className="banner-subtitle font-weight-normal text-dark">Get up to <span className="text-secondary font-weight-bolder text-uppercase ls-25">20% Off</span>
                  </h5>
                  <h3 className="banner-title text-uppercase">Sports Outfits<br /><span className="font-weight-normal                       text-capitalize">Collection</span>
                  </h3>
                  <div className="banner-price-info font-weight-normal">Starting at <span className="text-secondary                       font-weight-bolder">$170.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="banner banner-fixed br-xs">
                <figure>
                  <img src="assets/images/demos/demo1/categories/1-2.jpg" alt="Category Banner" width={610} height={160} style={{backgroundColor: '#636363'}} />
                </figure>
                <div className="banner-content y-50 mt-0">
                  <h5 className="banner-subtitle font-weight-normal text-capitalize">New Arrivals</h5>
                  <h3 className="banner-title text-white text-uppercase">Accessories<br /><span className="font-weight-normal text-capitalize">Collection</span></h3>
                  <div className="banner-price-info text-white font-weight-normal text-capitalize">Only From
                    <span className="text-secondary font-weight-bolder">$90.00</span></div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <section className="category-section top-category bg-grey pt-10 pb-10 appear-animate">
          <div className="container pb-2">
            <h2 className="title justify-content-center pt-1 ls-normal mb-5">Top Categories Of The Month</h2>
            <div className="swiper">
              <div className="swiper-container swiper-theme pg-show" data-swiper-options="{
                            'spaceBetween': 20,
                            'slidesPerView': 2,
                            'breakpoints': {
                                '576': {
                                    'slidesPerView': 3
                                },
                                '768': {
                                    'slidesPerView': 5
                                },
                                '992': {
                                    'slidesPerView': 6
                                }
                            }
                        }">
                <div className="swiper-wrapper row cols-lg-6 cols-md-5 cols-sm-3 cols-2">
                  <TopCategories />
                  <TopCategories />
                  <TopCategories />
                  <TopCategories />
                  <TopCategories />
                  <TopCategories />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of .category-section top-category */}
        <div className="container">
          <h2 className="title justify-content-center ls-normal mb-4 mt-10 pt-1 appear-animate">Popular Departments
          </h2>
          
          <div className="tab-content product-wrapper appear-animate">
            <div className="tab-pane active pt-4" id="tab1-1">
              <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
                <ProductCard />
              </div>
            </div>
          </div>
         
          <h2 className="title title-underline mb-4 ls-normal appear-animate">Our Clients</h2>
          <div className="swiper-container swiper-theme brands-wrapper mb-9 appear-animate" data-swiper-options="{
                    'spaceBetween': 0,
                    'slidesPerView': 2,
                    'breakpoints': {
                        '576': {
                            'slidesPerView': 3
                        },
                        '768': {
                            'slidesPerView': 4
                        },
                        '992': {
                            'slidesPerView': 5
                        },
                        '1200': {
                            'slidesPerView': 6
                        }
                    }
                }">
            <div className="swiper-wrapper row gutter-no cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
              <OurClients />
              <OurClients />
              <OurClients />
              <OurClients />
              <OurClients />
            </div>
          </div>
          {/* End of Brands Wrapper */}
          <div className="post-wrapper appear-animate mb-4">
            <div className="title-link-wrapper pb-1 mb-4">
              <h2 className="title ls-normal mb-0">From Our Blog</h2>
              <a href="blog-listing.html" className="font-weight-bold font-size-normal">View All Articles</a>
            </div>
            <div className="swiper">
              <div className="swiper-container swiper-theme" data-swiper-options="{
                            'slidesPerView': 1,
                            'spaceBetween': 20,
                            'breakpoints': {
                                '576': {
                                    'slidesPerView': 2
                                },
                                '768': {
                                    'slidesPerView': 3
                                },
                                '992': {
                                    'slidesPerView': 4
                                }
                            }
                        }">
                <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
          {/* Post Wrapper */}
          <h2 className="title title-underline mb-4 ls-normal appear-animate">Your Recent Views</h2>
          <div className="swiper-container swiper-theme shadow-swiper appear-animate pb-4 mb-8" data-swiper-options="{
                    'spaceBetween': 20,
                    'slidesPerView': 2,
                    'breakpoints': {
                        '576': {
                            'slidesPerView': 3
                        },
                        '768': {
                            'slidesPerView': 5
                        },
                        '992': {
                            'slidesPerView': 6
                        },
                        '1200': {
                            'slidesPerView': 8
                        }
                    }
                }">
            <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2">
              <RecentCard />
            </div>
            <div className="swiper-pagination" />
          </div>
          {/* End of Reviewed Producs */}
        </div>
        {/*End of Catainer */}
      </main>
    </>
  )
}

export default Home