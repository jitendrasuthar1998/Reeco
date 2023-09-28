import React, { useEffect, useState } from "react";
import Avocodo from "../images/avocadoHass.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  handlePrice,
  handleQty,
  handleStatus,
  incrementQuantity,
  setQuantity,
} from "../orders-redux/orderSlice";

import status from "../data/status.js";
import { warning } from "../styles/colors";

import editContainerStyle from "../styles/editContainer.styled";

const {
  MainContainer,
  ItemNameAndBrandContainer,
  ItemNameContainer,
  BrandNameContainer,
  ItemImagePriceQtyContainer,
  ItemImageContainer,
  ItemImage,
  ItemPriceQtyContainer,
  ItemTotalText,
  ItemTotalValue,
  QtyBtn,
  Input,
  InputSupportTextContainer,
  PriceInputContainer,
  QtyInputBtnContainer,
  SupportText,
  SelectReasonOptionalTextContanier,
  ItemTotalContainer,
  AllReasonsContainer
} = editContainerStyle;

const {
  PriceUpdated,
  QuantityUpdated,
  QuantityPriceUpdated,
  PriceNotSame,
  QuantityNotSame,
  Other,
  MissingProduct,
} = status;


const EditContainer = (props) => {
  const { id, handleModal } = props;

  const [bgColor, setBgColor] = useState("");

  const chipStyle = {
    border: "1px solid gray",
    padding: "8px 8px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "12px",
  };

  const { orders } = useSelector((state) => state.orderApp);

  const item = orders.find((item) => item.id === id);

  const [price, setPrice] = useState(item.price);
  const [qty, setQty] = useState(item.quantity);

  const dispatch = useDispatch();

  const handleIncreaseQty = (item) => {
    setQty(qty + 1);
  };

  const handleDecreaseQty = (item) => {
    if (qty !== 0) {
      setQty(qty - 1);
    }
    return;
  };

  const handlePriceChange = (e) => {
    console.log("e.target.value is == ", e.target.value);
    if (Number(e.target.value)) {
      setPrice(e.target.value);
    } else {
      alert("Price can be only number");
      return;
    }
  };

  const handleQtyChange = (e) => {
    if (Number(e.target.value && e.target.value > 0)) {
      setQty(e.target.value);
    } else {
      alert("Price can be only number");
      return;
    }
  };

  console.log("item is == ", item);

  const [selectedReason, setSelectedReason] = useState("");

  const reasons = [MissingProduct, QuantityNotSame, PriceNotSame, Other];

  const handleReason = (reason) => {
    setSelectedReason(reason);
    setBgColor(warning);
  };

  // in this function, add changes to redux store.
  const handleSend = () => {
    let obj = { id: item.id, qty: Number(qty) };

    if (item.quantity !== Number(qty)) {
      dispatch(setQuantity(obj));
    }

    if (item.price !== Number(price)) {
      obj = { id: item.id, price: Number(price) };
      dispatch(handlePrice(obj));
    }

    let statusObj = { id: item.id, status: QuantityPriceUpdated };
    if (item.price !== price && item.quantity !== qty) {
      statusObj.status = QuantityPriceUpdated;
      dispatch(handleStatus(statusObj));
      return;
    }

    if (item.price !== price) {
      statusObj.status = PriceUpdated;
      dispatch(handleStatus(statusObj));
      return;
    }

    if (item.quantity !== qty) {
      statusObj.status = QuantityUpdated;
      dispatch(handleStatus(statusObj));
      return;
    }

    if (selectedReason) {
      statusObj.status = selectedReason;
      dispatch(handleStatus(statusObj));
      return;
    }
  };

  return (
    <MainContainer>
      <span style={{position:"absolute", right:20, top:20, fontSize:"18px", fontWeight:"bold", cursor:"pointer", height:"30px", width:"30px"}} onClick={()=> handleModal(false)}>X</span>
      <ItemNameAndBrandContainer>
        <ItemNameContainer>{item.name}</ItemNameContainer>
        <BrandNameContainer>{item.brand}</BrandNameContainer>
      </ItemNameAndBrandContainer>
      <ItemImagePriceQtyContainer>
        <ItemImageContainer>
          <ItemImage
            src={item.img}
            alt="avocodo"
          />
        </ItemImageContainer>
        <ItemPriceQtyContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
              alignItems: "center",
            }}
          >
            <div style={{ flex: 0.4, fontSize: "14px", color: "black" }}>
              Price
            </div>
            <InputSupportTextContainer
            >
              <PriceInputContainer>
                <Input
                  value={price}
                  name="price"
                  onChange={(e) => handlePriceChange(e)}
                />
              </PriceInputContainer>
              <SupportText>
                {" "}
                /6*1LB
              </SupportText>
            </InputSupportTextContainer>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
              alignItems: "center",
            }}
          >
            <div style={{ flex: 0.4, color: "black", fontSize: "14px" }}>
              Quantity
            </div>
            <InputSupportTextContainer>
              <QtyInputBtnContainer>
                <QtyBtn onClick={() => handleDecreaseQty(item)}>-</QtyBtn>
                <Input
                  value={qty}
                  name="quantity"
                  onChange={(e) => handleQtyChange(e)}
                />
                <QtyBtn onClick={() => handleIncreaseQty(item)}>+</QtyBtn>
              </QtyInputBtnContainer>
              <SupportText>
                *6*1LB
              </SupportText>
            </InputSupportTextContainer>
          </div>
          <ItemTotalContainer>
            <ItemTotalText>Total</ItemTotalText>
            <ItemTotalValue>
              <span>${price * qty}</span>
            </ItemTotalValue>
          </ItemTotalContainer>
        </ItemPriceQtyContainer>
      </ItemImagePriceQtyContainer>
      <div>
        <SelectReasonOptionalTextContanier>
          <span style={{ fontWeight: "bold" }}>Choose Reason</span>{" "}
          <span>(optional)</span>
        </SelectReasonOptionalTextContanier>
        <AllReasonsContainer
        >
          {reasons.map((item) => (
            <span
              onClick={() => handleReason(item)}
              style={{
                backgroundColor: selectedReason === item ? bgColor : "",
                border: "1px solid gray",
                padding: "8px 8px",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "12px",
                color: selectedReason === item ? "white" : "",
              }}
            >
              {item}
            </span>
          ))}
        </AllReasonsContainer>
      </div>
      <div
        style={{
          justifyContent: "flex-end",
          display: "flex",
          height: "60px",
          alignItems: "center",
          fontSize: "14px",
          paddingRight: "10px",
        }}
      >
        <span
          style={{ color: "green", cursor: "pointer" }}
          onClick={() => handleModal(false)}
        >
          Cancel
        </span>
        <span
          style={{
            padding: "10px 30px",
            backgroundColor: "green",
            color: "white",
            borderRadius: "20px",
            marginLeft: "20px",
            cursor: "pointer",
          }}
          onClick={() => handleSend()}
        >
          Send
        </span>
      </div>
    </MainContainer>
  );
};

export default EditContainer;
