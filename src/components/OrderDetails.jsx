import React from "react";
import "../styles/orderDetails.css";
import { useSelector } from "react-redux";
import category from "../images/category.png";

const OrderDetails = () => {

  const {orders} = useSelector((state)=> state.orderApp);

  const orderTotal = orders.reduce((a, c) => a + c.quantity * c.price, 0);

  return (
    <div className="order-details-container">
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
        <div className="item-details">$ {orderTotal.toFixed(2)}</div>
      </div>
      <div className="separator"></div>
      <div className="item">
        <div className="item-header">Category</div>
        <div><img src={category} style={{height:"50px", width:"200px"}}/></div>
      </div>
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
