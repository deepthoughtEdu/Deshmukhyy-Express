import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import {Button, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Request from "../components/Request";
import RequestStepper from "../components/RequestStepper";

import data from '../data/requests.json';
import requirements from '../data/requirements.json';
import { createRequest, generateUUID, loadRequests } from "../utilities";

export default function User (props) {
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
        // autoplaySpeed: 2500,
        // autoplay: true
      };

    /** This hook will run once the page loads */
    useEffect(() => {
        loadRequests()
          .then((results) => setRequests(results.data));
    }, [])
    
    return (
      <>
        <NavBar />

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

            <Button
              className="btn-dark create-btn-rounded"
              onClick={handleShow}
              >

              <FontAwesomeIcon icon={faPlus} />

            </Button>
          </div>
        </div>

        <Modal
          size="lg"
          show={open}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>New Request</Modal.Title>
          </Modal.Header>

          <Modal.Body>
              <RequestStepper onSubmit={dataOnSubmit} />
          </Modal.Body>
          
        </Modal>

        <Footer />
      </>
    );
}