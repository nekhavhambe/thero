import React from "react";
import "./payment.css";
import CloseIcon from '@mui/icons-material/Close';
import PaymentForm from "./PaymentForm";

const PaymentMethods = () => {
  return (
    <div className="payment-pop:" style={{position:"absolute", top:0, left:0, width:"100vw", height:"100vh",backdropFilter:"blur(4px)" ,backgroundColor:"rgba(0, 0, 0, 0.1)",display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div className="payment-methods">
        <div style={{paddingBottom:15, marginBottom:35, display:'flex', borderBottom:'1px solid #d3d3d3'}}>
            <p style={{flex:1}}>Enter Details</p>
            <CloseIcon style={{color:"grey", width:20, height:20}} />
        </div>
        <PaymentForm />

    </div>
    </div>
  );
};

export default PaymentMethods;
