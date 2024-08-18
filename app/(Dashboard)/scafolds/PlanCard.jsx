import React from "react";

const SubscriptionPlan = () => {
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            position: "relative"
          }}
        >
          <div style={{width:30, height:30, borderRadius:30, backgroundColor:"grey", display:'flex'}}></div>
          <div style={{width:2, height:40,  backgroundColor:"grey", position:"absolute", left:30/2, top:35}}></div>
          <div style={{ alignItems: "left", paddingLeft:10 ,fontSize: "14px" }}>
            <p style={{ textAlign: "left" }}> Due Today </p>
            <p style={{ textAlign: "left" }}> 14 days left in trial</p>
          </div>

          <p style={{ fontSize: "14px", flex: 1, textAlign:'right'}}>ZAR 614.99</p>
        </div>
         <div style={{minHeight:50}}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
           
          }}
        >
            <div style={{width:30, height:30, borderRadius:30, backgroundColor:"grey"}}></div>
          <div style={{ alignItems: "left" , fontSize: "14px" }}>
            <p style={{ textAlign: "left", paddingLeft: 10 }}>Next Payment Date</p>
            <p style={{ textAlign: "left", paddingLeft:10 }}> Starting Oct 26, 2024</p>
          </div>

          <p style={{ fontSize: "14px", flex: 1, textAlign:'right' }}>ZAR 614.99</p>
        </div>

        <div
          style={{ marginTop: "50px", display: "flex", alignItems: "center" }}
        >
          <div
            alt="MasterCard"
            style={{
              width: "40px",
              height: "24px",
              marginRight: "10px",
              backgroundColor: "grey",
            }}
          />
          <p style={{ margin: 0, fontWeight: "normal" , fontSize:14}}>Mastercard-4814 <span style={{color:"blue", fontWeight:"normal", fontSize:12, paddingLeft:20}} > Change Method</span></p> 
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
