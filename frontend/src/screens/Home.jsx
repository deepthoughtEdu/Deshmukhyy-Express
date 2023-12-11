import React, { useState } from "react";
import Slider from "_________________"; //We are using the react-slick import the slider

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Request from "../components/Request";
import data from '_____________________________'; //You can get the data from data folder.
import requirements from '_____________________________';

export default function Home() {
    const [items, setItems] = useState(data);

    const getImageBasedOnRequirement = (requirement) => {
        let item = requirements.find(e => e.value == String(requirement).toLowerCase().split(' ').join(''));
        return item.image;
    }

    const settings = {
        className:"center-slider",
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: true,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 2500,
        autoplay: true
      };

      //write the name of the function through which you would be able to put the image in place

    return (
        <>
            <NavBar  />
            
            <div className="px-4 mt-5">
                <div className="row mt-5 justify-content-center">
                    <h3 className="">Orders and deliveries</h3>
                </div>
                
                <Slider {...settings}>
                    {items.map((item, index) => <Request data={item} image={___________________________(item.requirement)} key={index} />)} 
                </Slider> 

            </div>

            <Footer />
        </>
    );
}