import React from "react";
import ItemRow from "./ItemRow";
import { useSelector } from "react-redux";

import itemListStyle from "../styles/itemList.styled";

const {ListContainer} = itemListStyle;

const ItemList = () => {

  const {orders} = useSelector((state)=>state.orderApp);

  return (
    <ListContainer>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <ItemRow item={item}/>
          ))}
        </tbody>
      </table>
    </ListContainer>
  );
};

export default ItemList;
