import React from "react";
import "./payment.css";
import CloseIcon from '@mui/icons-material/Close';
import PaymentForm from "./PaymentForm";

const PaymentMethods = () => {
  return (
    <div className="payment-pop:" style={{position:"absolute", top:0, left:0, width:"100vw", height:"100vh",backdropFilter:"blur(4px)" ,backgroundColor:"rgba(0, 0, 0, 0.1)",display:"flex", justifyContent:"center", alignItems:"center"}}>
    {true && <div className="payment-methods">
        <div style={{paddingBottom:15, marginBottom:35, display:'flex', borderBottom:'1px solid #d3d3d3'}}>
            <p style={{flex:1}}>Payment Method</p>
            <CloseIcon style={{color:"grey", width:20, height:20}} />
        </div>
        {[{name:"Visa ending in 7830", expir:"", expired: false, icon:"/pay/master.png", default: true},{name:"Visa ending in 7830", expir:"", expired: true, icon:"/pay/visa.png"},{name:"Manual Bank Transfer", expir:"", expired: false, icon:"/pay/sbs1.png"}].map(el => {
            return  <div style={{border: el.default ? "1px solid blue": "1px solid #ddd"}} className="payment-card">
            <div className="card-info">
              <img src={el.icon} className="card-logo" />
                <p style={{maxWidth:150, minWidth:150}} className="card-number">{el.name}</p>
                <p className="card-expiry">Exp. Date 06/24</p>
            </div>
            <div className="card-actions">
              {el.default && <button className="default-btn">Default</button>}
              {!el.default && el.expired&& <span className="expired-badge">Expired</span>}
              {!el.default && !el.expired&& <button className="set-default-btn">Set as Default</button>}
              <img src='/pay/delete.png' className="delete-btn"/>
   
            </div>
          </div>
        })}
        <div style={{display:"flex"}}>
            <button style={{marginRight:10}} className="button-payment">Save</button>
            <button className="button-payment">Add Card</button>
        </div>
    </div>}
    </div>
  );
};

export default PaymentMethods;
