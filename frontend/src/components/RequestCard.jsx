import React from "react";
import moment from "moment";
import Button from 'react-bootstrap/Button';

export default function RequestCard({ data }) {

  return (
    <div className="card m-2 p-0" id={data._id} style={{ width: "25rem", minHeight: "13rem" }}>
      <div className="card-header text-capitalize">{data.category}</div>
      <div className="card-body">
        <h5 className="card-title text-capitalize">{data.requirement}</h5>
        <p className="card-text mb-1">Requested by: {data.user.username}</p>
        <p className="card-text">
          Request time: {moment(data.createdAt).format("Do MMM, YYYY [at] h:mmA")}
        </p>
        
        <Button>Accept</Button>

      </div>
    </div>
  );
}
