import React from 'react'
import './Cart'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Cart.scss'

const Cart = () => {

    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vitae ipsum at sunt ad, quidem, est a vero libero iure eligendi! Quidem reprehenderit quisquam minus cupiditate consequatur in quaerat aspernatur.';

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
    ]
  return (
    <div className="cart">
        <h3>products in your cart</h3>
        {data?.map((item)=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h5>{item.title}</h5>
                    <span>{description?.substring(0,100) + "..."}</span>
                    <div className="price">1 x £{item.newPrice}</div>
                </div>
                <DeleteOutlineIcon className='delete' />
            </div>
        ))}
        <div className="checkout">
            <div className="total">
                <span>Subtotal</span>
                <span>£199</span>
            </div>
            <div className="others">
                <button className="proceed">
                    Proceed to Checkout
                </button>
                <span className='reset'>Reset Cart</span>
            </div>
        </div>
    </div>
  )
}

export default Cart