import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  return (
    <div
      style={{
        width: "90vw",
        margin: "10px auto",
        backgroundColor: "whitesmoke",
        paddingLeft: "60px",
        paddingRight: "60px",
      }}
    >
      <div
        style={{
          height: "60px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "30px",
            width: "200px",
            borderRadius: "10px",
            border: "1px solid gray",
          }}
        >
          <input
            placeholder="Search.."
            style={{
              border: "none",
              padding: "5px 10px",
              outline: "none",
              backgroundColor: "transparent",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection:"row", alignItems:"center" }}>
          <div
            style={{
              height: "30px",
              border: "1px solid green",
              borderRadius: "15px",
              color: "green",
              padding: "10px 20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "14px",
              marginRight:"20px"
            }}
          >
            Add Item
          </div>
          <div>Print</div>
        </div>
      </div>
      <ItemList/>
    </div>
  );
};

export default ItemListContainer;
