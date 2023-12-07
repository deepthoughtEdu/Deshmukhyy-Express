import React, { useState } from "react";
import Slider from "react-slick";
// import OwlCarousel from 'react-owl-carousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Request from "../components/Request";
import data from '../data/requests.json';

export default function Home() {
    const [items, setItems] = useState(data);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleChanged = (e) => {
        const currentSlideIndex = e.page.index;

        if (currentSlideIndex >= 0) {
            setActiveIndex(currentSlideIndex);
            setItems((previousState) => {
                return previousState.map((item, index) => {
                    if (index === currentSlideIndex) {
                        item.isActive = true;
                    } else {
                        item.isActive = false;
                    }
                    return item;
                })
            })
        }
    };
    // This borked the transition animation, please fix it

    const settings = {
       
        centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
      };

    return (
        <>
            <NavBar  />
            
            <div className=" mt-5">
                <div className="row mt-5 justify-content-center">
                    <h3 className="mt-5">Orders and deliveries</h3>
                </div>
                
                    <Slider {...settings}>
                        {items.map((item, index) => <Request data={item} key={index} />)}
                    </Slider>

                </div>

            <Footer />
        </>
    );
}