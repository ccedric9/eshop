import React from 'react'
import './Home.scss';
import Slider from '../../components/Slider/Slider';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Contact from '../../components/Contact/Contact';
import Categories from '../../components/Categories/Categories';


const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type= 'featured' />
      <Contact />
    </div>
  )
}

export default Home
