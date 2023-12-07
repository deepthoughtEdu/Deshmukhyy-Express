import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import {Button, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Request from "../components/Request";
import RequestStepper from "../components/RequestStepper";

import data from '../data/requests.json';
import "flickity/css/flickity.css";
import { createRequest, generateUUID, loadRequests } from "../utilities";

export default function User (props) {
    /** State variables and their setter methods */
    const [requests, setRequests] = useState(data);
    const [open, setOpen] = useState(false);

    /** Handles the modal show/hide state variables */
    const handleClose = () => setOpen(false);
    const handleShow = () => setOpen(true);

    /** Function to handle the submit event */
    const dataOnSubmit = async (data) => {
        const request = await createRequest(data);

        data._id = request.insertedId || generateUUID();
        data.user = props.user;

        setRequests((previousData) => ([data, ...previousData]));

        setOpen(false);
    }

    /** This hook will run once the page loads */
    useEffect(() => {
        loadRequests()
          .then((results) => setRequests(results.data));
    }, [])
    
    return (
      <>
        <NavBar />

        <div className="container mt-5">
          <div className="row mt-5 justify-content-center">
            <h3 className="mt-5 text-center">Orders and deliveries</h3>
          </div>
          <div className="row justify-content-center">

            <Flickity className="mt-4 w-75">
              {requests && requests.map((item) => (
                <Request data={item} key={item._id} />
              ))}
            </Flickity>

          </div>
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