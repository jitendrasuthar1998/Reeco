import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleStatus } from '../orders-redux/orderSlice';
import status from "../data/status.js"

const btnTextStye = {marginRight:"30px", fontSize:"18px", fontWeight:"bold", color:"black"};



const {Missing, MissingUrgent} = status;

const MissingProduct = (props) => {

const {id, handleModal} = props;

const { orders } = useSelector((state) => state.orderApp);

const {name} = orders.find((item) => item.id === id);

const dispatch = useDispatch()

const handleMissingProduct = (isMissingUrgent) => {
    let obj = {id: id, status: ""}
    if(isMissingUrgent){
        obj.status = MissingUrgent;
        dispatch(handleStatus(obj));
        handleModal(false);
    }else{
        obj.status = Missing
        dispatch(handleStatus(obj))
        handleModal(false);
    }
}

  return (
    <div style={{border: "1px solid gray", width:"500px", backgroundColor:"white", margin:"400px auto", padding:"20px", borderRadius:"20px", position:"relative"}}>
        <span style={{position:"absolute", right:20, fontSize:"18px", fontWeight:"bold", cursor:"pointer", height:"30px", width:"30px"}} onClick={()=> handleModal(false)}>X</span>
        <div>
            <h3>Missing Product</h3>
        </div>
        <div>
            Is `{name}` urgent?
        </div>
        <div style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
            <span style={btnTextStye} onClick={()=> handleMissingProduct(false)}>No</span>
            <span style={btnTextStye} onClick={()=> handleMissingProduct(true)}>Yes</span>
        </div>
    </div>
  )
}

export default MissingProduct