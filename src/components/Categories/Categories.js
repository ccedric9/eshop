import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <img src="https://images.pexels.com/photos/17244623/pexels-photo-17244623/free-photo-of-wood-city-landscape-nature.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
          <button>
            <Link className='link' to="products/1" >SALE</Link>
          </button>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/15414193/pexels-photo-15414193/free-photo-of-pretty-woman-in-dress.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
          <button>
            <Link className='link' to="products/1" >WOMEN</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/15577321/pexels-photo-15577321/free-photo-of-bench-fashion-people-woman.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
          <button>
            <Link className='link' to="products/1" >NEW SEASON</Link>
          </button>
        </div>
      </div>
      <div className="col col-large">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
              <button>
                <Link className='link' to="products/1" >MEN</Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="https://images.pexels.com/photos/1620769/pexels-photo-1620769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <button>
                <Link className='link' to="products/1" >KIDS</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          <button>
            <Link className='link' to="products/1" >ACCESSORIES</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories