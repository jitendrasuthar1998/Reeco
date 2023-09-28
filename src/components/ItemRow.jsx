import React, { useState } from "react";
import { Modal } from "@mui/material";
import EditContainer from "./EditContainer";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import MissingProduct from "./MissingProduct";
import status from "../data/status";
import { warning, danger, success } from "../styles/colors";
import { useDispatch } from "react-redux";
import { handleStatus } from "../orders-redux/orderSlice";
import itemListStyle from "../styles/itemList.styled";

const {
  Approved,
  PriceUpdated,
  QuantityUpdated,
  QuantityPriceUpdated,
  Missing,
  MissingUrgent,
  PriceNotSame,
  QuantityNotSame,
  Other,
} = status;

const { ItemImage, IconContainer } = itemListStyle;

const ItemRow = (props) => {
  const { item } = props;
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [missingProductModal, setMissingProductModal] = useState(false);

  const handleEditModal = (value) => {
    setEditModalOpen(value);
  };

  const handleMissingProductModal = (value) => {
    setMissingProductModal(value);
  };

  const allStatus = [
    Approved,
    PriceUpdated,
    QuantityUpdated,
    QuantityPriceUpdated,
    PriceNotSame,
    QuantityNotSame,
    Other,
  ];

  const status = item.status;
  const dispatch = useDispatch();

  const handleApprove = () => {
    let statusObj = { id: item.id, status: Approved };
    dispatch(handleStatus(statusObj));
  };

  const getColor = (status) => {
    let color = "";
    if (allStatus.includes(status)) {
      color = success;
    } else if (status === Missing) {
      color = warning;
    } else if (status === MissingUrgent) {
      color = danger;
    }
    return color;
  };

  return (
    <tr>
      <td>
        <ItemImage src={item.img} alt="avocodo" /> {item.name}
      </td>
      <td>{item.brand}</td>
      <td>${item.price} / 6+1LB</td>
      <td>
        <span style={{ color: "black", fontWeight: "bold" }}>
          {item.quantity}
        </span>{" "}
        *6+1LB
      </td>
      <td>${item.price * item.quantity}</td>
      <td>
        <span
          style={{
            padding: "10px 15px",
            backgroundColor: getColor(status),
            borderRadius: "20px",
            fontSize: "14px",
            color: "white",
          }}
        >
          {item.status}
        </span>
      </td>
      <td>
        <IconContainer onClick={() => handleApprove()}>
          <CheckIcon
            fontSize="small"
            style={{
              color: allStatus.includes(status) ? getColor(status) : "",
            }}
          />
        </IconContainer>
        <IconContainer onClick={() => handleMissingProductModal(true)}>
          <ClearIcon
            fontSize="small"
            style={{
              color: allStatus.includes(status) ? "" : getColor(status),
            }}
          />
        </IconContainer>
        <span
          onClick={() => handleEditModal(true)}
          style={{ cursor: "pointer" }}
        >
          Edit
        </span>
      </td>

      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={missingProductModal}
        onClose={() => handleEditModal(false)}
      >
        <MissingProduct id={item.id} handleModal={handleMissingProductModal} />
      </Modal>

      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={editModalOpen}
        onClose={() => handleEditModal(false)}
      >
        <EditContainer id={item.id} handleModal={handleEditModal} />
      </Modal>
    </tr>
  );
};

export default ItemRow;
