import React from "react";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBiking } from '@fortawesome/free-solid-svg-icons';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home(props) {
    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <div className="row justify-content-center pt-5">

                  <div className="col-12 col-md-4 col-lg-3 mt-5">
                    <Link to={'/user'} className="justify-content-center d-flex">
                      <Card className="text-center bg-dark-subtle border shadow" style={{width: '15rem', borderRadius: '12px'}}>
                        <Card.Title className="pt-4">
                          User
                        </Card.Title>
                        <Card.Body className="pb-4">
                          <FontAwesomeIcon size="4x" color="#0029ff" icon={faUser} />
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>

                  <div className="col-12 col-md-4 col-lg-3 mt-5">
                    <Link to={'/delivery-partner'} className="justify-content-center d-flex">
                      <Card className="text-center bg-dark-subtle border shadow" style={{width: '15rem', borderRadius: '12px'}}>
                        <Card.Title className="pt-4">
                          Delivery Partner
                        </Card.Title>
                        <Card.Body className="pb-4">
                          <FontAwesomeIcon size="4x" color="#0029ff" icon={faBiking} />
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>

                </div>
            </div>
            <Footer />
        </>
    )
}