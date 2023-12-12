import React, { useState } from "react";
import {Button, Modal} from '__________________'; //import the library react-bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Request from "../components/Request";
import RequestStepper from "____________________________"; //import the component RequestStepper.jsx

import data from '../data/requests.json';
import { generateUUID } from "../utilities";
import requirements from '../data/requirements.json';

export default function Home (props) {
    /** State variables and their setter methods */
    const [requests, setRequests] = useState(data);
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(data);

    /** Handles the modal show/hide state variables */
    const handleClose = () => setOpen(false);
    const handleShow = () => setOpen(true);

    /** Function to handle the submit event */
    const dataOnSubmit = (data) => {
        data._id = generateUUID();
        data.user = props.user;

        setRequests((previousData) => ([data, ...previousData]));

        setOpen(false);
    }
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
      };
    
    return (<>
            <NavBar  />
            
            <div className="px-4 mt-5">
                <div className="row mt-5 justify-content-center">
                    <h3 className="">Orders and deliveries</h3>
                </div>
                
                <Slider {...settings}>
                    {requests.map((item, index) => <Request data={item} image={getImageBasedOnRequirement(item.requirement)} key={index} />)}
                </Slider>

            </div>

        <div className="container">
          <div
            className="position-absolute"
            style={{ bottom: "60px", right: "60px" }}>

            <Button className="btn-dark create-btn-rounded" onClick={handleShow}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>
        </div>

        <Modal size="lg" show={open} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>New Request</Modal.Title>
          </Modal.Header>

          {/* add the open tag Modal.body to implement modal */}
              <RequestStepper onSubmit={dataOnSubmit} />
          {/* close the Modal.body tag */}
          
        </Modal>

        <Footer />
      </>
    );
}