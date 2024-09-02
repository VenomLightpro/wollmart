import React from 'react'
import { Link } from 'react-router-dom' 

const BlogCard = () => {
  return (
    <div className="swiper-slide post text-center overlay-zoom">
                    <figure className="post-media br-sm">
                      <a href="post-single.html">
                        <img src="assets/images/demos/demo1/blogs/1.jpg" alt="Post" width={280} height={180} style={{backgroundColor: '#4b6e91'}} />
                      </a>
                    </figure>
                    <div className="post-details">
                      <div className="post-meta">
                        by <a href="demo1.html#" className="post-author">John Doe</a>
                        - <a href="demo1.html#" className="post-date mr-0">03.05.2021</a>
                      </div>
                      <h4 className="post-title"><a href="post-single.html">Aliquam tincidunt mauris
                          eurisus</a>
                      </h4>
                      <a href="/" className='btn btn-link btn-dark btn-underline'>
                        Подробнее<i className="w-icon-long-arrow-right" /></a>
                    </div>
                  </div>
  )
}

export default BlogCard