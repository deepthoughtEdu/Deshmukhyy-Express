import React from "react";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home () {
    return (
        <>
            <NavBar  />

            <div id="home" className="jumbotron text-center">
                <div className="container">
                    <h1>DeshMukhyy Express</h1>
                    <p>We specialize in Food and delivery</p>
                    <form style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="input-group col-12 col-md-6">
                            <input type="email" className="form-control" size="50" placeholder="Email Address" required/>
                            <div className="input-group-btn">
                                <button type="button" className="btn btn-danger">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <About  />
            <Contact />
            <Footer />
        </>
    );
}