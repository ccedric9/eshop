import React, { useState } from 'react'
import './Products.scss';
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';

const Products = () => {

  const [maxPrice,setMaxPrice] = useState(1000);
  // const [minPrice,setMinPrice] = useState(0);
  const categoryId = parseInt(useParams().id);
  const [sort,setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h4>Product Categories</h4>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1}/>
            <label htmlFor="1"> Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='2' value={2}/>
            <label htmlFor="2"> Bags</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='3' value={3}/>
            <label htmlFor="3">Skirts</label>
          </div>
        </div>
        <div className="filterItem">
          <h4>Filtered by Prices</h4>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}  />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h4>Sort By</h4>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name='price' onChange={(e)=> setSort('asc')} />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value='desc' name='price' onChange={(e)=> setSort('desc')}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="https://images.pexels.com/photos/235359/pexels-photo-235359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='banner'/>
        <List categoryId={categoryId} maxPrice = {maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products