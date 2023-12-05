import React from "react";
import moment from "moment";

export default function Request({ data }) {
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
    <div className="card mx-2" id={data._id} style={{ width: "25rem", minHeight: "13rem" }}>
      <div className="card-header text-capitalize">{data.category}</div>
      <div className="card-body">
        <h5 className="card-title text-capitalize">{data.requirement}</h5>
        <p className="card-text mb-2">Requested by: {data.user.username}</p>
        <p className="card-text">
          Request time: {moment(data.createdAt).format("Do MMM, YYYY [at] h:mmA")}
        </p>
        <div className={
            "badge p-2 text-capitalize" + getClassnameBasedOnStatus(data.status)
          }>
          {data.status}
        </div>
      </div>
    </div>
  );
}
