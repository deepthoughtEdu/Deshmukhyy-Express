import React from "react";
import Flickity from "react-flickity-component";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Request from "../components/Request";
import data from '../data/requests.json';
import "flickity/css/flickity.css";

export default function Home () {
    return (
        <>
            <NavBar  />
            
            <div className="container mt-5">
                <div className="row mt-5 justify-content-center">
                    <h3 className="mt-5">Orders and deliveries</h3>
                </div>
                <div className="row justify-content-center">
                <Flickity className="mt-4 w-75">
                    {data.map((item, index) => <Request data={item} key={index} />)}
                </Flickity>
                </div>
            </div>

            <Footer />
        </>
    );
}