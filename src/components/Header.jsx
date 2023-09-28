import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../styles/header.css";
import headerStyle from "../styles/header.js";

const {
  HeaderContainer,
  AppNameAndNavBtnContainer,
  NavBtnContainer,
  AppName,
  CartAndUserNameContainer,
  UserName,
} = headerStyle;

const Header = () => {
  return (
    <HeaderContainer>
      <AppNameAndNavBtnContainer>
        <AppName>Reeco</AppName>
        <NavBtnContainer>
          <span>Store</span>
          <span>Orders</span>
          <span>Analytics</span>
        </NavBtnContainer>
      </AppNameAndNavBtnContainer>
      <CartAndUserNameContainer>
        <div>
          <ShoppingCartIcon fontSize="small" />
        </div>
        <UserName>
          Hello, James{" "}
          <span>
            <KeyboardArrowDownIcon fontSize="small" />
          </span>
        </UserName>
      </CartAndUserNameContainer>
    </HeaderContainer>
  );
};

export default Header;
