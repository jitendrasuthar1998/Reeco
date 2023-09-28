import React from "react";
import ItemList from "./ItemList";
import PrintIcon from "@mui/icons-material/Print";
import itemListStyle from "../styles/itemList.styled";

const {TableContainer, InputBtnContainer, InputContainer, Input, BtnsContainer, NewItemBtn} = itemListStyle;

const ItemListContainer = () => {
  return (
    <TableContainer>
      <InputBtnContainer>
        <InputContainer>
          <Input placeholder="Search.." />
        </InputContainer>
        <BtnsContainer>
          <NewItemBtn>Add Item</NewItemBtn>
          <PrintIcon />
        </BtnsContainer>
      </InputBtnContainer>
      <ItemList />
    </TableContainer>
  );
};

export default ItemListContainer;
