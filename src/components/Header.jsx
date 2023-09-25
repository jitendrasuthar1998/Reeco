import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Header = () => {
  return (
    <div
      style={{
        height: "50px",
        width: "100vw",
        paddingLeft: "60px",
        paddingRight: "60px",
        backgroundColor: "green",
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center", width:"86%" }}
      >
        <span style={{ fontSize: "24px" }}>Reeco</span>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "30%",
            maxWidth:"250px",
            minWidth:"250px",
            paddingLeft:"50px",
            justifyContent: "space-between",
          }}
        >
          <span>Store</span>
          <span>Orders</span>
          <span>Analytics</span>
        </div>
      </div>
      <div
        style={{
          width: "14%",
          maxWidth:"200px",
          minWidth:"200px",
          textAlign: "right",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: "20px",
          alignItems:"center"
        }}
      >
        <div><ShoppingCartIcon fontSize="small"/></div>
        <div style={{display:"flex", alignItems:"center"}}>
          Hello, James <span><KeyboardArrowDownIcon fontSize="small"/></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
