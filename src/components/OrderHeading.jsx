import React from 'react'

const OrderHeading = () => {
  return (
    <div style={{width:"100vw", padding:"10px 60px", backgroundColor:"aliceblue"}}>
        <div style={{height:"35px", display:"flex", alignItems:"center"}}>
            Order Order 32457ABC
        </div>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%"}}>
            <h1>Order 32457ABC</h1>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"20%", minWidth:"220px", maxWidth:"240px"}}>
                <div style={{padding:"10px 20px", borderRadius:"20px", border:"1px solid green", backgroundColor:"white", color:"green", cursor:"pointer"}}>
                    Back
                </div>
                <div style={{padding:"10px 20px", borderRadius:"20px", border:"1px solid green", backgroundColor:"green", color:"white", cursor:"pointer"}}>
                    Approve Order
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderHeading