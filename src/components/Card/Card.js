import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss';

const Card = ({item}) => {
  return (
    <div className="card">
      <Link to={`/product/${item.id}`}>
        <div className="images">
          {item.isNew && <span>New</span>}
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
      </Link>
      <Link to={`/product/${item.id}`}>
        <div className="title">{item.title}</div>
      </Link>
      <h5>£{item.oldPrice}</h5> 
    </div>
  )
}

export default Card