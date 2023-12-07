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
    <div style={{height: '100px', background: 'red', 'margin':"20px"}} >
      
    </div>
  );
}
