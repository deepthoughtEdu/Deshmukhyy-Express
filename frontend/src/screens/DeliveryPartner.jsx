import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { loadRequests } from "../utilities";

export default function DeliveryPartner(props) {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        async function load() {
            const {data} = await loadRequests();
            setRequests(data)
        }

        load();
    }, []);

    return (
      <>
        <NavBar />
        <div className="container mt-5 pt-4">
          <h4 className="mb-4 text-center">Pending requests</h4>
          <RequestTable requests={requests} />
        </div>
        <Footer />
      </>
    );
}

function RequestTable({requests}) {
    const headers = ['Requirement', 'Category', 'Fare', 'Time', 'Action'];
    return (
        <Table>
            <thead>
              <tr>
                <th>#</th>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {requests.length &&
                requests.map((request, index) => (
                  <Row key={index} rowNumber={index + 1} data={request} />
                ))}
            </tbody>
        </Table>
    )
}

function Row({data, rowNumber}) {

    return (
        <tr>
            <td>{rowNumber}</td>
            <td className="text-capitalize">{data.requirement}</td>
            <td className="text-capitalize">{data.category}</td>
            <td>{data.fare}</td>
            <td>{data.time}</td>
            <td>
                <Button variant="success">Accept</Button>
            </td>
        </tr>
    )
}