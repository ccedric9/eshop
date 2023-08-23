import React, {useState} from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {IconButton } from '@mui/material';
import Categories from '../Categories/Categories';

const FeaturedProducts = ({type}) => {

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

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <IconButton className='more-btn'>
                <MoreHorizIcon/>
            </IconButton>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
        <Categories />
    </div>
  )
}

export default FeaturedProducts