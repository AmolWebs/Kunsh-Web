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
    <div
      style={{
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        cursor: 'pointer',
        fontSize: '30px',
        color: 'black',
        borderRadius: '50%',
        backgroundColor:'#FF8356',
        padding:'.5rem',
        opacity:'0.2',
      }}
      onClick={onClick}
    >
      ←
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      style={{
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        cursor: 'pointer',
        fontSize: '30px',
        color: 'black',
        borderRadius: '50%',
        backgroundColor:'#FF8356',
        padding:'.5rem',
        opacity:'0.2',
      }}
      onClick={onClick}
    >
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
      <h1>HEllo</h1>
      <h1>HEllo</h1>
      <h1>HEllo</h1>
      <h1>HEllo</h1>
      <h1>HEllo</h1>
      <h1>HEllo</h1>
    </div>
  )
}

export default Hero
