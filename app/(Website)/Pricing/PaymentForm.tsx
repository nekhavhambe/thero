import React, { useState } from 'react';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e) => setCardNumber(e.target.value);
  const handleCardExpiryChange = (e) => setCardExpiry(e.target.value);
  const handleCvvChange = (e) => setCvv(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ cardNumber, cardExpiry, cvv });
  };

  return (
   <>
      <div style={{ marginBottom: '10px', textAlign: 'left', display:'flex', border:"1px solid #e4e4e4", padding:5, borderRadius:5 }}>
        {/* <a href="mailto:help@epicpay.co.za">help@epicpay.co.za</a> */}
        <div style={{width:50, maxHeight:50, borderRadius:5, backgroundColor:"rgba(173, 216, 230, 1)", display:"flex", justifyContent:"center", alignItems:"center"}} > 
        <img style={{width:20}} src="/svg/credit.svg" />
        </div>
        <span style={{ display: 'block', color: 'black',fontSize:13 ,paddingLeft:10 }}>Adding a new card will incur a temporary R1.00 debit for verification, refunded shortly after</span>
      </div>
      <div >
        <div style={{ marginBottom: '1px', border:"1px solid #e4e4e4" , display:'flex', padding:4, alignItems:"center"}}>
          <label style={{fontSize:13, color:'#999999', flex:1}}>
            Card Number
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="5555 5666 5555"
              required
              style={{ width:'99%', outline:"none", height:20, border:"none"}}
            />
            
          </label>
          <img style={{width:37, height:37}} src="/pay/master.png" />

        </div>
        <span className='error'>Invalid card expiry</span>
        </div>

<div style={{display:"flex", gap:10}}>
    <div >
        <div style={{ marginBottom: '1px', flex:1, border:"1px solid #e4e4e4" , padding:4 }}>
          <label style={{fontSize:13, color:'#999999'}}>
            Card Expiry
            <input
              type="text"
              value={cardExpiry}
              onChange={handleCardExpiryChange}
              placeholder="MM/YY"
              required
              style={{ width:'99%', outline:"none", height:20, border:"none"}}
            />
          </label>
          
        </div>
        <span className='error'>Invalid card expiry</span>
        </div>


        <div style={{flex:1}}>
        <div style={{ marginBottom: '1px', flex:1, border:"1px solid #e4e4e4" , padding:4 }}>
          <label style={{fontSize:13, color:'#999999'}}>
            CVV
            <input
              type="text"
              value={cvv}
              onChange={handleCvvChange}
              placeholder="CVV"
              required
              style={{ width:'99%', outline:"none", height:20, border:"none"}}
            />
          </label>
          
        </div>
        <span className='error'>Invalid card cvv</span>
        </div>
        </div>
        <div style={{display:"flex"}}>
            <button style={{marginRight:10}} className="button-payment">Authorise ZAR 1.00</button>
            <button className="button-payment">Cancel</button>
        </div>
      </>
    
  );
};

export default PaymentForm;