import React from "react";
import "./itemList.css";
import items from "../data/items";

const ItemList = () => {
  return (
    <div>
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
            {
                items.map((item)=>(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.brand}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.total}</td>
                        <td>{item.status}</td>
                        <td>{item.actions}</td>
                    </tr>
                ))
            }
          {/* <tr>
            <td>Chiken Breast Fillets</td>
            <td>Hornel Black Labelmany</td>
            <td>$60.67 / 6+1LB</td>
            <td>0*6+1LB</td>
            <td>0</td>
            <td></td>
            <td>Edit</td>
          </tr> */}
        </tbody>
      </table>
      {/* <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table> */}
    </div>
  );
};

export default ItemList;
