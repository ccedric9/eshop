import React from 'react';
import './Footer.scss';
import Image from '../../img/payment.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categoies</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Kids</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Stores</span>
          <span>Cookies</span>
          <span>Customer Services</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, consequatur recusandae voluptatem accusantium, sunt aspernatur maiores cumque tempore, et libero facilis nihil voluptates maxime culpa nesciunt dicta quod! Laboriosam, eaque.</span>
        </div>
        <div className="item">
          <h1>Learn More</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt dolor laborum officia obcaecati eligendi reprehenderit accusamus! Sunt rem consequatur sequi culpa eligendi natus, voluptate at ipsum quas, ad fugit!</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">myEshop</span>
          <span className="copyright">© copyRight 2023. All Rights Reserves</span>
        </div>
        <div className="right">
          <img src={Image} className='payment-logo' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer