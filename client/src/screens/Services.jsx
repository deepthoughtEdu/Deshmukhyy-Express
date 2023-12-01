import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Services() {
    return (
        <>
            <NavBar />


            <div className="container" style={{marginTop: '10rem'}}>
                <div className="header">
                    <h1>Services</h1>
                    <p>Your Ultimate Fusion of Flavor and Speed</p>
                </div>
                <section class="services-section">
                    <h2>Culinary Delights</h2>
                    <p>Experience a world of flavors at your fingertips! Our platform brings together a diverse array of culinary delights, curated to tantalize your taste buds. From local favorites to global cuisines, we offer a seamless journey through a spectrum of flavors. Our commitment to excellence ensures each dish arrives with the same freshness and quality you'd expect right at your doorstep.</p>
                    <ul>
                        <li>Diverse Selection: Explore an extensive menu featuring a variety of cuisines, catering to every palate.</li>
                        <li>Delectable Choices: Indulge in our carefully crafted selection of dishes, prepared by top-rated restaurants and chefs.</li>
                        <li>Seamless Experience: Enjoy hassle-free ordering, quick deliveries, and exceptional service, making every culinary experience delightful.</li>
                    </ul>
                </section>
                <section class="services-section">
                    <h2>Transportation</h2>
                    <p>Speed, reliability, and convenience are at the core of our transportation services. Whether it's a quick commute or an urgent delivery, Deskmukhyy Express ensures you reach your destination efficiently.</p>
                    <ul>
                        <li>Swift Travel: Reach your destinations with ease and speed, relying on our reliable transportation services.</li>
                        <li>Reliable Partners: We collaborate with trusted transport providers to ensure safe and prompt deliveries.</li>
                        <li>Effortless Access: Seamlessly integrate your culinary orders with our transportation services for a complete, hassle-free experience.</li>
                    </ul>
                </section>
                <section class="services-section">
                    <h2>Integration</h2>
                    <p>Deskmukhyy Express is where flavor meets speed, creating a harmonious blend of culinary exploration and rapid transportation.</p>
                    <ul>
                        <li>Blending Flavors and Speed: Our platform seamlessly integrates the joys of culinary discovery with the necessity of swift transportation.</li>
                        <li>Efficiency Redefined: Experience a lifestyle that harmonizes modern convenience and delightful experiences.</li>
                        <li>Enhanced Journey: Elevate every moment with our integrated services, making your journey not just efficient but also memorable.</li>
                    </ul>
                </section>
                <div>
                    <p>Join us in this journey where we combine the best of culinary excellence and rapid transportation to transform every experience into a flavorful and efficient adventure. At Deskmukhyy Express, we're committed to enhancing your lifestyle and enriching every journey you undertake.</p>
                    <p>Ready to embark on this delightful journey with us?</p>
                </div>
            </div>

            <Footer />
        </>
    )
}