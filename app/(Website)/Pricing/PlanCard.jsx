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
          <div style={{width:15, height:15, borderRadius:30, backgroundColor:"blue", display:'flex', marginTop:2}}></div>
          <div style={{width:1, height:50,  backgroundColor:"blue", position:"absolute", left:15/2, top:25}}></div>
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
            <div style={{width:15, height:15, borderRadius:30, backgroundColor:"blue" }}></div>
          <div style={{ alignItems: "left" , fontSize: "14px" }}>
            <p style={{ textAlign: "left", paddingLeft: 10 }}>Next Payment Date</p>
            <p style={{ textAlign: "left", paddingLeft:10 }}> On Oct 26, 2024</p>
          </div>

          <p style={{ fontSize: "14px", flex: 1, textAlign:'right' }}>ZAR 614.99</p>
        </div>

        <div
          style={{ marginTop: "50px", display: "flex", alignItems:"center"}}
        >
          <p style={{ margin: 0, fontWeight: "normal" , fontSize:14}}>Yearly Billing Cycle </p> 
          <p style={{color:"grey", fontWeight:"normal", fontSize:12, paddingLeft:20, flex:1, textAlign:"right"}} > <span style={{color:"blue" }}>Change Cycle</span></p>
        </div>

        <div
          style={{ marginTop: "10px", display: "flex", alignItems: "center" }}
        >
          <img
            src='/pay/visa.png'
            alt="MasterCard"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
            }}
          />
          <p style={{ margin: 0, fontWeight: "normal" , fontSize:14}}>Mastercard-4814 <span style={{color:"blue", fontWeight:"normal", fontSize:12, paddingLeft:20}} > Change Method</span></p> 
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
