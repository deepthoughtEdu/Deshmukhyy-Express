import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'

export default function RequestTable({requests}) {
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