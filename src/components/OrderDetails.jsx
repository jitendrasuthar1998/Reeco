import React from "react";
import "./orderDetails.css";
const OrderDetails = () => {
  return (
    <div className="orderDetailsContainer">
      <div className="item">
        <div className="item-header">Supplier</div>
        <div className="item-details">East coast fruits & vegetables</div>
      </div>
      <div className="separator"></div>
      <div className="item">
        <div className="item-header">Shipping Date</div>
        <div className="item-details">Thu, Feb 10</div>
      </div>
      <div className="separator"></div>
      <div className="item">
        <div className="item-header">Total</div>
        <div className="item-details">$ 15,0823.3</div>
      </div>
      <div className="separator"></div>
      <div className="item"></div>
      <div className="separator"></div>
      <div className="item">
        <div className="item-header">Department</div>
        <div className="item-details">300-444-678</div>
      </div>
      <div className="separator"></div>
      <div className="item">
        <div className="item-header">Status</div>
        <div className="item-details">Awaiting your approval</div>
      </div>
    </div>
  );
};

export default OrderDetails;
