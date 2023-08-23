import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Height } from '@mui/icons-material';

const Product = () => {


  const images =[
    "https://images.pexels.com/photos/1381562/pexels-photo-1381562.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
  ]

  const data = [
    {
        id : 1,
        img:"https://images.pexels.com/photos/5480692/pexels-photo-5480692.jpeg?auto=compress&cs=tinysrgb&w=800",
        img2:"https://images.pexels.com/photos/5480694/pexels-photo-5480694.jpeg?auto=compress&cs=tinysrgb&w=800",
        title:"Classic skirt white",
        isNew:true,
        oldPrice:89,
        newPrice:89,
    },
    {
        id : 2,
        img:"https://images.pexels.com/photos/16285234/pexels-photo-16285234/free-photo-of-woman-posing-in-red-dress.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        img2:"https://images.pexels.com/photos/16285233/pexels-photo-16285233/free-photo-of-woman-in-red-dress-under-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        isNew:true,
        title:"Skater dress red ",
        oldPrice:99,
        newPrice:99,
    },
    {
        id : 3,
        img:"https://images.pexels.com/photos/15148050/pexels-photo-15148050/free-photo-of-legs-in-shoes.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        img2:"https://images.pexels.com/photos/15148051/pexels-photo-15148051/free-photo-of-shoes-on-feet.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        title:"Orange/White trainner ",
        isNew:false,
        oldPrice:79,
        newPrice:69,
    },
    {
        id : 4,
        img:"https://images.pexels.com/photos/1381562/pexels-photo-1381562.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        img2:"https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        title:"Fashion handbag red",
        isNew:false,
        oldPrice:190,
        newPrice:180,
    },
];

  const [selectImg,setSelectedImg] = useState(0); 
  const [quantity,setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src ={images[selectImg]} alt=""/>
        </div>
      </div>
      <div className="right">
        <h2>title hello </h2>
        <span className='price'>£price</span>
        <span className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, qui dolor commodi soluta sequi ex mollitia voluptates, repellendus itaque incidunt pariatur inventore molestias ab facere ipsum eos fugit perferendis asperiores.</span>
        <div className="choose-quantity">
          <button onClick={()=>setQuantity(quantity=== 1 ? 1: quantity-1)}>-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={()=>setQuantity(quantity + 1)}>+</button>
        </div>
        <button className="add-cart">
          <AddShoppingCartIcon fontSize='smaller' />
          Add to cart
        </button>
        <button className="wishlist" >
          <FavoriteBorderIcon fontSize='smaller' /> 
          Add to wishlist
        </button>
        <div className="product-info">
          <span>Vendor:OEM</span>
          <span>Made in UK</span>
        </div>
      </div>
    </div>
  )
}

export default Product