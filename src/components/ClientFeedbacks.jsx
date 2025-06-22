import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './ClientFeedbacks.css'

const ClientFeedbacks = () => {

    const clientFeedbacks = [
        {
            user_feedback: "कुंश मसाल्यांचं प्रोडक्ट छान आहे, आणि मला वाटतंय की त्यांचं ग्राहक सेवा फारच सर्वोत्तम आहे. त्यांचं दुगुणं मसाले, दुगुणं सुख.",
            user_name: "Raj Kumbarkar",
            user_type: "Customer"
        },
        {
            user_feedback: "कुंश ब्रँडची उत्पादने चविष्ट तर आहेतच त्याचबरोबर सर्वसामान्यांना परवडणारी आहेत !",
            user_name: "Swapnil Nagarkar",
            user_type: "Customer"
        },
        {
            user_feedback: "कुंश ब्रँडची उत्पादने ही अतिशय उच्च दर्जाची आणि स्वादिष्ट आहेत.",
            user_name: "Anjali Patil",
            user_type: "Customer"
        }
    ]

    const PrevArrow = ({ onClick }) => (
        <div className="c-custom-arrow prev-arrow" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z" /></svg>
        </div>
    );

    const NextArrow = ({ onClick }) => (
        <div className="c-custom-arrow next-arrow" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z" /></svg>
        </div>
    );

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,         // default for desktop
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
        <section className='feedback-sec' >
            <h1 className='client-feedback-heading' >Client's Feedback</h1>
            <div className="feedbacks">
                <div className='caro-feed-main' >
                    <Slider className='slider-feed' {...settings}>
                        {clientFeedbacks.map((item, index) =>
                        (
                            <div className='caro-feed-div' >
                                <h3>{item.user_feedback}</h3>
                                <h1>{item.user_name}</h1>
                                <h3>{item.user_type}</h3>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default ClientFeedbacks
