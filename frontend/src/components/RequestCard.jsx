import React from "react";
import moment from "moment";
import Button from "react-bootstrap/Button";

const defaultImages = {
  drop: "/rider.jpg",
  delivery: "/food.jpeg",
};

export default function RequestCard({ data, onOrderAccept, styles={}, actionButton=false }) {
  const getCardImage = (cardData) => {
    let { image, category } = cardData;
    if (image) return image;

    return defaultImages[category] || '/default_large.png';
  };

  return (
    <a
      href="#"
      className="action-card m-3 px-0 position-relative"
      style={styles}
    >
      <div
        className="ribbon pe-4 text-capitalize right">
        {data.category}
      </div>
      <img
        src={getCardImage(data)}
        alt=""
        className="card__img"
      />
      <span className="card__footer pb-2">
        <span className="text-capitalize">{data.requirement}</span>
        <span>{moment(data.createdAt).format("Do MMM, YYYY [at] h:mmA")}</span>
      </span>
      
      {actionButton ? (
        <span className="card__action">
          <Button variant="dark" id={data._id} onClick={onOrderAccept}>
            Accept
          </Button>
        </span>
      ) : ''}

    </a>
  );
}
