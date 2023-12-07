import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { loadRequests, updateRequestStatus } from "../utilities";
import RequestCard from "../components/RequestCard";

export default function DeliveryPartner(props) {
    const [requests, setRequests] = useState([]);

    const onOrderAccept = async (event) => {
        const id = event.target.id;
        const status = 'approved';

        await updateRequestStatus(status, id)
    }

    useEffect(() => {
        async function load() {
            const {data} = await loadRequests('pending');
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
                  <RequestCard onOrderAccept={onOrderAccept} data={item} key={index} />
                )
            })}
          </div>

        </div>
        <Footer />
      </>
    );
}