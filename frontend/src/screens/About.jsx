import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function AboutUs() {
    return (
        <>
            <NavBar />
            <div id="about" className="container" style={{ marginTop: '10rem' }}>
                <div className="row">
                    <div className="col-sm-8">
                        <h2>Our story</h2>
                        <br />
                        <h4>
                            Deskmukhyy Express - your one-stop destination for a
                            seamless blend of culinary delights and swift, on-the-go services!
                            We understand the fast-paced nature of modern life, and Deskmukhyy
                            Express is here to cater to your cravings and transportation needs
                            with equal flair.
                        </h4>
                        <br />
                        <p>
                            At Deskmukhyy Express, we embarked on a journey to redefine
                            convenience. Inspired by the dynamic lifestyles of today's urban
                            dwellers, we envisioned a platform that seamlessly integrates the
                            joys of gastronomy and the necessity of rapid transportation.
                        </p>
                        <br />
                        <button className="btn btn-default btn-lg">Get in Touch</button>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-signal logo"></span>
                    </div>
                </div>
            </div>

            <div className="container bg-grey" style={{ marginTop: '4rem' }}>
                <div className="row">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-globe logo"></span>
                    </div>
                    <div className="col-sm-8">
                        <h2>Our Values</h2>
                        <br />
                        <h4>
                            <strong>MISSION: </strong>
                            Deskmukhyy Express's mission is to seamlessly integrate the joy of
                            gastronomy with the efficiency of rapid transportation, enriching
                            users' lives with convenience, variety, and speed. We aim to
                            redefine the food delivery and on-the-go experience, fostering
                            continuous improvement and positive connections within our
                            community. Join us in making every moment memorable at Deskmukhyy
                            Express.
                        </h4>
                        <br />
                        <p>
                            <strong>VISION:</strong> At Deskmukhyy Express, we envisage a
                            future where the fusion of convenience, speed, and culinary
                            delight transforms the user experience. As a pioneer in
                            innovation, we set the industry standard, providing swift,
                            reliable, and customer-centric services. Our platform becomes a
                            dynamic space where users effortlessly explore a diverse culinary
                            landscape, savoring a spectrum of flavors at their fingertips.
                            Beyond being a service, Deskmukhyy Express shapes a lifestyle that
                            efficiently embraces the modern pace of life, making it both
                            gratifying and flavorful. In this future, our commitment extends
                            to fostering an inclusive community, celebrating diversity, and
                            contributing to the overall well-being of the communities we
                            serve. Deskmukhyy Express is more than an app; it's a lifestyle
                            companion, seamlessly integrating culinary exploration and rapid
                            transportation to elevate every journey into a memorable and
                            efficient experience for all.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}