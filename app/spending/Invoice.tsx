import React from 'react';

// Example InvoiceList component
const InvoiceList = ({ invoices }) => {
    
  return (
    <div className="invoice-list">
      <div style={{display:"flex", alignItems:"center"}}>
      <h2 style={{textAlign:"left", flex:1}}>Purchases</h2>
      <p style={{textDecoration:"underline"}} onClick={() => {
                                  const doc = document.getElementById("pop")
                                  doc.style.display = "none"
                }}>Close Modal</p>
      </div>
      
      {invoices.length === 0 ? (
        <p>No invoices available.</p>
      ) : (
        <table>
          <thead>
            <tr style={{textAlign:"left"}}>
              <th style={{width:250}}>Created From</th>
              <th  style={{width:150}}>Date</th>
              <th  style={{width:150}}>Supplier</th>
              <th  style={{width:150}}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoices[0].map(invoice => {
              console.log(invoice, '<<<<<<<<<<<<------------>>>>>>>>>>>>>>>')
                if(invoice){
                    return  ( <tr style={{borderTop:'4px solid black', paddingTop:8,backgroundColor:"red"}} key={invoice.id}>
                        <td style={{width:250}}>{invoice.created_from}</td>
                        <td  style={{width:150}}>{invoice.date}</td>
                        <td  style={{width:150, textAlign:"left"}}>{invoice.vendor}</td>
                        <td  style={{width:150}}>{invoice.amount}</td>
                      </tr>)
                }

    
})}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InvoiceList;
