import React, { useState } from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './Slider.scss';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const prevSlide = ()=>{
        setCurrentSlide(currentSlide === 0 ? (data.length - 1) : (prev) => prev - 1)
    }
    const nextSlide = ()=>{
        setCurrentSlide(currentSlide === (data.length - 1) ? 0 : (prev) => prev + 1 )
    }

    const data = [
        "https://images.pexels.com/photos/3061217/pexels-photo-3061217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/5822530/pexels-photo-5822530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/428311/pexels-photo-428311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      ];
  return (
    <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide*110}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <NavigateBeforeIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <NavigateNextIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider