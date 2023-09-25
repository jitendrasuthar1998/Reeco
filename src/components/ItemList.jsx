import React from "react";
import "./itemList.css";
import items from "../data/items";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import AvocodoHass from '../images/avocadoHass.jpg';

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
                        <td><img src={AvocodoHass} style={{height:"20px", width:"20px"}} alt="avocodo"/> {item.name}</td>
                        <td>{item.brand}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.total}</td>
                        <td>{item.status}</td>
                        <td>
                            <span className="icon-container"><CheckIcon fontSize="small"/></span>
                            <span className="icon-container"><ClearIcon fontSize="small"/></span>
                            <span>Edit</span>
                        </td>
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
