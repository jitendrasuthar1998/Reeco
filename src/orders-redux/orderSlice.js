import { createSlice } from "@reduxjs/toolkit";
import foodItems from "../data/foodItems.js";

const initialState = {
  orders: foodItems,
  orderTotal:0
};

const orderSlice = createSlice({
  name: "orderApp",
  initialState,
  reducers: {
    setQuantity:(state, action) => {
      const {id, qty} = action.payload;
      console.log("id is == ", id);
      console.log("qty is == ", qty);
      
      const index = state.orders.findIndex((item) => item.id === id);
      
      if (index !== -1) {
        state.orders[index].quantity = qty;
      }
      
    },
    incrementQuantity: (state, action) => {
      console.log("state is == ", state.orders);
      const index = state.orders.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.orders[index].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      console.log("state is == ", state.orders);
      const index = state.orders.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        if (state.orders[index].quantity >= 1) {
          state.orders[index].quantity -= 1;
        } else {
          // state.orders[index].quantity === 0
          // state.orders.splice(index, 1);
          return;
        }
      }
    },
    handleStatus:(state, action)=>{
      const {id, status} = action.payload;
      console.log("id is == ", id);
      console.log("status is == ", status);
      const index = state.orders.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.orders[index].status = status;
      }
    },
    handlePrice: (state, action) => {
      const {id, price} = action.payload;
      console.log("id is == ", id);
      console.log("price is == ", price);
      const index = state.orders.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.orders[index].price = price;
      }
    },
    handleQty: (state, action) => {
      const {id, qty} = action.payload;
      console.log("id is == ", id);
      console.log("qty is == ", qty);
      const index = state.orders.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.orders[index].quantity = qty;
      }
    },
  }, 
});

export const {
  addToOrders,
  removeFromOrders,
  incrementQuantity,
  decrementQuantity,
  handlePrice,
  handleQty,
  setQuantity,
  handleStatus
} = orderSlice.actions;

export default orderSlice.reducer;
