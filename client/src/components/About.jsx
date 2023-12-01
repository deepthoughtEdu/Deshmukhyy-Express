import React from "react";

export default function About() {
  return (
    <>
      

      <div id="services" className="container-fluid text-center">
        <h2>SERVICES</h2>
        <h4>What we offer</h4>
        <br />
        <div className="row">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-cutlery logo-small"></span>
            <h4>Culinary Delights</h4>
            <p>Diverse, Delectable, Seamless</p>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-road logo-small"></span>
            <h4>Transportation</h4>
            <p>Reach destinations with speed and reliability.</p>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-transfer logo-small"></span>
            <h4>Integration</h4>
            <p>Blends flavors and speed</p>
          </div>
        </div>
      </div>
    </>
  );
}
