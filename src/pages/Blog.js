import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Blog = () => {
  return (
     <>

  {/* Start of Main */}
  <main className="main">
    {/* Start of Page Header */}
    <div className="page-header">
      <div className="container">
        <h1 className="page-title mb-0">Grid Sidebar</h1>
      </div>
    </div>
    {/* End of Page Header */}
              {/* Start of Breadcrumb */}
    <Meta title={"Блог"} />
    <BreadCrumb title="Блог" />
    {/* End of Breadcrumb */}
    {/* Start of Page Content */}
    <div className="page-content mb-10 pb-2">
      <div className="container">
        <div className="row gutter-lg">
          <div className="main-content">
            <div className="row cols-sm-2">
              <article className="post post-grid-type overlay-zoom mb-6 fashion">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <img
                      src="assets/images/blog/2cols/1.jpg"
                      width={600}
                      height={420}
                      alt="blog"
                    />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <a href="blog-grid-sidebar.html#">Fashion</a>
                  </div>
                  <h4 className="post-title">
                    <a href="post-single.html">
                      New found the men dress for summer
                    </a>
                  </h4>
                  <div className="post-content">
                    <p>
                      Sed pretium, ligula sollicitudin laoreet viverra, tortor
                      libero sodales leo, eget blandit nunc tortor eu nibh.
                      Suspendisse potenti.Sed egstas, ant at vulputate volutpat,
                      uctus metus libero eu augue, vitae luctus…
                    </p>{" "}
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (read more)
                    </a>
                  </div>
                  <div className="post-meta">
                    by{" "}
                    <a href="blog-grid-sidebar.html#" className="post-author">
                      John Doe
                    </a>
                    -{" "}
                    <a href="blog-grid-sidebar.html#" className="post-date">
                      03.01.2021
                    </a>
                    <a href="blog-grid-sidebar.html#" className="post-comment">
                      <i className="w-icon-comments" />
                      <span>7</span>Comments
                    </a>
                  </div>
                </div>
              </article>
              <article className="post post-grid-type overlay-zoom mb-6 others technology">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <img
                      src="assets/images/blog/2cols/2.jpg"
                      width={600}
                      height={420}
                      alt="blog"
                    />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <a href="blog-grid-sidebar.html#">Others</a>,
                    <a href="blog-grid-sidebar.html#">Technology</a>
                  </div>
                  <h4 className="post-title">
                    <a href="post-single.html">
                      Recognitory the needs is primary condition for design
                    </a>
                  </h4>
                  <div className="post-content">
                    <p>
                      Sed pretium, ligula sollicitudin laoreet viverra, tortor
                      libero sodales leo, eget blandit nunc tortor eu nibh.
                      Suspendisse potenti.Sed egstas, ant at vulputate volutpat,
                      uctus metus libero eu augue, vitae luctus…
                    </p>
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (read more)
                    </a>
                  </div>
                  <div className="post-meta">
                    by{" "}
                    <a href="blog-grid-sidebar.html#" className="post-author">
                      John Doe
                    </a>
                    -{" "}
                    <a href="blog-grid-sidebar.html#" className="post-date">
                      03.05.2021
                    </a>
                    <a href="blog-grid-sidebar.html#" className="post-comment">
                      <i className="w-icon-comments" />
                      <span>4</span>Comments
                    </a>
                  </div>
                </div>
              </article>
              <article className="post post-grid-type overlay-zoom mb-6 clothes">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <img
                      src="assets/images/blog/2cols/3.jpg"
                      width={600}
                      height={420}
                      alt="blog"
                    />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <a href="blog-grid-sidebar.html#">Clothes</a>
                  </div>
                  <h4 className="post-title">
                    <a href="post-single.html">
                      New found the women’s shirt for summer season
                    </a>
                  </h4>
                  <div className="post-content">
                    <p>
                      Sed pretium, ligula sollicitudin laoreet viverra, tortor
                      libero sodales leo, eget blandit nunc tortor eu nibh.
                      Suspendisse potenti.Sed egstas, ant at vulputate volutpat,
                      uctus metus libero eu augue, vitae luctus…
                    </p>
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (read more)
                    </a>
                  </div>
                  <div className="post-meta">
                    by{" "}
                    <a href="blog-grid-sidebar.html#" className="post-author">
                      John Doe
                    </a>
                    -{" "}
                    <a href="blog-grid-sidebar.html#" className="post-date">
                      03.01.2021
                    </a>
                    <a href="blog-grid-sidebar.html#" className="post-comment">
                      <i className="w-icon-comments" />
                      <span>2</span>Comments
                    </a>
                  </div>
                </div>
              </article>
              <article className="post post-grid-type overlay-zoom mb-6 lifestyle">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <img
                      src="assets/images/blog/2cols/4.jpg"
                      width={600}
                      height={420}
                      alt="blog"
                    />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <a href="blog-grid-sidebar.html#">Lifestyle</a>
                  </div>
                  <h4 className="post-title">
                    <a href="post-single.html">
                      We want to be different and fashion gives to me that
                      outlet
                    </a>
                  </h4>
                  <div className="post-content">
                    <p>
                      Sed pretium, ligula sollicitudin laoreet viverra, tortor
                      libero sodales leo, eget blandit nunc tortor eu nibh.
                      Suspendisse potenti.Sed egstas, ant at vulputate volutpat,
                      uctus metus libero eu augue, vitae luctus…
                    </p>
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (read more)
                    </a>
                  </div>
                  <div className="post-meta">
                    by{" "}
                    <a href="blog-grid-sidebar.html#" className="post-author">
                      John Doe
                    </a>
                    -{" "}
                    <a href="blog-grid-sidebar.html#" className="post-date">
                      03.03.2021
                    </a>
                    <a href="blog-grid-sidebar.html#" className="post-comment">
                      <i className="w-icon-comments" />
                      <span>5</span>Comments
                    </a>
                  </div>
                </div>
              </article>
              <article className="post post-grid-type overlay-zoom mb-6 entertainment lifestyle shoes others">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <img
                      src="assets/images/blog/2cols/5.jpg"
                      width={600}
                      height={420}
                      alt="blog"
                    />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <a href="blog-grid-sidebar.html#">Entertainment</a>,
                    <a href="blog-grid-sidebar.html#">Lifestyle</a>,
                    <a href="blog-grid-sidebar.html#">Others</a>
                  </div>
                  <h4 className="post-title">
                    <a href="post-single.html">
                      Comes a cool blog post with Images
                    </a>
                  </h4>
                  <div className="post-content">
                    <p>
                      Sed pretium, ligula sollicitudin laoreet viverra, tortor
                      libero sodales leo, eget blandit nunc tortor eu nibh.
                      Suspendisse potenti.Sed egstas, ant at vulputate volutpat,
                      uctus metus libero eu augue, vitae luctus…
                    </p>
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (read more)
                    </a>
                  </div>
                  <div className="post-meta">
                    by{" "}
                    <a href="blog-grid-sidebar.html#" className="post-author">
                      John Doe
                    </a>
                    -{" "}
                    <a href="blog-grid-sidebar.html#" className="post-date">
                      03.01.2021
                    </a>
                    <a href="blog-grid-sidebar.html#" className="post-comment">
                      <i className="w-icon-comments" />
                      <span>2</span>Comments
                    </a>
                  </div>
                </div>
              </article>
              <article className="post post-grid-type overlay-zoom mb-6 fashion lifestyle">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <img
                      src="assets/images/blog/2cols/6.jpg"
                      width={600}
                      height={420}
                      alt="blog"
                    />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <a href="blog-grid-sidebar.html#">Fashion</a>,
                    <a href="blog-grid-sidebar.html#">Technology</a>
                  </div>
                  <h4 className="post-title">
                    <a href="post-single.html">Fusce lacinia arcuet nulla</a>
                  </h4>
                  <div className="post-content">
                    <p>
                      Sed pretium, ligula sollicitudin laoreet viverra, tortor
                      libero sodales leo, eget blandit nunc tortor eu nibh.
                      Suspendisse potenti.Sed egstas, ant at vulputate volutpat,
                      uctus metus libero eu augue, vitae luctus…
                    </p>
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (read more)
                    </a>
                  </div>
                  <div className="post-meta">
                    by{" "}
                    <a href="blog-grid-sidebar.html#" className="post-author">
                      John Doe
                    </a>
                    -{" "}
                    <a href="blog-grid-sidebar.html#" className="post-date">
                      03.06.2021
                    </a>
                    <a href="blog-grid-sidebar.html#" className="post-comment">
                      <i className="w-icon-comments" />
                      <span>3</span>Comments
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <ul className="pagination justify-content-center">
              <li className="prev disabled">
                <a
                  href="blog-grid-sidebar.html#"
                  aria-label="Previous"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  <i className="w-icon-long-arrow-left" />
                  Prev
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="blog-grid-sidebar.html#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="blog-grid-sidebar.html#">
                  2
                </a>
              </li>
              <li className="next">
                <a href="blog-grid-sidebar.html#" aria-label="Next">
                  Next
                  <i className="w-icon-long-arrow-right" />
                </a>
              </li>
            </ul>
          </div>
          {/* End of Main Content */}
          <aside className="sidebar right-sidebar blog-sidebar sidebar-fixed sticky-sidebar-wrapper">
            <div className="sidebar-overlay">
              <a href="blog-grid-sidebar.html#" className="sidebar-close">
                <i className="close-icon" />
              </a>
            </div>
            <a href="blog-grid-sidebar.html#" className="sidebar-toggle">
              <i className="fas fa-chevron-left" />
            </a>
            <div className="sidebar-content">
              <div className="sticky-sidebar">
                <div className="widget widget-search-form">
                  <div className="widget-body">
                    <form
                      action="blog-grid-sidebar.html#"
                      method="GET"
                      className="input-wrapper input-wrapper-inline"
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search in Blog"
                        autoComplete="off"
                        required=""
                      />
                      <button className="btn btn-search">
                        <i className="w-icon-search" />
                      </button>
                    </form>
                  </div>
                </div>
                {/* End of Widget search form */}
                <div className="widget widget-categories mb-0">
                  <h3 className="widget-title bb-no">Categories</h3>
                  <ul className="widget-body filter-items search-ul">
                    <li>
                      <a href="blog.html">Clothes</a>
                    </li>
                    <li>
                      <a href="blog.html">Entertainment</a>
                    </li>
                    <li>
                      <a href="blog.html">Fashion</a>
                    </li>
                    <li>
                      <a href="blog.html">Lifestyle</a>
                    </li>
                    <li>
                      <a href="blog.html">Others</a>
                    </li>
                    <li>
                      <a href="blog.html">Shoes</a>
                    </li>
                    <li>
                      <a href="blog.html">Technology</a>
                    </li>
                  </ul>
                </div>
                {/* End of Widget categories */}
                <div className="widget widget-posts">
                  <h3 className="widget-title bb-no">Popular Posts</h3>
                  <div className="widget-body">
                    <div className="swiper">
                      <div
                        className="swiper-container swiper-theme nav-top"
                        data-swiper-options="{
                                              'spaceBetween': 20,
                                              'slidesPerView': 1
                                          }"
                      >
                        <div className="swiper-wrapper row cols-1">
                          <div className="swiper-slide widget-col">
                            <div className="post-widget mb-4">
                              <figure className="post-media br-sm">
                                <img
                                  src="assets/images/blog/sidebar/1.jpg"
                                  alt={150}
                                  height={150}
                                />
                              </figure>
                              <div className="post-details">
                                <div className="post-meta">
                                  <a
                                    href="blog-grid-sidebar.html#"
                                    className="post-date"
                                  >
                                    March 1, 2021
                                  </a>
                                </div>
                                <h4 className="post-title">
                                  <a href="post-single.html">
                                    Fashion tells about who you are from
                                    external point
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="post-widget mb-4">
                              <figure className="post-media br-sm">
                                <img
                                  src="assets/images/blog/sidebar/2.jpg"
                                  alt={150}
                                  height={150}
                                />
                              </figure>
                              <div className="post-details">
                                <div className="post-meta">
                                  <a
                                    href="blog-grid-sidebar.html#"
                                    className="post-date"
                                  >
                                    March 5, 2021
                                  </a>
                                </div>
                                <h4 className="post-title">
                                  <a href="post-single.html">
                                    New found the men dress for summer
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="post-widget mb-2">
                              <figure className="post-media br-sm">
                                <img
                                  src="assets/images/blog/sidebar/3.jpg"
                                  alt={150}
                                  height={150}
                                />
                              </figure>
                              <div className="post-details">
                                <div className="post-meta">
                                  <a
                                    href="blog-grid-sidebar.html#"
                                    className="post-date"
                                  >
                                    March 1, 2021
                                  </a>
                                </div>
                                <h4 className="post-title">
                                  <a href="post-single.html">
                                    Cras ornare tristique elit
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide widget-col">
                            <div className="post-widget mb-4">
                              <figure className="post-media br-sm">
                                <img
                                  src="assets/images/blog/sidebar/4.jpg"
                                  alt={150}
                                  height={150}
                                />
                              </figure>
                              <div className="post-details">
                                <div className="post-meta">
                                  <a
                                    href="blog-grid-sidebar.html#"
                                    className="post-date"
                                  >
                                    March 1, 2021
                                  </a>
                                </div>
                                <h4 className="post-title">
                                  <a href="post-single.html">
                                    Vivamus vestibulum ntulla nec ante
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="post-widget mb-4">
                              <figure className="post-media br-sm">
                                <img
                                  src="assets/images/blog/sidebar/5.jpg"
                                  alt={150}
                                  height={150}
                                />
                              </figure>
                              <div className="post-details">
                                <div className="post-meta">
                                  <a
                                    href="blog-grid-sidebar.html#"
                                    className="post-date"
                                  >
                                    March 5, 2021
                                  </a>
                                </div>
                                <h4 className="post-title">
                                  <a href="post-single.html">
                                    Fusce lacinia arcuet nulla
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="post-widget mb-2">
                              <figure className="post-media br-sm">
                                <img
                                  src="assets/images/blog/sidebar/6.jpg"
                                  alt={150}
                                  height={150}
                                />
                              </figure>
                              <div className="post-details">
                                <div className="post-meta">
                                  <a
                                    href="blog-grid-sidebar.html#"
                                    className="post-date"
                                  >
                                    March 1, 2021
                                  </a>
                                </div>
                                <h4 className="post-title">
                                  <a href="post-single.html">
                                    Comes a cool blog post with Images
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-button-next" />
                        <div className="swiper-button-prev" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of Widget posts */}
                <div className="widget widget-custom-block">
                  <h3 className="widget-title bb-no">Custom Block</h3>
                  <div className="widget-body">
                    <p className="text-default mb-0">
                      Fringilla urna porttitor rhoncus dolor purus. Luctus
                      veneneratis lectus magna fring. Suspendisse potenti. Sed
                      egestas, ante et vulputate volutpat, uctus metus libero.
                    </p>
                  </div>
                </div>
                {/* End of Widget custom block */}
                <div className="widget widget-tags">
                  <h3 className="widget-title bb-no">Browse Tags</h3>
                  <div className="widget-body tags">
                    <a href="blog-grid-sidebar.html#" className="tag">
                      Fashion
                    </a>
                    <a href="blog-grid-sidebar.html#" className="tag">
                      Style
                    </a>
                    <a href="blog-grid-sidebar.html#" className="tag">
                      Travel
                    </a>
                    <a href="blog-grid-sidebar.html#" className="tag">
                      Women
                    </a>
                    <a href="blog-grid-sidebar.html#" className="tag">
                      Men
                    </a>
                    <a href="blog-grid-sidebar.html#" className="tag">
                      Hobbies
                    </a>
                    <a href="blog-grid-sidebar.html#" className="tag">
                      Shopping
                    </a>
                    <a href="blog-grid-sidebar.html#" className="tag">
                      Photography
                    </a>
                  </div>
                </div>
                <div className="widget widget-calendar">
                  <h3 className="widget-title bb-no">Calendar</h3>
                  <div className="widget-body">
                    <div
                      className="calendar-container"
                      data-calendar-options="{
                                          'dayExcerpt': 1
                                      }"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
    {/* End of Page Content */}
  </main>
  {/* End of Main */}
</>



  )
}

export default Blog