import React from "react";
import "../styles/orderHeading.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const OrderHeading = () => {
  return (
    <div className="order-heading-container">
      <div className="order-heading-text">
        Order{" "}
        <ArrowForwardIosIcon style={{ fontSize: "12px", margin: "0px 5px" }} />{" "}
        <span className="order-id">Order 32457ABC</span>
      </div>
      <div className="order-btn-and-title-container">
        <h1>Order 32457ABC</h1>
        <div className="order-btn-container">
          <div className="back-button">Back</div>
          <div className="approve-order-btn">Approve Order</div>
        </div>
      </div>
    </div>
  );
};

export default OrderHeading;
