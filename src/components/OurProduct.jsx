import React from 'react'
import './OurProduct.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OurProduct = () => {

    const productImgs = [
        {
            src: "kanda-lasun.jpg"
        },
        {
            src: "goda-masala.jpg"
        },
        {
            src: "garam-masala.jpg"
        },
        {
            src: "lal-pari.jpg"
        },
        {
            src: "halad-powder.jpg"
        },
        {
            src: "chatpat-masala.jpg"
        }
    ]

    const PrevArrow = ({ onClick }) => (
        <div className="p-custom-arrow prev-arrow" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z" /></svg>
        </div>
    );

    const NextArrow = ({ onClick }) => (
        <div className="p-custom-arrow next-arrow" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z" /></svg>
        </div>
    );

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,         // default for desktop
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

        responsive: [
            {
                breakpoint: 768, // for devices smaller than 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,  // optional: hide arrows on mobile
                    dots: true
                }
            }
        ]
    };


    return (
        <section className='our-pro-sec' >
            <h1 className='product-heading' >Our Products</h1>
            <div className="product-carousal">
                <div className='caro-main' >
                    <Slider className='slider-pro' {...settings}>
                        {productImgs.map((item, index) =>
                        (
                            <div className='caro-img-div' >
                                <img className='caro-img' key={index} src={item.src} alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default OurProduct
