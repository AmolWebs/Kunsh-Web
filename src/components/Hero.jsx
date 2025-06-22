import React from 'react'
import './Hero.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {

  const heroImgs = [
    {
      src: "hero.jpg"
    },
    {
      src: "hero1.jpg"
    },
    {
      src: "hero2.jpg"
    }
  ]

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    ←
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    →
  </div>
);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div >
      <div className='caro-main' >
        <Slider {...settings}>
          {heroImgs.map((item, index) =>
          (
            <div className='caro-img-div' >
              <img className='caro-img' key={index} src={item.src} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
