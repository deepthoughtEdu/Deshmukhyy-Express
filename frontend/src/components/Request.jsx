import React from "react";
import moment from "moment";

export default function Request({ data, className }) {
  const getClassnameBasedOnStatus = (status) => {
    switch (status) {
      case "approved":
        return " btn-info";

      case "pending":
        return " btn-warning";

      case "completed":
        return " btn-success";

      default:
        return " btn-light";
    }
  };


  return (
    <div className="border request-card shadow-sm" >
      <div className="card-header px-3 py-2 border-bottom text-capitalize">{data.category}</div>
      <div className="p-3">
        <h5 className="card-title text-capitalize">{data.requirement}</h5>
        <p className="card-text mb-2">Requested by: {data.user.username}</p>
        <p className="card-text">
          Request time: {moment(data.createdAt).format("Do MMM, YYYY [at] h:mmA")}
        </p>
        <div
          className={
            "badge p-2 text-capitalize" + getClassnameBasedOnStatus(data.status)
          }
        >
          {data.status}
        </div>
      </div>
      
    </div>
  );
}
