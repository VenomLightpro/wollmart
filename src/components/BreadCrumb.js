import React from 'react'
import { Link } from 'react-router-dom'


const BreadCrumb = (props) => {
    const { title } = props;
  return (
      <>
        {/* Start of Breadcrumb */}
    <nav className="breadcrumb-nav mb-10 pb-8">
      <div className="container">
        <ul className="breadcrumb">
          <li>
                          <Link to="/">Главная </Link> 
          </li>
          <li>{ title } </li>
        </ul>
      </div>
    </nav>
    {/* End of Breadcrumb */}
      </>
  )
}

export default BreadCrumb