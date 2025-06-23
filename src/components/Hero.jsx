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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z"/></svg>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/></svg>
  </div>
);

  var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,           
  autoplaySpeed: 5000,      
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
