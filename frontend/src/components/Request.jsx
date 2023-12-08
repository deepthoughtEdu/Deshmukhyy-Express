import React from "react";
import moment from "moment";

export default function Request({ data, image }) {

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
    <div className="request-card">
        <div
          className="card text-dark card-has-bg click-col"
          style={{backgroundImage: `url(${image})`}}
        >
          <img
            className="card-img d-none"
            src={image}
            alt=""
          />
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              <small className="card-meta mb-2 text-uppercase">{data.category}</small>
              <h4 className="card-title mt-0 ">
                <div className="text-dark text-capitalize">
                {data.requirement}
                </div>
              </h4>
              <small>
                <i className="far fa-clock"></i> {moment(data.createdAt).format("Do MMM, YYYY [at] h:mmA")}
              </small>
            </div>
            <div className="card-footer">
              <div className="media">
                <img
                  className="mr-3 rounded-circle"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVtgJ72Z9ZjAmyoqkl2MBOV8OeR5TApLj2cbdH4r44jzojGOP-EoAeDOm_JEO35MNMEE&usqp=CAU"
                  alt="Generic placeholder image"
                  style={{maxWidth: '50px'}}
                />
                <div className="media-body">
                  <h6 className="my-0 text-dark d-block">{data.user.username}</h6>
                  <small>User</small>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
