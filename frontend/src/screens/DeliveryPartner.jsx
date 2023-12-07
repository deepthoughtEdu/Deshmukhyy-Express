import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { loadRequests } from "../utilities";
import RequestCard from "../components/RequestCard";

export default function DeliveryPartner(props) {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        async function load() {
            const {data} = await loadRequests();
            setRequests(data);
        }

        load();
    }, []);

    return (
      <>
        <NavBar />
        <div className="container mt-5 pt-4">
          <h4 className="mb-4 text-center">Pending requests</h4>
          
          <div className="row">
            {requests.map((item, index) => {
                return (
                  <RequestCard data={item} key={index} />
                )
            })}
          </div>

        </div>
        <Footer />
      </>
    );
}