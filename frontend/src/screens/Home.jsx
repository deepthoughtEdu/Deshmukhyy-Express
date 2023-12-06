import React, { useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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

    return (
        <>
            <NavBar  />
            
            <div className="container mt-5">
                <div className="row mt-5 justify-content-center">
                    <h3 className="mt-5">Orders and deliveries</h3>
                </div>
                <div className="row justify-content-center">
                    <OwlCarousel className={'owl-theme mt-4 w-75 loadingClass'} margin={20} center nav navText={['Previous', 'Next']} onChanged={handleChanged} startPosition={activeIndex}>
                        {items.map((item, index) => <Request data={item} key={index} />)}
                    </OwlCarousel>
                </div>
            </div>

            <Footer />
        </>
    );
}